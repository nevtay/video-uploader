import React, { useReducer, useRef } from "react";
import PagesContext from "./pagesContext";
import PagesReducer from "./pagesReducer";
import { TO_NEXT_PAGE, TO_PREV_PAGE, MAX_PAGES } from "./types";

const PagesState = (props) => {
  const initialState = {
    currentPage: "1",
    lastPage: MAX_PAGES,
  };
  const [state, dispatch] = useReducer(PagesReducer, initialState);

  const toNextPage = () => {
    dispatch({
      type: TO_NEXT_PAGE,
      payload: state.currentPage++,
    });
  };

  const toPrevPage = () => {
    dispatch({
      type: TO_PREV_PAGE,
      payload: state.currentPage--,
    });
  };

  return (
    <PagesContext.Provider
      value={{
        currentPage: state.currentPage,
        lastPage: state.lastPage,
        toNextPage,
        toPrevPage,
      }}
    >
      {props.children}
    </PagesContext.Provider>
  );
};
