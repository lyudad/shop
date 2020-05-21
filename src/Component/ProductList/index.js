import {connect} from 'react-redux'
import {ProductListComponent} from './ProductList'
import {selectProductAction} from 'Redux/Actions/products'

const actions = {
   onSelectProduct: selectProductAction
}

export const ProductList = connect(null, actions)(ProductListComponent)