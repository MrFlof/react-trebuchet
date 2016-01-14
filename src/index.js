import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import FooPage from './containers/FooPage';
import BarPage from './containers/BarPage';
import NoMatch from './containers/NotFoundPage';
import configureStore from './store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={FooPage}/>
        <Route path="bar" component={BarPage}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
