import {
  SET_FILE_NAME,
  SET_FILE_TYPE,
  SET_VIDEO_FILE,
  SET_VIDEO_TITLE,
  SET_VIDEO_DATE,
  SET_VIDEO_TIME,
  SET_VIDEO_LOCATION,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_FILE_NAME:
      return {
        ...state,
      };
    case SET_FILE_TYPE:
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
