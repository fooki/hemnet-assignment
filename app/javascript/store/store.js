import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// TODO: probably not a good idea to import logger
import logger from 'redux-logger'
import QuotesReducer from '../reducers/quotes_reducer'

const reducer = combineReducers({ quotes: QuotesReducer })

let middleware = [thunk]
if(process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store
