import { useState, useMemo, useContext } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import "../styles/main.scss";

import FormContext from "../context/uploadFields/formContext";

import PagesContext from "../context/pages/pagesContext";

function MainDisplay() {
  const formContext = useContext(FormContext);
  const { videoFile, fileType } = formContext;

  const pagesContext = useContext(PagesContext);
  const { currentPage, lastPage } = pagesContext;

  // render video preview
  const renderVideo = useMemo(() => {
    return (
      <div className="embed-responsive embed-responsive-16by9 mb-2">
        <video
          src={!videoFile ? "" : URL.createObjectURL(videoFile)}
          type={fileType}
          alt="Video Preview"
          preload="auto"
        />
      </div>
    );
  }, [videoFile, fileType]);

  return (
    <div className="container-fluid">
      <h1 className="display-3 mb-4 mt-5 text-center">Video Uploader</h1>
      <form className="m-auto col-sm-10 col-md-7 col-lg-6">
        {videoFile && renderVideo}
        {currentPage === 1 && <PageOne />}
        {currentPage === 2 && <PageTwo />}
        {currentPage === 3 && <PageThree />}
        <div className="form-group text-center mt-3">
          <small className="text-muted">
            Step {currentPage} of {lastPage}
          </small>
        </div>
      </form>
    </div>
  );
}

export default MainDisplay;
