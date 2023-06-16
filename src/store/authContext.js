import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userId: undefined,
  setUserId: () => {},
  firstName: undefined,
  setFirstName: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    userId,
    setUserId,
    firstName,
    setFirstName
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
