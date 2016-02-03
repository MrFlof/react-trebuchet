import { CALL_API, Schemas } from '../middleware/bottledapi'


export const COLLECTION_REQUEST = 'COLLECTION_REQUEST'
export const COLLECTION_SUCCESS = 'COLLECTION_SUCCESS'
export const COLLECTION_FAILURE = 'COLLECTION_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchCollection(id) {
  return {
    [CALL_API]: {
      types: [ COLLECTION_REQUEST, COLLECTION_SUCCESS, COLLECTION_FAILURE ],
      endpoint: `collections/${id}`,
      schema: Schemas.COLLECTION
    }
  }
}

// Fetches a single collection from Bottled API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadCollection(id, requiredFields = []) {
  return (dispatch, getState) => {
    const collection = getState().entities.collections[id]
    if (collection && requiredFields.every(key => collection.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchCollection(id))
  }
}
