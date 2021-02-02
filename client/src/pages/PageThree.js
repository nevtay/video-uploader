import React from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

const PageThree = ({
  page,
  fileName,
  handlePage,
  videoTitle,
  videoDate,
  videoTime,
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
      <p className="text-muted text-center mb-4">Upload Summary</p>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text">File Name</span>
        </div>
        <input
          type="text"
          name="fileName"
          id="fileNameSummary"
          className="form-control"
          value={fileName}
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Video Title</span>
        </div>
        <input
          type="text"
          name="videoTitle"
          id="videoTitleSummary"
          className="form-control"
          value={videoTitle}
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Video Start Date</span>
        </div>
        <input
          type="date"
          name="videoDate"
          id="videoDateSummary"
          className="form-control"
          value={videoDate}
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Video Start Time</span>
        </div>
        <input
          type="time"
          name="videoDate"
          id="videoTimeSummary"
          className="form-control"
          value={videoTime}
          disabled
        />
      </div>
      <div className="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Video Location</span>
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
      <div className="btn-group mt-1">
        <PrevButton handleOnClick={toPrevPage} page={page} />
        <button className="btn btn-outline-primary" value="Upload video">
          Upload Video
        </button>
      </div>
    </>
  );
};

export default PageThree;
