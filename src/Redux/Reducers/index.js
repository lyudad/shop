import { combineReducers } from 'redux'
import products from './products'

const appRedux = combineReducers({
    products
})

const reducer = (state, action) => {
    return appRedux(state, action)
}

export default reducer