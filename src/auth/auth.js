import React, { useEffect, useState } from 'react';
import app from "../firebase/base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({email:   null});

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider 
            value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};