import React from 'react';
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
  return (
    <Router>
        <Switch>
          <Route path="/" component={ProductList} exact/>
          <Route path="/details" component={ProductDetail}/>
        </Switch>
    </Router>
  );
}

export default App;
