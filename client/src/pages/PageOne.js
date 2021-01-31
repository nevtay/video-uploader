import React from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

const PageOne = ({
  page,
  handlePage,
  fileName,
  handleFileName,
  videoTitle,
  handleVideoTitle,
  videoDateTime,
  handleVideoDateTime,
  videoLocation,
  handleVideoLocation,
}) => {
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
      <input
        type="file"
        name="fileName"
        placeholder="File Name"
        onChange={handleFileName}
        value={fileName}
      />
      <input
        type="text"
        name="videoTitle"
        placeholder="Title (required)"
        value={videoTitle}
        onChange={(e) => handleVideoTitle(e.target.value)}
        required
      />
      <input
        type="date"
        name="videoStartDateTime"
        placeholder="Start Date/Time (required)"
        value={videoDateTime}
        onChange={(e) => handleVideoDateTime(e.target.value)}
        required
      />
      <input
        type="string"
        name="postalCode"
        placeholder="Postal Code (optional)"
        value={videoLocation}
        onChange={(e) => handleVideoLocation(e.target.value)}
      />
      <NextButton handleOnClick={toNextPage} page={page} />
      <PrevButton handleOnClick={toPrevPage} page={page} />
    </>
  );
};

export default PageOne;
