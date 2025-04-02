import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [User, setUser] = useState(null);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userobj) => {
    return updateProfile(auth.currentUser, userobj);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      currentSignIn();
    };
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };

  const information = {
    createAccount,
    updateUserProfile,
    signIn,
    User,
    signOutUser,
  };

  return (
    <ThemeContext.Provider value={information}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
