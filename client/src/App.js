import { useState, useMemo, useRef, useContext } from "react";
import MainDisplay from "./pages/MainDisplay";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import "./styles/main.scss";

import FormState from "./context/FormState";
import FormContext from "./context/formContext";

function App() {
  return (
    <FormState>
      <MainDisplay />
    </FormState>
  );
}

export default App;
