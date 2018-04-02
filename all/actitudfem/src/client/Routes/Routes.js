// Se definiran las Routas que se montaran sobre el Ruteo en el cliente
import React from 'react'
//import admins, {listpage} from '../pages/HomePage'
import HomePage from '../pages/HomePage'
import Post from '../components/body/Article'
import MoreViews from '../pages/MoreView'

const Routes = [
  { 
    ...HomePage,
    path : '/', 
    exact: true
  },

  { 
    ...Post,
    path : '/post', 
    exact: true
  },

  { 
    ...MoreViews,
    path : '/lo-mas-visto', 
    exact: true
  },
]

export default Routes
