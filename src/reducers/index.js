import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import simpleCounterAppState from './simpleCounter';
import bottlesAppState from './bottles';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  simpleCounterAppState,
  bottlesAppState,
  routing: routeReducer
});

export default rootReducer;
