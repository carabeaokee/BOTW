import { createContext, useState } from "react";
import React from "react";
import { AuthContextType } from "../types/Customtypes";

const defaultValue = null;

export const AuthContext = createContext<AuthContextType | null>(defaultValue);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const loginUser = () => {
    setUser(true);
  };

  const logoutUser = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ loginUser, logoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
