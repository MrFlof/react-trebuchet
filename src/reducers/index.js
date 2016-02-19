import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import entities from './entities';
import views from './views';
import fuelSavingsAppState from './fuelSavings';
import simpleCounterAppState from './simpleCounter';
import bottlesAppState from './bottles';


const rootReducer = combineReducers({
  entities, // For the normalizr magic
  views,
  fuelSavingsAppState,
  simpleCounterAppState,
  bottlesAppState,
  routing: routeReducer // For the routing magic
});

export default rootReducer;
