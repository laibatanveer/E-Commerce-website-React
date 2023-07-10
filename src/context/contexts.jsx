// import React, { createContext, useReducer } from "react";
// import {
//   initialState as signupInitialState,
//   reducer as signupReducer,
// } from "./signupReducer";
// import {
//   initialState as loginInitialState,
//   reducer as loginReducer,
// } from "./loginReducer";

// const SignupContext = createContext();
// const LoginContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [signupState, signupDispatch] = useReducer(
//     signupReducer,
//     signupInitialState
//   );
//   const [loginState, loginDispatch] = useReducer(
//     loginReducer,
//     loginInitialState
//   );

//   return (
//     <SignupContext.Provider
//       value={{ state: signupState, dispatch: signupDispatch }}
//     >
//       <LoginContext.Provider
//         value={{ state: loginState, dispatch: loginDispatch }}
//       >
//         {children}
//       </LoginContext.Provider>
//     </SignupContext.Provider>
//   );
// };

// export { SignupContext, LoginContext };
