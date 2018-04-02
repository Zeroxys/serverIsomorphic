import {combineReducers} from 'redux'
import postReducer from './postReducers'
import getPostReducer from './getPostReducer'
import getMoreViews from './getMoreView'

export default combineReducers({
  posts : postReducer,
  post : getPostReducer,
  views : getMoreViews
})
