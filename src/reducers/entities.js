import { merge } from 'lodash'


// Updates an entity cache in response to any action with response.entities.
export default function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
