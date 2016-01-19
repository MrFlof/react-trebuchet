import {SIMPLECOUNTER_INCREASE, SIMPLECOUNTER_DECREASE} from '../constants/ActionTypes';

const initialState = {
    simpleCounter: 1
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function simpleCounterAppState(state = initialState, action) {
	switch (action.type) {
		case SIMPLECOUNTER_INCREASE:
			return Object.assign({}, state, {
        simpleCounter: state.simpleCounter + action.amount
      });

		case SIMPLECOUNTER_DECREASE:
      return Object.assign({}, state, {
        simpleCounter: state.simpleCounter - action.amount
      });

		default:
			return state;
	}
}
