// Se definiran las Routas que se montaran sobre el Ruteo en el cliente
import React from 'react'
import HomePage, {loadData} from '../pages/HomePage'
import admins, {listpage} from '../pages/HomePage'

const Routes = [
  {
    loadData : loadData,
    path : '/',
    component: HomePage,
    exact: true
  },
]

export default Routes
