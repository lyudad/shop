import {createStore, applyMiddleware} from 'redux'
import apiMiddleware from 'Redux/Middleware/api'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools} from 'redux-devtools-extension'
import reducer from './Reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const create = () => {
  const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware))
  let store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}
