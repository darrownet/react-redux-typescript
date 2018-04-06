import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './state-containers/app.container';
import Catalog from './state-containers/catalog.container';
import Cart from './state-containers/cart.container';

import Header from './components/header';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { shoppingReducer } from './reducers/shopping-reducer';

import './index.css';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

ReactDOM.render(
    <Provider
        store={createStore(
            shoppingReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(thunk)
        )}
    >
      <App>
        <div className="App">
          <Header />
          <div className="App-content">
            <Catalog />
            <Cart />
          </div>
        </div>
      </App>
    </Provider>,
    document.getElementById('root') as HTMLElement
);