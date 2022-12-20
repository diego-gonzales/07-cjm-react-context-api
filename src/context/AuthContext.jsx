import { createContext, useState } from "react";

export const AuthContext = createContext();
const initialIsAuth = null;

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialIsAuth);

  const handleIsAuth = (e) => {
    if (isAuth) setIsAuth(null);
    else setIsAuth(true);
  };

  const data = {isAuth, handleIsAuth};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
