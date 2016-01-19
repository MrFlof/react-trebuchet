//Remember to keep the production/development version of this file in sync.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { createHistory } from 'history';
import { syncHistory } from 'redux-simple-router';

const history = createHistory();
const storemiddlewareHistory = syncHistory(history);

const finalCreateStore = compose(
  // Middleware you want to use in production:
  applyMiddleware(storemiddlewareHistory)
  // Other store enhancers if you use any
)(createStore);

export default function configureStore(initialState) {
  // Add middleware
  const store = finalCreateStore(rootReducer, initialState);

  storemiddlewareHistory.listenForReplays(store);

  return store;
}
