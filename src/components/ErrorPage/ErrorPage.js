import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="error-code">
        <h1>404</h1>
      </div>
      <div className="error-message">
        <p>Looks like you're lost...</p>
      </div>
      <div className="go-back">
        <Link to="/">GO BACK</Link>
      </div>
    </div>
  );
};
