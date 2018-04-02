import {GET_POST} from '../actions/index'

export default (state = [], action) => {
  switch(action.type) {
    case GET_POST :
      return action.payload.data
    default : 
      return state
  }
}
