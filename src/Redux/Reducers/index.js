import { combineReducers } from 'redux'
import products from './products'
import auth from './auth'

const appRedux = combineReducers({
    products, auth
})

const reducer = (state, action) => {
    return appRedux(state, action)
}

export default reducer