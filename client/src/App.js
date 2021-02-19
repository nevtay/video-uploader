import MainDisplay from "./pages/MainDisplay";
import "./styles/main.scss";

import FormState from "./context/uploadFields/FormState";

function App() {
  return (
    <FormState>
      <MainDisplay />
    </FormState>
  );
}

export default App;
