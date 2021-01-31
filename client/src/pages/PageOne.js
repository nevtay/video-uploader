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
  const toNextPage = () => {
    if (page === 3) {
      return;
    } else {
      handlePage((page) => page + 1);
    }
  };

  // move back one page
  const toPrevPage = () => {
    if (page === 1) return;
    handlePage((page) => {
      return (page = page - 1);
    });
  };

  return (
    <>
      <div className="form-group">
        <input
          type="file"
          name="fileName"
          placeholder="File Name"
          onChange={handleFileName}
          value={fileName}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="videoTitle"
          placeholder="Title (required)"
          value={videoTitle}
          onChange={(e) => handleVideoTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="videoStartDateTime"
          placeholder="Start Date/Time (required)"
          value={videoDateTime}
          onChange={(e) => handleVideoDateTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="string"
          name="postalCode"
          placeholder="Postal Code (optional)"
          value={videoLocation}
          onChange={(e) => handleVideoLocation(e.target.value)}
        />
      </div>
      <div className="btn-group">
        <NextButton handleOnClick={toNextPage} page={page} />
        <PrevButton handleOnClick={toPrevPage} page={page} />
      </div>
    </>
  );
};

export default PageOne;
