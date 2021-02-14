import {
  SET_FILENAME,
  SET_FILETYPE,
  SET_VIDEO_FILE,
  SET_VIDEO_TITLE,
  SET_VIDEO_DATE,
  SET_VIDEO_TIME,
  SET_VIDEO_LOCATION,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_FILENAME:
      return {
        ...state,
      };
    case SET_FILETYPE:
      return {
        ...state,
      };
    case SET_VIDEO_FILE:
      return {
        ...state,
      };
    case SET_VIDEO_TITLE:
      return {
        ...state,
      };
    case SET_VIDEO_DATE:
      return {
        ...state,
      };
    case SET_VIDEO_TIME:
      return {
        ...state,
      };
    case SET_VIDEO_LOCATION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
