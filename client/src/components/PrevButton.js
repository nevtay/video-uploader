import React from "react";

const PrevButton = ({ handleOnClick, page }) => {
  return (
    <>
      {page === 1 && (
        <button
          className="btn btn-outline-secondary"
          disabled
          onClick={handleOnClick}
        >
          Previous
        </button>
      )}
      {page !== 1 && (
        <button className="btn btn-outline-secondary" onClick={handleOnClick}>
          Previous
        </button>
      )}
    </>
  );
};

export default PrevButton;
