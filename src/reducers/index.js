import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  routing: routeReducer
});

export default rootReducer;
