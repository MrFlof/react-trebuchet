import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { createStore } from 'redux';

import * as Containers from './containers';


const storemiddlewareHistory = syncHistory(browserHistory);
const store = configureStore(undefined, storemiddlewareHistory);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Containers.App}>
        <Route path="fuelsavings" component={Containers.FuelSavingsPage}/>
        <Route path="simplecounter" component={Containers.SimpleCounterPage}/>
        <Route path="bottles" component={Containers.BottlesPage}/>
        <Route path="foo" component={Containers.FooPage}/>
        <Route path="bar" component={Containers.BarPage}/>
        <Route path="*" component={Containers.NotFoundPage}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  const { showDevTools } = require('./showDevTools').default;
  showDevTools(store);
}
