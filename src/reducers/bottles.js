import { ADD_BOTTLE, DELETE_BOTTLE, EDIT_BOTTLE } from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  // todo add store meta data
  items: []
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function bottlesAppState(state = initialState, action) {
	switch (action.type) {

    case ADD_BOTTLE:
      return {...state, items: [
        ...state.items,
        {
          id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, // interim
          ...action.payload.bottle
        }
      ]};

    case DELETE_BOTTLE:
      return {...state,
        items: state.items.filter(bottle => bottle.id !== action.payload.id)
      };

    case EDIT_BOTTLE:
      return {...state, items:
        state.items.map(
          bottle => bottle.id === action.payload.id ? Object.assign({}, bottle, action.payload.bottle) : bottle
        )
      };

		default:
			return state;
	}
}
