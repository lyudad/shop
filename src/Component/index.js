import React from 'react';
import { connect } from 'react-redux'
import {
  selectItem,
  setProducts
} from 'Redux/Actions/products'
import 'antd/dist/antd.css';
import { Auth0Provider } from "Component/Auth0";
import config from "Config/auth0.json";
import AppComponent from './App'

import { createBrowserHistory } from "history"

const history = createBrowserHistory()

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function App() {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AppComponent/>
    </Auth0Provider>
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
