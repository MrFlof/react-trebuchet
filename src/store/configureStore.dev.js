//Remember to keep the production/development version of this file in sync.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { applyMiddleware, createStore, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';


export default function configureStore(initialState, storemiddlewareHistory) {
  // Add middleware
  const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(
      storemiddlewareHistory,
      apiMiddleware
    ),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  storemiddlewareHistory.listenForReplays(store);

  // Configure the store for hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
