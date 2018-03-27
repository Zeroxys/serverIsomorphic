// Se definiran las Routas que se montaran sobre el Ruteo en el cliente
import React from 'react'
import Home, {loadData} from '../components/Home'


const Routes = [
  {
    loadData : loadData,
    path : '/',
    component: Home,
    exact: true
  },
]

export default Routes
