import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      404 Not Found! The page you were looking for was not found. Are you sure
      of the URL?
      <br />
      <Link to={"/signup"}>Signup</Link>
      <br />
      <Link to={"/login"}>Log in</Link>
    </div>
  );
}

export default Error404;
