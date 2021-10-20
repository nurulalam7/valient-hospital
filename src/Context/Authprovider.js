import React, { createContext } from 'react'
import UseFirebase from '../Hooks/Usefirebase';


export const Authcontext=createContext();
const Authprovider = ({children}) => {
    // const {children}=props;
    const allcontext=UseFirebase();
    return (
        <div>
            <Authcontext.Provider value={allcontext}>
                    {children}
            </Authcontext.Provider>
        </div>
    )
}

export default Authprovider
