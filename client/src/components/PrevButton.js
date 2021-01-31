import React from "react";

const PrevButton = ({ handleOnClick, page }) => {
  return (
    <>
      {page === 1 && (
        <button disabled onClick={handleOnClick}>
          Previous
        </button>
      )}
      {page !== 1 && <button onClick={handleOnClick}>Previous</button>}
    </>
  );
};

export default PrevButton;
