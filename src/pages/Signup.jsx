// import React, { useState } from "react";
// import { RiMailFill } from "react-icons/ri";
// import { FaUserAlt, FaUserLock } from "react-icons/fa";
// import Swal from "sweetalert2";

// function SignUpPage() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     Swal.fire({
//       icon: "success",
//       title: "DONE!",
//       text: "You have successfully signed up.",
//     });
//   };


//   return (
//     <div
//       className="d-flex justify-content-center align-items-center "
//       style={{ height: "100vh" }}
//     >
//       <div className="card rounded-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
//         <div
//           className="card-body rounded-5"
//           style={{
//             height: "50vh",
//             width: "40vw",
//           }}
//         >
//           <h3 className="text-center fw-bold  mb-4">SIGN UP</h3>
//           <form onSubmit={handleSignUp}>
//             <div className="form-group">
//               <label htmlFor="username">
//                 <FaUserAlt /> Username
//               </label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control rounded-pill"
//                   id="username"
//                   placeholder="Enter your username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">
//                 <RiMailFill /> Email
//               </label>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   className="form-control rounded-pill"
//                   id="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">
//                 <FaUserLock /> Password
//               </label>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   className="form-control rounded-pill"
//                   id="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="mt-4 btn btn-success btn-block position-absolute top-60 start-50 translate-middle"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;

import React, { useReducer } from "react";
import { RiMailFill } from "react-icons/ri";
import { FaUserAlt, FaUserLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { initialState, reducer } from "../context/signupReducer";

function SignUpPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, email, password } = state;

  const handleSignUp = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "DONE!",
      text: "You have successfully signed up.",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: `UPDATE_${name.toUpperCase()}`, payload: value });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className="card rounded-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div
          className="card-body rounded-5"
          style={{
            height: "50vh",
            width: "40vw",
          }}
        >
          <h3 className="text-center fw-bold  mb-4">SIGN UP</h3>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">
                <FaUserAlt /> Username
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={handleChange}
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
                  className="form-control rounded-pill"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
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
                  className="form-control rounded-pill"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
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
}

export default SignUpPage;

