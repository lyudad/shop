import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {ProductList} from 'Component/ProductList'
import {ProductDetail} from 'Component/ProductDetail'
import {
  selectItem,
  setProducts
} from 'Redux/Actions/products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';


function App({data, selectedItem, onSelectItem, onSetProducts, isLoader}) {
  useEffect(() => {
    !data.length && onSetProducts()
  }, [])

  return (
    <Router>
        <Switch>
          <Route path="/"  exact>
              <ProductList data={data} onSelectItem={onSelectItem}/>
          </Route>
          <Route path="/details">
            <ProductDetail item={selectedItem}/>
          </Route>
        </Switch>
        {/* {isLoader && <Loader/>} */}
    </Router>
  );
}

const mapToProps = (store) => {
  return {
    selectedItem: store.products.selected,
    data: store.products.data,
    loader: store.products.isLoader,
  }
}

const actions = {
  onSelectItem: selectItem,
  onSetProducts: setProducts
}

export default connect(mapToProps, actions)(App);
