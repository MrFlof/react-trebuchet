import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';


const collectionViewInitialState = {
  id: null
};

function collectionView(state = collectionViewInitialState, action) {
  switch (action.type) {
    case ActionTypes.VIEWCOLLECTION_APPLY:
      return {...state, ...action.payload}
    case ActionTypes.VIEWCOLLECTION_RESET:
      return collectionViewInitialState
    default:
      return state;
  }
}


const views = combineReducers({
  collectionView
});

export default views;
