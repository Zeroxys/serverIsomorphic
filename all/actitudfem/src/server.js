import 'babel-polyfill'
import express from 'express'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes/Routes'
import path from 'path'
import cors from 'cors'
import axios from 'axios'

// === IMPORTAMOS createStore PARA USARLO EN EL SERVER === //
import createStore from './client/helpers/createStore'
import template from './client/helpers/template'

const app = express()
const port = process.env.PORT || 3000

// incorporacion de middlewares
app.use(express.static(path.resolve('all/actitudfem/public')))
app.use(cors({
  origin: '*'
}))

app.get('*', (req, res) => {
  const store = createStore() 

  const promises = matchRoutes(Routes, req.path).map( ({route}) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.status(200).send(template(req, store))
  })
  console.log(promises)
  //console.log(matchRoutes(Routes, req.path))
})

app.listen(port, (err) => {
  if(err) return console.log(`Ha ocurrido un problema en el puerto : ${port}`)
  console.log(`Servidor escuchando en puerto: ${port}`)
})