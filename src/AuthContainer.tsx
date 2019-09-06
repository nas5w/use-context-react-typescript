import React, { useState } from "react";

export const AuthContainer: React.FC = props => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const checkAuth = () => {
    setLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ loggedIn, checkAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export type AuthContextShape = {
  loggedIn: boolean;
  checkAuth: () => void;
};

export const AuthContext = React.createContext({} as AuthContextShape);
