import React, { useState } from "react";
import { FaUserAlt, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: "Invalid username or password.",
      });
    }
  };

 
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
     
    >
      <div className="card rounded-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div
          className="card-body rounded-5 "
          style={{
            height: "45vh",
            width:"40vw",
      
      
       
          }}
          
        >
          <h3 className="text-center mb-4">
       LOGIN
          </h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">  <FaUserAlt />  Username</label>
              <div className="input-group">
             
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password"><FaUserLock /> Password</label>
              <div className="input-group">
              
                <input
                  type="password"
                  className="form-control rounded-pill"
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
              Login
            </button>
          </form>
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
