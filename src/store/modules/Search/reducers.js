const initialState = { searchHistory: [] };
import { Actions } from "./actions";

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_HISTORY_ITEM:
      return { ...state, searchHistory: [...state.searchHistory, action] };
    case Actions.CLEAR_HISTORY_ITEM:
      return { ...state, searchHistory: [] };
    default:
      return state;
  }
};

export default historyReducer;
