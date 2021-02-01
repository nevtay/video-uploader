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
      <input type="submit" value="Upload video" />
      <PrevButton handleOnClick={toPrevPage} page={page} />
      <NextButton handleOnClick={toNextPage} page={page} />
    </>
  );
};

export default PageThree;
