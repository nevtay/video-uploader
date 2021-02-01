import { useState, useMemo } from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import "./styles/main.scss";

function App() {
  // constants
  const MAX_PAGES = 3;

  // track current page of wizard form
  const [page, setPage] = useState(1);

  // metadata fields for page one
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("video/mp4")
  const [videoFile, setVideoFile] = useState("")
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDateTime, setVideoDateTime] = useState("");
  const [videoLocation, setVideoLocation] = useState("");

  const renderVideo = useMemo(() => {
    return <div className="embed-responsive embed-responsive-16by9 mb-3">
      <video src={!videoFile ? "" : URL.createObjectURL(videoFile)} type={fileType} alt="Video Preview" preload="auto" />
    </div>
  }, [videoFile])

  return (
    <div className="container-fluid">
      <h1 className="display-3 mb-5 text-center">Video Uploader</h1>
      <form method="post" className="m-auto col-sm-10 col-md-7 col-lg-5">
        {videoFile && renderVideo}
        {page === 1 && (
          <PageOne
            page={page}
            handlePage={setPage}
            fileName={fileName}
            updateFileName={setFileName}
            updateFileType={setFileType}
            updateVideoFile={setVideoFile}
            videoTitle={videoTitle}
            updateVideoTitle={setVideoTitle}
            videoDateTime={videoDateTime}
            updateVideoDateTime={setVideoDateTime}
            videoLocation={videoLocation}
            updateVideoLocation={setVideoLocation}
          />
        )}
        {page === 2 && <PageTwo page={page} handlePage={setPage} />}
        {page === 3 && (
          <PageThree
            page={page}
            handlePage={setPage}
            fileName={fileName}
            videoTitle={videoTitle}
            videoDateTime={videoDateTime}
            videoLocation={videoLocation}
          />
        )}
        <div className="form-group text-center mt-3">
          <small className="text-muted">
            Step {page} of {MAX_PAGES}
          </small>
        </div>
      </form>
    </div >
  );
}

export default App;
