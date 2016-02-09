import { CALL_API } from 'redux-api-middleware';
import { Schema, arrayOf, normalize } from 'normalizr';

import * as types from '../constants/ActionTypes';


const bottleSchema = new Schema('bottles');


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
      endpoint: 'http://10.13.0.125:3030/collections/'+collectionId+'/?_embed=bottles',
      method: 'GET',
      types: [
        types.FETCHCOLLECTION_REQUEST,
        //{
        //  type: types.FETCHCOLLECTION_REQUEST,
        //  payload: { collectionId: collectionId }
        //},
        {
          type: types.FETCHCOLLECTION_SUCCESS,
            payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              // Just making sure res.json() does not raise an error
              return res.json().then((json) => normalize(json, { bottles: arrayOf(bottleSchema) }));
            }
          }
        },
        types.FETCHCOLLECTION_FAILURE
      ]
    }
  };
}
