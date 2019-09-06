import React, { useContext } from "react";
import { AuthContext } from "./AuthContainer";

export const Content: React.FC = () => {
  const { loggedIn, checkAuth } = useContext(AuthContext);

  return (
    <div>
      {loggedIn ? "Welcome back!" : <button onClick={checkAuth}>Log In</button>}
    </div>
  );
};
