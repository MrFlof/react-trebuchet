import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import simpleCounterAppState from './simpleCounter';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  simpleCounterAppState,
  routing: routeReducer
});

export default rootReducer;
