import React, { useReducer } from "react";
import FormContext from "./formContext";
import formReducer from "./formReducer";
import {
  SET_FILENAME,
  SET_FILETYPE,
  SET_VIDEO_FILE,
  SET_VIDEO_TITLE,
  SET_VIDEO_DATE,
  SET_VIDEO_TIME,
  SET_VIDEO_LOCATION,
} from "./types";

const FormState = (props) => {
  const initialState = {
    fileName: "",
    fileType: "",
    videoFile: "",
    videoTitle: "",
    videoDate: "",
    videoTime: "",
    videoLocation: "",
  };

  const [state, dispatch] = useReducer(formReducer);
  return <FormContext.Provider>{props.children}</FormContext.Provider>;
};

export default FormState;
