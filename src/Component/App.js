import React, {useState} from 'react';
import { connect } from 'react-redux'
import {ProductList} from 'Component/ProductList'
import {ProductDetail} from 'Component/ProductDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';


function App({data, selectedItem, onSelectItem}) {
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
    </Router>
  );
}

const mapToProps = (store) => {
  return {
    selectedItem: store.products.selected,
    data: store.products.data
  }
}

const actions = (dispatch) => ({
  onSelectItem: (item) => dispatch({type: 'SELECT_ITEM', item})
})

export default connect(mapToProps, actions)(App);
