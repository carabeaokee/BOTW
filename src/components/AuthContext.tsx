import { createContext, useEffect, useState } from "react";
import React from "react";
// import { AuthContextType } from "../types/Customtypes";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig.ts";

// const defaultValue = null;

interface AuthContextType {
  user: User | null;
  loginUser: (email: string, password: string) => void;
  signupUser: (email: string, password: string) => void;
  logoutUser: () => void;
  userChecked: boolean;
}

// sets the default value for the authentication context.
const defaultValue: AuthContextType = {
  user: null, // by default, the user is set to indicate no provider is present.
  loginUser: () => {
    throw Error("login function not implemented");
  },
  signupUser: () => {
    throw Error("signup function not implemented");
  },
  logoutUser: () => {
    throw Error("logout function not implemented");
  },
  userChecked: false,
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userChecked, setUserChecked] = useState<boolean>(false);

  const loginUser = (email: string, password: string) => {
    // console.log("Login called with:", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signupUser = (email: string, password: string) => {
    console.log("Signup called with:", email, password);
    console.log("auth :>> ", auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential :>> ", userCredential);
        // Signed up
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  console.log("user :>>", user);

  const getActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("active user", user);
        setUser(user);
      } else {
        console.log("no active user");
      }
    });
  };

  useEffect(() => {
    getActiveUser();
    setUserChecked(true);
  }, []);

  console.log("user :>>", user);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("error :>> ", error);
      });
    // logout logic here
    // refactor when we are dealing with a real authentication provider
  };

  return (
    <AuthContext.Provider
      value={{ signupUser, loginUser, logoutUser, user, userChecked }}
    >
      {children}
    </AuthContext.Provider>
  );
};
