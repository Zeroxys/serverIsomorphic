// Se definiran las Routas que se montaran sobre el Ruteo en el cliente
import React from 'react'
//import admins, {listpage} from '../pages/HomePage'
import HomePage from '../pages/HomePage'
import Post from '../pages/PostPage'
import MoreViews from '../pages/MoreView'
import NotFoundPage from '../pages/NotFoundPage'
import App from '../App'

const Routes = [
  {
    ...App,
    routes : 
    [
      { 
        ...HomePage,
        path : '/', 
        exact: true
      },
      
      { 
        ...Post,
        path : '/:taxonomy/:id/:name/:thing', 
        exact: true
      },

      { 
        ...Post,
        path : '/:taxonomy/:id/:name', 
        exact: true
      },

      { 
        ...Post,
        path : '/:taxonomy/:id/', 
        exact: true
      },
      
      { 
        ...MoreViews,
        path : '/lo-mas-visto', 
        exact: true
      },
    ]
  }
]

/*{
  ...NotFoundPage
}*/

export default Routes
