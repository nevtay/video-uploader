import React, { useContext } from "react";
import PagesContext from "../context/pages/pagesContext";

const NextButton = ({ hasError }) => {
  const pagesContext = useContext(PagesContext);
  const { toNextPage } = pagesContext;
  return hasError ? (
    <>
      <button className="btn btn-outline-primary">Next</button>
    </>
  ) : (
    <>
      <button className="btn btn-outline-primary" onClick={toNextPage}>
        Next
      </button>
    </>
  );
};

export default NextButton;
