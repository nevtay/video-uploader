import React from "react";
import NextButton from "../components/NextButton";

const PageOne = ({
  page,
  handlePage,
  fileName,
  handleFileName,
  handleVideoPreview,
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
      <div className="input-group mb-4">
        <div className="custom-file">
          <input
            type="file"
            name="fileName"
            className="custom-file-input"
            onChange={(e) => {
              if (!e.target.files[0]) return;
              handleFileName(e.target.files[0].name);
              handleVideoPreview(URL.createObjectURL(e.target.files[0]))
            }}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {!fileName ? "Upload Video" : fileName}
          </label>
        </div>
      </div>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">Video Title</span>
        </div>
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
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">Video Start Date/Time</span>
        </div>
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
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">Video Location</span>
        </div>
        <input
          type="string"
          name="postalCode"
          className="form-control"
          placeholder="e.g. 190034"
          value={videoLocation}
          onChange={(e) => handleVideoLocation(e.target.value)}
        />
      </div>
      <div className="btn-group mt-4">
        <NextButton handleOnClick={toNextPage} page={page} />
      </div>
    </>
  );
};

export default PageOne;
