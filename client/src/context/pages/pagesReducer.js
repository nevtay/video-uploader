import { TO_NEXT_PAGE, TO_PREV_PAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TO_NEXT_PAGE:
      return {
        ...state,
      };
    case TO_PREV_PAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
