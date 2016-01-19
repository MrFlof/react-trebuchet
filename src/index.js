import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncHistory } from 'redux-simple-router';
import { createStore } from 'redux';

import { App, FuelSavingsPage, SimpleCounterPage, FooPage, BarPage, NotFoundPage } from './containers';


const history = createHistory();
const storemiddlewareHistory = syncHistory(history);
const store = configureStore(undefined, storemiddlewareHistory);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="fuelsavings" component={FuelSavingsPage}/>
        <Route path="simplecounter" component={SimpleCounterPage}/>
        <Route path="foo" component={FooPage}/>
        <Route path="bar" component={BarPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools');
  showDevTools(store);
}
