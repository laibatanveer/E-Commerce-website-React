import React, { useState } from 'react';
import { RiUserFill, RiLockPasswordFill, RiLoginCircleFill } from 'react-icons/ri';
import { FaUserAlt, FaUserLock} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: 'Invalid username or password.',
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh'}}
    >
      <div className="card">
        <div className="card-body "
        style={{height: '50vh' , background: 'linear-gradient(to bottom right, #ffc107, #ffc120, #FFE072, #FFE076)' }}>
          <h3 className="text-center fw-bold fst-italic mb-4" ><RiLoginCircleFill/> LOGIN</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                    <FaUserAlt />
                </div>
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
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                 <span>
                 <FaUserLock />

                 
                 </span>
                    
            
                </div>
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
            <button type="submit" className="mt-4 btn btn-success btn-block position-absolute top-60 start-50 translate-middle">
              Login
            </button>
          </form>
          <p className="mt-5 text-center">
            Don't have an account?{' '}
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
