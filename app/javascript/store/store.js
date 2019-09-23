import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import QuotesReducer from '../reducers/quotes_reducer'

const reducer = combineReducers({ quotes: QuotesReducer })
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
