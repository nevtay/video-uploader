import React from "react";

const NextButton = ({ handleOnClick, page }) => {
  return (
    <>
      {page === 3 && (
        <button
          className="btn btn-outline-primary"
          disabled
          onClick={handleOnClick}
        >
          Next
        </button>
      )}
      {page !== 3 && (
        <button className="btn btn-outline-primary" onClick={handleOnClick}>
          Next
        </button>
      )}
    </>
  );
};

export default NextButton;
