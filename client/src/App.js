import { useState } from "react";
import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";

function App() {
  const [page, setPage] = useState(1);

  // button to move forward one page
  const toNextPage = (e) => {
    if (page === 3) {
      return;
    } else {
      setPage((page) => page + 1);
    }
  };

  // button to move back one page
  const toPrevPage = (e) => {
    if (page === 1) return;
    setPage((page) => {
      return (page = page - 1);
    });
  };

  return (
    <div className="App">
      <h1>Video Uploader</h1>
      <form>
        {page === 1 && <PageOne />}
        {page === 2 && <PageTwo />}
        {page === 3 && <PageThree />}
        <NextButton handleOnClick={toNextPage} />
        <PrevButton handleOnClick={toPrevPage} />
      </form>
    </div>
  );
}

export default App;
