import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'

import Routes from '../Routes/Routes'
import Home from '../components/Home'

export default (req, store) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes/>
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
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="main.js"></script>
    </body>
  </html>
`
}