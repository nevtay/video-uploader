import React from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

const PageThree = ({ page, handlePage }) => {
  // move forward one page
  const toNextPage = (e) => {
    // e.preventDefault();
    if (page === 3) {
      return;
    } else {
      handlePage((page) => page + 1);
    }
  };

  // move back one page
  const toPrevPage = (e) => {
    // e.preventDefault();
    if (page === 1) return;
    handlePage((page) => {
      return (page = page - 1);
    });
  };
  return (
    <>
      <div className="form-group">
        <p>Review video metadata</p>
      </div>
      <div className="form-group">
        <input type="submit" value="Upload video" />
      </div>
      <div className="btn-group mt-4">
        <PrevButton handleOnClick={toPrevPage} page={page} />
        <NextButton handleOnClick={toNextPage} page={page} />
      </div>
    </>
  );
};

export default PageThree;
