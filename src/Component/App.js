import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {ProductList} from 'Component/ProductList'
import {ProductDetail} from 'Component/ProductDetail'
import {Profile} from'Component/Profile'
import {
  selectItem,
  setProducts
} from 'Redux/Actions/products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useAuth0 } from "Component/Auth0";
import 'antd/dist/antd.css';


function App({data, selectedItem, onSelectItem, onSetProducts, isLoader}) {
  useEffect(() => {
    !data.length && onSetProducts()
  }, [])

  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('user', user)
  return (
    <Router>
        <Switch>
          <Route path="/"  exact>
              <ProductList data={data} onSelectItem={onSelectItem}/>
          </Route>
          <Route path="/details">
            <ProductDetail item={selectedItem}/>
          </Route>
          <Route path="/profile">
            <Profile/>
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
