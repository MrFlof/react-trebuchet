import { CALL_API } from 'redux-api-middleware';

import * as types from '../constants/ActionTypes';


export function addBottle(bottle) {
	return {
    type: types.ADD_BOTTLE,
    payload: {
      bottle: bottle
    }
  };
}

export function deleteBottle(id) {
	return {
    type: types.DELETE_BOTTLE,
    payload: {
      id: id
    }
  };
}

export function editBottle(id, bottle) {
	return {
    type: types.EDIT_BOTTLE,
    payload: {
      id: id,
      bottle: bottle
    }
  };
}



// hoort eigenlijk niet in deze file
export function fetchCollection(collectionId) {
  return {
    [CALL_API]: {
      endpoint: 'http://10.13.0.125:3030/collections/1/?_embed=bottles',
      method: 'GET',
      types: ['FETCHCOLLECTION_REQUEST', 'FETCHCOLLECTION_SUCCESS', 'FETCHCOLLECTION_FAILURE']
    }
  };
  // a SUCCESS results in Normalizr using the bottles:[]
}
