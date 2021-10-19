import React, { useState } from 'react'
import './Google.css'
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut } from "firebase/auth";
import initializeauthentication from '../Firebase/firebase.init';


initializeauthentication();

// google 
const Googleprovider = new GoogleAuthProvider();

const Google = () => {
    const [user,setUser]=useState({})
    const auth=getAuth();
    const handlegooglesignin=()=>{
       
        signInWithPopup(auth,Googleprovider)
        .then(result =>{
            
            const {displayName,email,photoURL}=result.user;
            const loginuser={
                name:displayName,
                email:email,
                photo:photoURL
            };
            setUser(loginuser);
        })
        .catch (error =>{
            console.log(error.message);
        })
       
       
      

       
      
    }
    const handlesignout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    return (
        <div className="gmail">
            <br />
            <br />
            <br />
           
           {
               !user.email?
               <button  onClick={handlegooglesignin}>Google sign in</button> :
               <button onClick={handlesignout}>sign out</button>
          
            }
           
          
           <br />

           {
               user.email && <div>
                   <h3>{user.name}</h3>
                   <p>{user.email}</p>
                   <img src={user.photo} alt="" />
               </div>
           }

          
            
          
           <br />
           <br />
           <br />
           <br />
           <br />

          
        
           
          
          
        </div>
        
    )
}

export default Google
