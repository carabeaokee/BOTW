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
import { collection, doc, setDoc } from "firebase/firestore";

// const defaultValue = null;

interface AuthContextType {
  user: User | null;
  // firstName: string;
  loginUser: (email: string, password: string) => void;
  signupUser: (email: string, password: string, firstName: string) => void;
  logoutUser: () => void;
  userChecked: boolean;
}

const defaultValue: AuthContextType = {
  user: null,
  // firstName: "",
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
  // const [firstName, setFirstName] = useState<string>("");
  const [userChecked, setUserChecked] = useState<boolean>(false);

  // const updateName = (newName: string) => {
  //   setName(newName);
  // };

  const loginUser = (email: string, password: string) => {
    // console.log("Login called with:", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode :>> ", errorCode);
        console.log("errorMessage :>> ", errorMessage);
      });
  };

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
    setUser(userCredential.user);
    if (userCredential.user) {
      const uid = userCredential.user.uid;
      const docRef = await setDoc(doc(db, "users", uid), {
        name: firstName,
        favourites: [],
      });
      console.log("docRef", docRef);
      // console.log("Document written with ID: ", docRef);
      // const collectionpath = doc(db, uid, "favourites");
      // const updatedUser = await setDoc(collectionpath, { items: [] });
      // console.log("updatedUser", updatedUser);
    }
  };
  // return userCredential.user;

  // const signupUser = (email: string, password: string) => {
  //   // console.log("Signup called with:", email, password);
  //   // console.log("auth :>> ", auth);

  //   createUserWithEmailAndPassword(auth, email, password).then(
  //     (userCredential) => {
  //       // const user = userCredential.user;
  //       return updateProfile(userCredential.user, {
  //         displayName: firstName,
  //       })
  //         .then(() => {
  //           setUser(user);
  //           return user
  //         })
  //         .catch((error) => {
  //           console.error("Error signing up: ", error.code, error.message);
  //         });
  //     }
  //   );
  // };

  // console.log("user :>>", user);

  const getActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("active user", user);
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
        console.log("Error: ", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        signupUser,
        loginUser,
        logoutUser,
        user,
        userChecked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
