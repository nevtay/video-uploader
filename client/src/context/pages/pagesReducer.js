import { TO_NEXT_PAGE, TO_PREV_PAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TO_NEXT_PAGE:
      return {
        currentPage: action.payload,
        ...state,
      };
    case TO_PREV_PAGE:
      return {
        currentPage: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
