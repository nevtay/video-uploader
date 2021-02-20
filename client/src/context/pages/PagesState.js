import React, { useReducer, useRef } from "react";
import PagesContext from "./pagesContext";
import PagesReducer from "./pagesReducer";
import { TO_NEXT_PAGE, TO_PREV_PAGE, MAX_PAGES } from "./types";

const PagesState = (props) => {
  const initialState = {
    currentPage: "1",
  };
  const [state, dispatch] = useReducer(PagesReducer, initialState);

  return (
    <PagesContext.Provider
      value={{
        currentPage: state.currentPage,
      }}
    >
      {props.children}
    </PagesContext.Provider>
  );
};
