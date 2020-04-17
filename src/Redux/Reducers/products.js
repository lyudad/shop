import {SET_PRODUCTS} from '../Actions/products'

const initialState = {
    data: [],
    selected: {},
    err: null,
    isLoader: false
}

const products = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_ITEM':
            return {
                ...state,
                selected: action.item
            }
            break
        case 'SET_PRODUCTS.REQUEST':
            console.log('action>>>', action)
                return {
                    ...state,
                    isLoader: true
                }
                break
        case 'SET_PRODUCTS.SUCCESS':
            console.log('action>>>', action)
                return {
                    ...state,
                    data: action.products
                }
                break
        default:
            return state
            break

    }   
}

export default products