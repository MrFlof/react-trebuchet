import { combineReducers } from 'redux';

import entities from './entities';
import fuelSavingsAppState from './fuelSavings';
import simpleCounterAppState from './simpleCounter';
import bottlesAppState from './bottles';
import { routeReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  entities, // For the normalizr magic
  fuelSavingsAppState,
  simpleCounterAppState,
  bottlesAppState,
  routing: routeReducer // For the routing magic
});

export default rootReducer;
