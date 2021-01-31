import { useState } from "react";
import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

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
      <p>
        Current Page: {page} of {MAX_PAGES}
      </p>
      <h1>Video Uploader</h1>
      <form>
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
      </form>
    </div>
  );
}

export default App;
