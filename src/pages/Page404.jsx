import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="container"
    style={{height:'100vh'}}>
      <div className="text-center mt-5">
        <h1 className="display-1">404</h1>
        <h2 className="display-4">Oops! Page Not Found</h2>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-4 btn btn-dark">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
