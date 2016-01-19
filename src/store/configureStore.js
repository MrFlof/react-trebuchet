//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';


export default function configureStore(initialState, storemiddlewareHistory) {
  const finalCreateStore = compose(
    applyMiddleware(storemiddlewareHistory)
  )(createStore);
  const store = finalCreateStore(rootReducer, initialState);

  storemiddlewareHistory.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
