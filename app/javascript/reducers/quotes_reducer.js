import {
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE
} from '../actions/quote_actions'
const INITIAL_STATE = { entries: [] }

const reduce = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case GET_QUOTES_SUCCESS:
    return {...state, entries: action.payload }
  case GET_QUOTES_FAILURE:
    return {...state, error: action.payload }
  default:
    return state
  }
}

export default reduce
