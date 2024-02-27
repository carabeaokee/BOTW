import { createContext, useEffect, useState } from "react";
import React from "react";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig.ts";
import { doc, setDoc } from "firebase/firestore";

// Define the type for the authentication context
interface AuthContextType {
  user: User | null;
  loginUser: (email: string, password: string) => void;
  signupUser: (email: string, password: string, firstName: string) => void;
  logoutUser: () => void;
}

// Define the default value for the authentication context
const defaultValue: AuthContextType = {
  user: null,
  loginUser: () => {
    throw Error("login function not implemented");
  },
  signupUser: () => {
    throw Error("signup function not implemented");
  },
  logoutUser: () => {
    throw Error("logout function not implemented");
  },
};

// Create the authentication context
export const AuthContext = createContext(defaultValue);

// Define the authentication provider component
export const AuthProvider = ({ children }) => {
  // Initialize the user state
  const [user, setUser] = useState<User | null>(null);

  // Define the login function
  const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user); // Update the user state
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setUser(null); // Reset the user state
        console.log("errorCode :>> ", errorCode);
        console.log("errorMessage :>> ", errorMessage);
      });
  };

  // Define the signup function
  const signupUser = async (
    email: string,
    password: string,
    firstName: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user); // Update the user state
    if (userCredential.user) {
      const uid = userCredential.user.uid;
      const docRef = await setDoc(doc(db, "users", uid), {
        name: firstName,
        favourites: [],
      });
      console.log("docRef", docRef);
      await updateProfile(userCredential.user, {
        displayName: firstName,
      }).then((profile) => {
        console.log("User profile updated", profile);
      });
    }
  };

  // Define the function to get the active user
  const getActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Update the user state
      } else {
        console.log("no active user");
      }
    });
  };

  // Use effect hook to get the active user when the component mounts
  useEffect(() => {
    getActiveUser();
  }, []);

  // Define the logout function
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  // Return the authentication provider with the authentication context value
  return (
    <AuthContext.Provider
      value={{
        signupUser,
        loginUser,
        logoutUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
