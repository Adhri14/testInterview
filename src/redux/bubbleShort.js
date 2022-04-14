import {combineReducers} from 'redux';

const initState = {
  arr: [],
};

export const setStateBubble = (state = initState, action) => {
  if (action.type === 'SET_ARRAY') {
    return {
      ...state,
      arr: action.value,
    };
  }

  return state;
};

const reducer = combineReducers({
  setStateBubble,
});

export default reducer;
