import {More_View} from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case More_View :
      return action.payload.data
    default : 
      return state
  }
}
