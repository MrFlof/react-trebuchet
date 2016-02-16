import { CALL_API } from 'redux-api-middleware';
import { Schema, arrayOf, normalize } from 'normalizr';

import * as types from '../constants/ActionTypes';


const API_ROOT = 'http://10.13.0.136:3030'; // Change this

// Normalizr schema setup:
const collectionSchema = new Schema('collections');
const bottleSchema = new Schema('bottles');

collectionSchema.define({
  bottles: arrayOf(bottleSchema)
})


export function fetchCollection(collectionId) {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/collections/'+collectionId+'/?_embed=bottles',
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

export function fetchCollections() {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/collections/',
      method: 'GET',
      types: [
        types.FETCHCOLLECTIONS_REQUEST,
        {
          type: types.FETCHCOLLECTIONS_SUCCESS,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              // Just making sure res.json() does not raise an error
              return res.json().then((json) => normalize(json, arrayOf(collectionSchema)));
            }
          }
        },
        types.FETCHCOLLECTIONS_FAILURE
      ]
    }
  };
}

export function patchCollection(collectionId, collection) {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/collections/'+collectionId+'/',
      method: 'PATCH',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(collection),
      types: [
        types.PATCHCOLLECTION_REQUEST,
        {
          type: types.PATCHCOLLECTION_SUCCESS,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              // Just making sure res.json() does not raise an error
              return res.json().then((json) => normalize(json, collectionSchema));
            }
          }
        },
        types.PATCHCOLLECTION_FAILURE
      ]
    }
  };
}

export function createCollection(collection) {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/collections/',
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(collection),
      types: [
        types.CREATECOLLECTION_REQUEST,
        {
          type: types.CREATECOLLECTION_SUCCESS,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              // Just making sure res.json() does not raise an error
              return res.json().then((json) => normalize(json, collectionSchema));
            }
          }
        },
        types.CREATECOLLECTION_FAILURE
      ]
    }
  };
}

export function deleteCollection(collectionid) {
  return {
    [CALL_API]: {
      endpoint: API_ROOT + '/collections/'+collectionid+'/',
      method: 'DELETE',
      types: [
        types.DELETECOLLECTION_REQUEST,
        types.DELETECOLLECTION_SUCCESS,
        // Note we dont remove it from the (normalizr's) entities cache.
        // You should remove its Id from your "AppState" or "Project" array, in a reducer responding to this action (FSA).
        types.DELETECOLLECTION_FAILURE
      ]
    }
  };
}
