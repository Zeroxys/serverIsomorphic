import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import thunk from 'redux-thunk' // nos permite recibir dispatch como argumento y llamarlo asincronamente
import {Provider} from 'react-redux' // <-- Crea el provider donde se guardaran todos los estados
import {renderRoutes} from 'react-router-config'
import {createStore, applyMiddleware} from 'redux' 

import '../../public/main.css'
import Home from '../client/pages/HomePage'
import Routes from './Routes/Routes'
import reducers from './reducers' // <-- importamos los reducers



// === Creamos la instancia de la ruta de axios == //
const axiosInstance = axios.create({
  baseURL : '/api'
})

// creamos un nuevo almacenamiento del lado del cliente
const store = createStore(reducers, 
  window.INITIAL_STATE, 
  applyMiddleware(thunk.withExtraArgument(axiosInstance))) 

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
  