import 'babel-polyfill'
import express from 'express'
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

  // En algun momento algo de logica seria inicializada
  // y cargara la data dentro del createStore

  res.status(200).send(template(req, store))
})

app.listen(port, (err) => {
  if(err) return console.log(`Ha ocurrido un problema en el puerto : ${port}`)
  console.log(`Servidor escuchando en puerto: ${port}`)
})