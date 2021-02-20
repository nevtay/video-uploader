import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PrevButton from "../components/PrevButton";
import HomeButton from "../components/HomeButton";
import UploadButton from "../components/UploadButton";
import CancelUploadButton from "../components/CancelUploadButton";
import Alert from "../components/Alert";
import FormContext from "../context/uploadFields/formContext";

const PageThree = ({ page, handlePage }) => {
  const formContext = useContext(FormContext);
  const {
    fileName,
    videoFile,
    videoTitle,
    videoDate,
    videoTime,
    videoLocation,
  } = formContext;

  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadedStatusMessage, setUploadedStatusMessage] = useState("");
  const [displayProgressBar, setDisplayProgressBar] = useState(false);
  const [displayCancelVideo, setDisplayCancelVideo] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);

  // move back one page
  const toPrevPage = (e) => {
    // e.preventDefault();
    if (page === 1) return;
    handlePage((page) => {
      return (page = page - 1);
    });
  };

  useEffect(() => {
    if (uploadedStatusMessage) {
      setTimeout(() => {
        setUploadedStatusMessage("");
      }, 3500);
    }
  }, [uploadedStatusMessage]);

  const CancelToken = axios.CancelToken;
  let cancel;

  const cancelUpload = (e) => {
    e.preventDefault();
    cancel();
    setDisplayCancelVideo(false);
    setDisplayProgressBar(false);
    setUploadPercentage(0);
  };

  // upload function
  const uploadVideo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("title", videoTitle);
    formData.append("date", videoDate);
    formData.append("time", videoTime);
    formData.append("location", videoLocation);
    setDisplayCancelVideo(true);
    setDisplayProgressBar(true);
    try {
      await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        cancelToken: new CancelToken((c) => {
          cancel = c;
        }),
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round(progressEvent.loaded * 100) / progressEvent.total
            )
          );
        },
      });
      setUploadedStatusMessage("Upload succeeded!");
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Upload cancelled!");
      }
      if (err.response.status === 500) {
        console.log("Something went wrong with the upload");
        setUploadedStatusMessage("Upload failed!");
      } else {
        console.log(err.response.data.msg);
        setUploadedStatusMessage("Upload failed!");
      }
      setUploadFailed(true);
    }
  };
  return (
    <>
      {uploadedStatusMessage && <Alert message={uploadedStatusMessage} />}
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
            className={`progress-bar progress-bar-striped progress-bar-animated ${
              !uploadFailed ? `bg-success` : `bg-danger`
            }`}
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
        {/* Show PrevButton if upload is not in progress */}
        {uploadPercentage === 0 && <PrevButton />}

        {/* Show HomeButton upon successful upload */}
        {uploadPercentage === 100 && <HomeButton />}

        {/* Show UploadButton if displayCancelButton is false and upload has not started  */}
        {!displayCancelVideo && uploadPercentage === 0 && (
          <UploadButton uploadFunction={uploadVideo} />
        )}

        {/* Show CancelUploadButton if upload is in progress (i.e. upload percentage is between 0 and 100) and there are no status messages (e.g. for failed or successful uploads) */}
        {!uploadedStatusMessage &&
          uploadPercentage > 0 &&
          uploadPercentage < 100 && (
            <CancelUploadButton cancelUploadFunction={cancelUpload} />
          )}
      </div>
    </>
  );
};

export default PageThree;
