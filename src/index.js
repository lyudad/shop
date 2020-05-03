import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'Component';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { create } from './Redux'
// import { Auth0Provider } from "Component/Auth0";
// import { createBrowserHistory } from "history"
// import config from "./Config/auth0.json";
import { PersistGate } from 'redux-persist/integration/react'

// const history = createBrowserHistory()
const store = create()

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        {/* <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        > */}
          <App />
        {/* </Auth0Provider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
