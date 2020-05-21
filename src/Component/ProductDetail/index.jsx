import {connect} from 'react-redux'
import {ProductDetailComponent} from './ProductDetail'

const mapStateToProps = (state) => {
   return {
   item: state.products.selectedProduct
}}

export const ProductDetail = connect(mapStateToProps)(ProductDetailComponent)