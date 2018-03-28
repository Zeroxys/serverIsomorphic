import React from 'react'
import {renderToString} from 'react-dom/server'
// ===== Importamos Redux para usarlo en el server ===== /
import {Provider} from 'react-redux'

import {StaticRouter} from 'react-router-dom'
import Routes from '../Routes/Routes'
import Home from '../pages/HomePage'

// ===XSS===//
import serialize from 'serialize-javascript'

// === Rutas del server side render === //
import {renderRoutes} from 'react-router-config'

export default (req, store) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
  <html lang="es">
    <head>
      <title>Actitudfem.com</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="description" content="Una comunidad versátil para mujeres contemporáneas, celebridades, moda, belleza, sexualidad, hogar, actitud" />
      <meta name="abstract" content="Tips de belleza, tendencias de moda, sexualidad, familia y todos esos temas que le preocupan a la mujer de hoy." />
      <meta name="keywords" content="celebridades,moda,belleza,sexualidad,hogar,actitud,entorno,novias" />
      <meta name="author" content="">
      <link rel="stylesheet" src="main.css"/>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())} 
      </script>
      <script src="main.js"></script>
    </body>
  </html>
`
}