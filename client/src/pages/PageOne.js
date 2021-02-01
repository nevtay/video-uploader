import React, { useState, useEffect } from "react";
import NextButton from "../components/NextButton";

const PageOne = ({
  page,
  handlePage,
  fileName,
  updateFileName,
  updateFileType,
  updateVideoFile,
  videoTitle,
  updateVideoTitle,
  videoTime,
  updateVideoTime,
  videoDate,
  updateVideoDate,
  videoLocation,
  updateVideoLocation,
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

  const [errors, setErrors] = useState([])

  // validate video title field
  useEffect(() => {
    if (!videoTitle) {
      setErrors([...errors, "Video title required"])
    } else {
      setErrors([...errors.filter(err => err !== "Video title required")])
    }
  }, [videoTitle])

  // validate video date field
  useEffect(() => {
    if (!videoDate) {
      setErrors([...errors, "Video date required"])
    } else {
      setErrors([...errors.filter(err => err !== "Video date required")])
    }
  }, [videoDate])

  // validate video time field
  useEffect(() => {
    if (!videoTime) {
      setErrors([...errors, "Video time required"])
    } else {
      setErrors([...errors.filter(err => err !== "Video time required")])
    }
  }, [videoTime])

  const showErrors = () => errors.map(err => <p>err</p>)

  return (
    <>
      <div className="input-group mb-4">
        <div className="custom-file">
          <input
            type="file"
            name="fileName"
            accept="video/*"
            className="custom-file-input"
            onChange={(e) => {
              if (!e.target.files[0]) return;
              updateVideoFile(e.target.files[0])
              updateFileName(e.target.files[0].name);
              updateFileType(e.target.files[0].type)
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
          placeholder="Enter Title"
          value={videoTitle}
          onChange={(e) => updateVideoTitle(e.target.value)}
          required
        />
      </div>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">Video Start Date</span>
        </div>
        <input
          type="date"
          name="videoStartDate"
          className="form-control"
          placeholder="Start Date (required)"
          value={videoDate}
          onChange={(e) => updateVideoDate(e.target.value)}
          required
        />
      </div>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">Video Start Time</span>
        </div>
        <input
          type="time"
          name="videoStartTime"
          className="form-control"
          placeholder="Start Time (required)"
          value={videoTime}
          onChange={(e) => updateVideoTime(e.target.value)}
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
          onChange={(e) => updateVideoLocation(e.target.value)}
        />
      </div>
      {errors.length > 0
        ?
        <div className="btn-group mt-4">
          <NextButton onClick={(e) => {
            e.preventDefault()
          }} />
        </div>
        :
        <div className="btn-group mt-4">
          <NextButton handleOnClick={toNextPage} page={page} />
        </div>}
    </>
  );
};

export default PageOne;
