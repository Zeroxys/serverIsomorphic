import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
//import Home from '../client/components/Home'
import Routes from './Routes/Routes'
import {BrowserRouter} from 'react-router-dom'

// Se necesitara redux para poder hacer render del lado del server
// y render del lado del cliente
import {createStore, applyMiddleware} from 'redux' // <-- createStore : crea el almacenamiento del estado, applymiddelware permite usar hooks en la app con redux
import thunk from 'redux-thunk' // <-- controlamos la asincronia en redux
import {Provider} from 'react-redux' // <-- Crea el provider donde se guardaran todos los estados

import reducers from './reducers' // <-- importamos los reducers

// creamos un nuevo almacenamiento de redux
const store = createStore(reducers, {}, applyMiddleware(thunk)) 

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))