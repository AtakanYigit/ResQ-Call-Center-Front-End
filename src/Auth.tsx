import React, {useEffect, useState} from "react";
// import axios from "axios";

interface User {
    uid: string | null;
}

interface AuthContextType {
    currentUser: User;
}

const AuthContext = React.createContext<AuthContextType>({currentUser: {uid: "noAuth"}});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User>({ uid: null });
    const [pending, setPending] = useState(true);

    // const provider = new firebase.auth.GoogleAuthProvider();
    useEffect(() => {
        //Do Auth Stuff Here
        setCurrentUser({uid: null});
        setPending(false);
    }, []);

    if(pending){
        return <p>Loading</p>;
    }
    
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext};