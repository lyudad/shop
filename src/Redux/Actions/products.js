import {createAsyncAction} from 'Helpers/redux'
import {apiCall} from './api'


export const SELECT_ITEM = 'SELECT_ITEM'
export const selectItem = (item) => ({type: SELECT_ITEM, item})

export const SET_PRODUCTS = createAsyncAction('SET_PRODUCTS')
export const setProducts = () => {
    return apiCall({
        types: SET_PRODUCTS,
        endpoint: '/get-products'
    })
}