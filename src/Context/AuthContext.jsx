// 1. Creating Blog Context
// 2. Creating AuthContextProvider
import { createContext, useState } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

export default function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
