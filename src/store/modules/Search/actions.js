export const Actions = {
  ADD_HISTORY_ITEM: "ADD_HISTORY_ITEM",
  CLEAR_HISTORY_ITEM: "CLEAR_HISTORY_ITEM",
};

export const addHistoryItem = (item) => {
  return { type: Actions.ADD_HISTORY_ITEM, payload: item };
};

export const clearHistoryItem = () => {
  return { type: Actions.CLEAR_HISTORY_ITEM };
};
