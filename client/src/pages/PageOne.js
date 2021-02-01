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
      <div className="form-group mb-4">
        <div className="custom-file">
          <input
            type="file"
            name="fileName"
            className="custom-file-input"
            placeholder="File Name"
            onChange={handleFileName}
            value={fileName}
          />
          <label class="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
      </div>
      <div className="form-group mb-4">
        <input
          type="text"
          name="videoTitle"
          className="form-control"
          placeholder="Title (required)"
          value={videoTitle}
          onChange={(e) => handleVideoTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-4">
        <input
          type="date"
          name="videoStartDateTime"
          className="form-control"
          placeholder="Start Date/Time (required)"
          value={videoDateTime}
          onChange={(e) => handleVideoDateTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-4">
        <input
          type="string"
          name="postalCode"
          className="form-control"
          placeholder="Postal Code (optional)"
          value={videoLocation}
          onChange={(e) => handleVideoLocation(e.target.value)}
        />
      </div>
      <div className="btn-group">
        <PrevButton handleOnClick={toPrevPage} page={page} />
        <NextButton handleOnClick={toNextPage} page={page} />
      </div>
    </>
  );
};

export default PageOne;
