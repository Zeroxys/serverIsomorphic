import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes/Routes'
import path from 'path'
import cors from 'cors'
import axios from 'axios'
import compression from 'compression'

import createStore from './client/helpers/createStore'
import template from './client/helpers/template'

const apiKey = '22360f3a2e03f847acf5339695e42e5b'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: '*'
}))

// Set proxy
app.use('/api', proxy(`http://api.invent.mx/`, {  
proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))


function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true})
  } else {
    next()
  }
}

app.use(ignoreFavicon)

app.use(compression())
app.use(express.static(path.resolve('all/actitudfem/public')))

app.get('*', (req, res) => {
  const store = createStore(req) 

  const promises = matchRoutes(Routes, req.path).map( ({route}) => {
    return route.loadData ? route.loadData(store, req.path) : null
  }).map( promise => {
    if(promise) {
      return new Promise( (resolve, reject) => {
        promise.then(resolve).catch(resolve)
      })
    }
  })

  Promise.all(promises).then(() => {
    const context = {}
    res.status(200).send(template(req, store, context))

    if(context.notFound) {
      return res.status(404).send({name : 'show 404'})
    }

  })
})

app.listen(port, (err) => {
  if(err) return console.log(`Ha ocurrido un problema en el puerto : ${port}`)
  console.log(`Servidor escuchando en puerto: ${port}`)
})