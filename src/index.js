import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncHistory } from 'redux-simple-router';
import { createStore } from 'redux';

import App from './containers/App';
import FuelSavingsPage from './containers/FuelSavingsPage';
import FooPage from './containers/FooPage';
import BarPage from './containers/BarPage';
import NotFoundPage from './containers/NotFoundPage';

const history = createHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="fuelsavings" component={FuelSavingsPage}/>
        <Route path="foo" component={FooPage}/>
        <Route path="bar" component={BarPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
