import React, {useState} from 'react';
import {ProductList} from 'Component/ProductList'
import {ProductDetail} from 'Component/ProductDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  const [selectedProduct, selectProduct] = useState(null)
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
              <ProductList selectProduct={selectProduct}/>
            </Route>
          <Route path="/details" >
            <ProductDetail selectedProduct={selectedProduct}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
