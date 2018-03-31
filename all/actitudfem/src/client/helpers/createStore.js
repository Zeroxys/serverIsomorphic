import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../reducers'

export default (req) => {

  const apiKey = '22360f3a2e03f847acf5339695e42e5b'

  const axiosInstance = axios.create({
    baseURL : `http://api.invent.mx/`,
    //baseURL : `https://react-ssr-api.herokuapp.com`,
    //baseURL: `http://api.invent.mx/v1/actitudfem/nodes.json/`,
    //baseURL : 'https://react-ssr-api.herokuapp.com',
    headers : {cookie: req.get('cookie') || ''}
  })

  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  return store
}