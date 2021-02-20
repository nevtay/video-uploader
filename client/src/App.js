import MainDisplay from "./pages/MainDisplay";
import "./styles/main.scss";

import FormState from "./context/uploadFields/FormState";
import PagesState from "./context/pages/PagesState";

function App() {
  return (
    <FormState>
      <PagesState>
        <MainDisplay />
      </PagesState>
    </FormState>
  );
}

export default App;
