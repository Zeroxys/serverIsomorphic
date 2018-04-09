import React from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/header/header'
import Footer from './components/footer/footer'

const imgs = [
	{
		href: 'http://www.imagen.com.mx/',
		position: '2px 63.6%',
		height: '32px',
		width: '87px',
	},
	{
		position: '40% 63.6%',
		height: '30px',
		width: '100px',
	}
]

const App = ({route}) => {

  return (
    <div>
        <Header/>
        {renderRoutes(route.routes)}
        <Footer imgs={imgs}/>
    </div>
  )

}

export default {
  component : App
}
