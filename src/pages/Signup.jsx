import React, { useState } from "react";
import { RiUserFill, RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import { FaUserAlt, FaUserLock } from "react-icons/fa";

import Swal from "sweetalert2";

function SignUpPage ()
 {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();


    Swal.fire({
      icon: "success",
      title: "Sign Up Successful!",
      text: "You have successfully signed up.",
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card">
        <div
          className="card-body"
          style={{
            height: "50vh",
            background:
              "linear-gradient(to bottom right, #ffc107, #ffc120, #FFE072, #FFE076)",
          }}
        >
          <h3 className="text-center fw-bold fst-italic mb-4">SIGN UP</h3>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">
                <FaUserAlt /> Username
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <RiMailFill /> Email
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FaUserLock /> Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 btn btn-success btn-block position-absolute top-60 start-50 translate-middle"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
