import { DELETE_BOTTLE } from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = [
  {
    id: 1,
    name: "Volle melk",
    brand: "Campina",
    type: "Overig",
    country: "Nederland",
    contents_cl: 1000,
    alcohol_pct: 0.3
  },
  {
    id: 337,
    name: "Hightland scotch Whisky 12 years",
    brand: "Glenfarclas",
    type: "Whisky",
    country: "Schotland",
    contents_cl: 5,
    alcohol_pct: 43
  },
  {
    id: 338,
    name: "Antartica",
    brand: "Godet",
    type: "Cognac",
    country: "Frankrijk",
    contents_cl: 5,
    alcohol_pct: 40
  }
];

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function bottlesAppState(state = initialState, action) {
	switch (action.type) {

		//case ADD_BOTTLE:
    //  return [
    //    {
    //      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    //      name: action.name,
    //      brand: action.brand,
    //      type: action.type,
    //      country: action.country,
    //      contents_cl: action.contents_cl,
    //      alcohol_pct: action.alcohol_pct
    //    },
    //    ...state
    //  ];

    case DELETE_BOTTLE:
      return state.filter(bottle =>
        bottle.id !== action.id
      );

    //case EDIT_BOTTLE:
    //  return state.map(bottle =>
    //    bottle.id === action.id ?
    //      Object.assign({}, bottle, {
    //        name: action.name,
    //        brand: action.brand,
    //        type: action.type,
    //        country: action.country,
    //        contents_cl: action.contents_cl,
    //        alcohol_pct: action.alcohol_pct
    //      }) :
    //      bottle
    //  );

		default:
			return state;
	}
}
