import React from "react";

const PrevButton = ({ handleOnClick }) => {
  return (
    <>
      <button className="btn btn-outline-secondary" onClick={handleOnClick}>
        Previous
      </button>
    </>
  );
};

export default PrevButton;
