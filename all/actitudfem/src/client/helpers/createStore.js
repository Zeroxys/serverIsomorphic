import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../reducers'

const apiKey = '22360f3a2e03f847acf5339695e42e5b'

export default (req) => {
  const axiosInstance = axios.create({
    baseURL : `http://api.invent.mx/v1/actitudfem/node.json/${apiKey}?limit=1`,
    headers : {cookie: req.get('cookie') || ''}
  })

  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  return store
}