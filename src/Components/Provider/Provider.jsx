import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (userobj) => {
    return updateProfile(auth.currentUser, userobj);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      currentSignIn();
    };
  }, []);

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const githubLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const information = {
    createAccount,
    updateUserProfile,
    signIn,
    User,
    loading,
    signOutUser,
    googleLogin,
    githubLogin,
  };

  return (
    <ThemeContext.Provider value={information}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
