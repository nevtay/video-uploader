import React from "react";

const NextButton = ({ handleOnClick, page }) => {
  return (
    <>
      {page === 3 && (
        <button disabled onClick={handleOnClick}>
          Next
        </button>
      )}
      {page !== 3 && <button onClick={handleOnClick}>Next</button>}
    </>
  );
};

export default NextButton;
