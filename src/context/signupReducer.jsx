
const initialState = {
  
    username: '',
    email: '',
    password: '',
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
        return { ...state, username: action.payload };
      case 'UPDATE_EMAIL':
        return { ...state, email: action.payload };
      case 'UPDATE_PASSWORD':
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  
  export { initialState, reducer };
  