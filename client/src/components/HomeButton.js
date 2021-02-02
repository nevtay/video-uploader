import React from "react";

const HomeButton = () => {
  return (
    <>
      <button
        className="btn btn-outline-info mt-2"
        onClick={() => window.location.reload()}
      >
        Upload another video
      </button>
    </>
  );
};

export default HomeButton;
