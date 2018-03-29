import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../reducers'

export default (req) => {

  const apiKey = '22360f3a2e03f847acf5339695e42e5b'
  const axiosInstance = axios.create({
    baseURL: `http://api.invent.mx/v1/actitudfem/node.json/${apiKey}?limit=1&sort=created:DESC&fields=id%7Ctitle%7Csummary%7Curl%7Cimages%7Ctype`,
    headers : {cookie: req.get('cookie') || ''}
  })

  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  return store
}