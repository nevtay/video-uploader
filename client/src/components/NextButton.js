import React from "react";

const NextButton = ({ handleOnClick }) => {
  return (
    <>
      <button className="btn btn-outline-primary" onClick={handleOnClick}>
        Next
      </button>
    </>
  );
};

export default NextButton;
