import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut=()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser)
             setLoading(false)
    })

    return ()=>{
        return  unSubscribe()
    }


  }, []);

  const authInfo = {
    signUp,
    user,
    loading,
    logIn,
    logOut,
    
  };
  return (
         <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
