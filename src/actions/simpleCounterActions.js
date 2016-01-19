import * as types from '../constants/ActionTypes';

export function simpleCounterIncrease(n) {
	return {
    type: types.SIMPLECOUNTER_INCREASE,
    amount: n
  };
}

export function simpleCounterDecrease(n) {
  return {
    type: types.SIMPLECOUNTER_DECREASE,
    amount: n
  };
}
