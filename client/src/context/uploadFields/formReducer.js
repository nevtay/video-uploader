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

export default (state, action) => {
  switch (action.type) {
    case SET_FILE_NAME:
      return {
        ...state,
        fileName: action.payload,
      };
    case SET_FILE_TYPE:
      return {
        ...state,
        fileType: action.payload,
      };
    case SET_VIDEO_FILE:
      return {
        ...state,
        videoFile: action.payload,
      };
    case SET_VIDEO_TITLE:
      return {
        ...state,
        videoTitle: action.payload,
      };
    case SET_VIDEO_DATE:
      return {
        ...state,
        videoDate: action.payload,
      };
    case SET_VIDEO_TIME:
      return {
        ...state,
        videoTime: action.payload,
      };
    case SET_VIDEO_LOCATION:
      return {
        ...state,
        videoLocation: action.payload,
      };
    case CLEAR_UPLOADED_VIDEO:
      return {
        ...state,
        fileType: "",
        fileName: "",
        videoFile: "",
      };
    default:
      return state;
  }
};
