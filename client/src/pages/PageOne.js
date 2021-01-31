import React from "react";

const PageOne = () => {
  return (
    <>
      <input type="file" name="fileName" placeholder="File Name"></input>
      <input
        type="text"
        name="videoTitle"
        placeholder="Title (required) "
        required
      ></input>
      <input
        type="date"
        name="videoStartDateTime"
        placeholder="Start Date/Time (required)"
        required
      ></input>
      <input
        type="string"
        name="postalCode"
        placeholder="Postal Code (optional)"
      ></input>
    </>
  );
};

export default PageOne;
