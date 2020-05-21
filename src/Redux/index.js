import {createStore} from 'redux'
import {appReducer} from './Reducer'

export const storeCreator = () => {
  const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store;
}