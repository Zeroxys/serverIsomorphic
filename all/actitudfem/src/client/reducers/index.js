import {combineReducers} from 'redux'
import postReducer from './postReducers'
import getPostReducer from './getPostReducer'

export default combineReducers({
  posts : postReducer,
  post : getPostReducer
})
