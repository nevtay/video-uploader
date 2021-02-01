import { useState } from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import "./styles/main.scss";

function App() {
  const MAX_PAGES = 3;
  // track current page of wizard form
  const [page, setPage] = useState(1);

  // metadata fields for page one
  const [fileName, setFileName] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDateTime, setVideoDateTime] = useState("");
  const [videoLocation, setVideoLocation] = useState("");

  return (
    <div className="App">
      <h1>Video Uploader</h1>
      <form className="container fluid col-md-6 col-sm-12">
        {page === 1 && (
          <PageOne
            page={page}
            handlePage={setPage}
            fileName={fileName}
            handleFileName={setFileName}
            videoTitle={videoTitle}
            handleVideoTitle={setVideoTitle}
            videoDateTime={videoDateTime}
            handleVideoDateTime={setVideoDateTime}
            videoLocation={videoLocation}
            handleVideoLocation={setVideoLocation}
          />
        )}
        {page === 2 && <PageTwo page={page} handlePage={setPage} />}
        {page === 3 && <PageThree page={page} handlePage={setPage} />}
        <div className="form-group text-center mt-3">
          <small className="text-muted">
            Current Page: {page} of {MAX_PAGES}
          </small>
        </div>
      </form>
    </div>
  );
}

export default App;
