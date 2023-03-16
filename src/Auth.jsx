import React, {useEffect, useState} from "react";
import axios from "axios";

const AuthContext = React.createContext({currentUser: {uid: "noAuth"}});

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    // const provider = new firebase.auth.GoogleAuthProvider();
    useEffect(() => {
        //Do Auth Stuff Here
        setCurrentUser({uid: "123456"});
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext};