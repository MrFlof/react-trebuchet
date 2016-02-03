import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import fuelSavingsAppState from './fuelSavings';
import simpleCounterAppState from './simpleCounter';
import bottlesAppState from './bottles';
import entities from './entities';
import errorMessage from './errorMessage';


const rootReducer = combineReducers({
  entities,
  errorMessage,
  fuelSavingsAppState,
  simpleCounterAppState,
  bottlesAppState,
  routing: routeReducer
});

export default rootReducer;
