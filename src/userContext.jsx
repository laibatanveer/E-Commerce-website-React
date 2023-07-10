import { createContext } from "react";

const UserContext = createContext();
function reducer(state, action) {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  }
  

export default UserContext;
