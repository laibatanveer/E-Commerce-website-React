// import React, { useReducer } from "react";
// import { RiMailFill } from "react-icons/ri";
// import { FaUserAlt, FaUserLock } from "react-icons/fa";
// import Swal from "sweetalert2";
// import UserContext from "../userContext";

// function SignUpPage() {
//   const initialState = {
//     user: null,
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const handleSignUp = (e) => {
//     e.preventDefault();

//     Swal.fire({
//       icon: "success",
//       title: "DONE!",
//       text: "You have successfully signed up.",
//     });

//     dispatch({ type: "SET_USER", payload: { username, password, email } });

//     signUp();
//   };

//   function signUp() {
//     const { user } = state;
//     console.warn(user);
//     localStorage.setItem("user-info", JSON.stringify(user));
//   }

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       <div
//         className="d-flex justify-content-center align-items-center "
//         style={{ height: "100vh" }}
//       >
//         <div className="card rounded-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
//           <div
//             className="card-body rounded-5"
//             style={{
//               height: "50vh",
//               width: "40vw",
//             }}
//           >
//             <h3 className="text-center fw-bold  mb-4">SIGN UP</h3>
//             <form onSubmit={handleSignUp}>
//               <div className="form-group">
//                 <label htmlFor="username">
//                   <FaUserAlt /> Username
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control rounded-pill"
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     autoComplete="current-password"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">
//                   <RiMailFill /> Email
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type="email"
//                     className="form-control rounded-pill"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     autoComplete="current-password"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">
//                   <FaUserLock /> Password
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type="password"
//                     className="form-control rounded-pill"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     autoComplete="current-password" // Add the autocomplete attribute
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 btn btn-success btn-block position-absolute top-60 start-50 translate-middle"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default SignUpPage;

import React, { useState } from "react";
import { RiMailFill } from "react-icons/ri";
import { FaUserAlt, FaUserLock } from "react-icons/fa";
import Swal from "sweetalert2";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "DONE!",
      text: "You have successfully signed up.",
    });

    const user = { username, password, email };
    signUp(user);
  };

  function signUp(user) {
    console.warn(user);
    localStorage.setItem("user-info", JSON.stringify(user));
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card rounded-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div
          className="card-body rounded-5"
          style={{
            height: "50vh",
            width: "40vw",
          }}
        >
          <h3 className="text-center fw-bold mb-4">SIGN UP</h3>
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
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="current-password"
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
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-password"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
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

