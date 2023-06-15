import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
