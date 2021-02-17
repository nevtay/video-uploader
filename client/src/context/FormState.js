import React, { useReducer, useRef } from "react";
import FormContext from "./formContext";
import formReducer from "./formReducer";
import {
  SET_FILE_NAME,
  SET_FILE_TYPE,
  SET_VIDEO_FILE,
  SET_VIDEO_TITLE,
  SET_VIDEO_DATE,
  SET_VIDEO_TIME,
  SET_VIDEO_LOCATION,
  CLEAR_UPLOADED_VIDEO,
} from "./types";

const FormState = (props) => {
  const initialState = {
    fileName: "",
    fileType: "",
    videoFile: "",
    videoFileRef: useRef(),
    videoTitle: "",
    videoDate: "",
    videoTime: "",
    videoLocation: "",
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // handle selected video for upload
  const setFileProperties = (e) => {
    // handle cancelling file selection popup
    if (!e.target.files[0]) {
      return;
    } else {
      dispatch({
        type: SET_VIDEO_FILE,
        payload: e.target.files[0],
      });
      dispatch({
        type: SET_FILE_NAME,
        payload: e.target.files[0].name,
      });
      dispatch({
        type: SET_FILE_TYPE,
        payload: e.target.files[0].type,
      });
    }
  };

  // set custom video title
  const setVideoTitle = (e) => {
    dispatch({
      type: SET_VIDEO_TITLE,
      payload: e.target.value,
    });
  };

  // set video time
  const setVideoTime = (e) => {
    dispatch({
      type: SET_VIDEO_TIME,
      payload: e.target.value,
    });
  };

  const clearVideoFile = () => {
    dispatch({
      type: CLEAR_UPLOADED_VIDEO,
    });
  };

  return (
    <FormContext.Provider
      value={{
        fileName: state.fileName,
        fileType: state.fileType,
        videoFile: state.videoFile,
        videoFileRef: state.videoFileRef,
        videoTitle: state.videoTitle,
        videoTime: state.videoTime,
        setFileProperties,
        setVideoTitle,
        setVideoTime,
        clearVideoFile,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
