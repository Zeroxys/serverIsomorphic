// Se definiran las Routas que se montaran sobre el Ruteo en el cliente
import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/router" component={() => 'asd'}/>
    </div>
  )
}

export default Routes
