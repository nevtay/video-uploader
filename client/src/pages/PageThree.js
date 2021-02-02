import React, { useState } from "react";
import axios from "axios";
import PrevButton from "../components/PrevButton";
import Alert from "../components/Alert";

const PageThree = ({
  page,
  fileName,
  handlePage,
  videoFile,
  videoTitle,
  videoDate,
  videoTime,
  videoLocation,
}) => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadedMessage, setUploadedMessage] = useState("");
  const [displayProgressBar, setDisplayProgressBar] = useState(false);
  const [displayCancelVideo, setDisplayCancelVideo] = useState(false);

  // move back one page
  const toPrevPage = (e) => {
    // e.preventDefault();
    if (page === 1) return;
    handlePage((page) => {
      return (page = page - 1);
    });
  };

  // upload function
  const uploadVideo = async () => {
    const formData = new FormData();
    // const data = {
    //   videoFile: videoFile,
    //   title: videoTitle,
    //   date: videoDate,
    //   time: videoTime,
    //   location: videoLocation,
    // };
    formData.append("file", videoFile);
    // formData.append("title", videoTitle);
    // formData.append("date", videoDate);
    // formData.append("time", videoTime);
    // formData.append("location", videoLocation);
    setDisplayCancelVideo(true);
    setDisplayProgressBar(true);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Something went wrong with the upload");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  return (
    <>
      <Alert />
      <h5 className="text-muted text-center mb-4">
        <strong>Upload Summary</strong>
      </h5>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text">File Name</span>
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
        <div className="input-group-prepend">
          <span className="input-group-text">Video Title</span>
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
        <div className="input-group-prepend">
          <span className="input-group-text">Video Start Date</span>
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
        <div className="input-group-prepend">
          <span className="input-group-text">Video Start Time</span>
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
        <div className="input-group-prepend">
          <span className="input-group-text">Video Location</span>
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
      {displayProgressBar && (
        <div className="progress" style={{ height: "35px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style={{ width: `${uploadPercentage}%` }}
            aria-valuenow={uploadPercentage.toString()}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {uploadPercentage}%
          </div>
        </div>
      )}
      <div className="btn-group mt-3">
        <PrevButton handleOnClick={toPrevPage} page={page} />
        {!displayCancelVideo && (
          <button
            className="btn btn-outline-primary"
            onClick={(e) => {
              e.preventDefault();
              uploadVideo();
            }}
            value="Upload video"
          >
            Upload Video
          </button>
        )}
        {displayCancelVideo && (
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setDisplayCancelVideo(false);
              setDisplayProgressBar(false);
            }}
          >
            Cancel Upload
          </button>
        )}
      </div>
    </>
  );
};

export default PageThree;
