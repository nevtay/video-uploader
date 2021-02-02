import React from "react";

const UploadButton = ({ uploadFunction }) => {
  return (
    <>
      <button
        className="btn btn-outline-primary"
        onClick={(e) => {
          uploadFunction(e);
        }}
      >
        Upload Video
      </button>
    </>
  );
};

export default UploadButton;
