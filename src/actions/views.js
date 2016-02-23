import * as ActionTypes from '../constants/ActionTypes';


export function ViewCollection(id) {
  return {
    type: ActionTypes.VIEWCOLLECTION_APPLY,
    payload: {
      id: id
    }
  };
}
