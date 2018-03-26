import 'babel-polyfill'
import express from 'express'
import path from 'path'
import cors from 'cors'
import axios from 'axios'

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
  const store = createStore() // <-- Al colocar el store aqui la logica sera 
                              // inicializada y cargada dentro del store.... tengo sueño :(

  res.status(200).send(template(req, store))
})

/*app.get('/api', (req, res) => {
  axios.get(url)
      .then(result => res.status(200).send(result.data))
      .catch( err => res.status(500).send(err))     
})*/

app.listen(port, (err) => {
  if(err) return console.log(`Ha ocurrido un problema en el puerto : ${port}`)
  console.log(`Servidor escuchando en puerto: ${port}`)
})