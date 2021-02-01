import React from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

const PageThree = ({
  page,
  fileName,
  handlePage,
  videoTitle,
  videoDateTime,
  videoLocation,
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
      <h3 className="text-muted mb-4">Upload Summary</h3>
      <label for="videoTitleSummary">File Name</label>
      <div className="form-group mb-2">
        <input
          type="text"
          name="videoTitle"
          className="form-control-plaintext"
          value={fileName}
          readOnly
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Video Title
          </span>
        </div>
        <input
          type="text"
          name="videoTitle"
          id="videoTitleSummary"
          className="form-control"
          value={videoTitle}
          readOnly
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Video Start Date/Time
          </span>
        </div>
        <input
          type="text"
          name="videoDateTime"
          id="videoDateTimeSummary"
          className="form-control"
          value={videoDateTime}
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Video Location
          </span>
        </div>
        <input
          type="text"
          name="videoLocation"
          id="videoLocationSummary"
          className="form-control"
          value={videoLocation}
          readOnly
          disabled
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Upload video" />
      </div>
      <div className="btn-group mt-4">
        <PrevButton handleOnClick={toPrevPage} page={page} />
      </div>
    </>
  );
};

export default PageThree;
