import { useState, useEffect } from 'react';
import initializeauthentication from './../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword } from "firebase/auth";



initializeauthentication();

const UseFirebase =()=>{

    const [user,setuser]=useState({});
    const [error,seterror]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const auth = getAuth();

    
    const googleprovider = new GoogleAuthProvider();

    const handleemail=(e)=>{
        setEmail(e.target.value)
        

    }

    const handlepassword=(e)=>{
        setPassword(e.target.value)
    }

    const signinusinggoogle=()=>{
        signInWithPopup(auth,googleprovider)
        .then(result=>{
            console.log(result.user);
            setuser(result.user);
        })
        .catch(error=>{
            seterror(error.mesage)
        })
    }

    const signinwithemail=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setuser(result.user);
        })
    }

    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            setuser({});
        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log("inside state change")
                setuser(user)
            }
        })
    },[])
    return{
        logout,
        user,
        error,
       handleemail,
       handlepassword,
       signinwithemail,
        signinusinggoogle
    }
}
export default  UseFirebase;