import React, { useContext } from "react";
import PagesContext from "../context/pages/pagesContext";

const PrevButton = () => {
  const pagesContext = useContext(PagesContext);
  const { toPrevPage } = pagesContext;
  return (
    <>
      <button className="btn btn-outline-secondary" onClick={toPrevPage}>
        Previous
      </button>
    </>
  );
};

export default PrevButton;
