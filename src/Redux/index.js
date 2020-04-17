import {createStore, applyMiddleware} from 'redux'
import apiMiddleware from 'Redux/Middleware/api'
import { composeWithDevTools} from 'redux-devtools-extension'
import reducer from './Reducers'

export const create = () => {
  const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware))
  return createStore(reducer, enhancer)
}
