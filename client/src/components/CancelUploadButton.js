import React from "react";

const CancelUploadButton = ({ cancelUploadFunction }) => {
  return (
    <>
      <button
        className="btn btn-outline-danger"
        onClick={() => cancelUploadFunction()}
      >
        Cancel Upload
      </button>
    </>
  );
};

export default CancelUploadButton;
