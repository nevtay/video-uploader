import { useState, useMemo, useContext } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import "../styles/main.scss";

import FormState from "../context/uploadFields/FormState";
import FormContext from "../context/uploadFields/formContext";

import PagesContext from "../context/pages/pagesContext";

function MainDisplay() {
  const formContext = useContext(FormContext);
  const { videoFile, fileType } = formContext;

  const pagesContext = useContext(PagesContext);
  console.log("PP", pagesContext);

  // constants
  const MAX_PAGES = 3;

  // track current page of wizard form
  const [page, setPage] = useState(1);

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
        {page === 1 && <PageOne page={page} handlePage={setPage} />}
        {page === 2 && <PageTwo page={page} handlePage={setPage} />}
        {page === 3 && <PageThree page={page} handlePage={setPage} />}
        <div className="form-group text-center mt-3">
          <small className="text-muted">
            Step {page} of {MAX_PAGES}
          </small>
        </div>
      </form>
    </div>
  );
}

export default MainDisplay;
