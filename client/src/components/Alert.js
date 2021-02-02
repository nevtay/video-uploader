import React from "react";

const Alert = ({ message }) =>
  message === "Upload succeeded!" ? (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        zIndex: 100,
      }}
      className="alert alert-success"
    >
      {message}
    </div>
  ) : (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        zIndex: 100,
      }}
      className="alert alert-danger"
    >
      {message}
    </div>
  );

export default Alert;
