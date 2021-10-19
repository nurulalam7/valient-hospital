import React, { useState } from 'react'
import './Signin.css'
import { GoogleAuthProvider,getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import initializeauthentication from '../Firebase/firebase.init';

const provider = new GoogleAuthProvider();
const auth = getAuth();
initializeauthentication();
const Signup = () => {
    const[email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [islogin,setlogin]=useState(false);
   
    const registration=e=>{
        console.log(email,password)
        createUserWithEmailAndPassword (auth,email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        e.preventDefault();

    }

    const handleemailchange=e=>{
        setemail(e.target.value);
    }


    const handlepasswordchange =e=>{
        setpassword(e.target.value);
    } 


    const togglelogin =e =>{
             setlogin(e.target.checked);
    }
    return (
        <div className="sign">

           
       <form onSubmit={registration}>
           <h3>please {islogin ? "login" :"register"}</h3>
           <level htmlFor="email">Email :</level>
           <input onChange={handleemailchange} type="text" name="email" />
           <br />
           <br />
           <level htmlFor="password">password :</level>
           <input onBlur={handlepasswordchange} type="password"  name="password"/>
           <br />
           <br />
           <input onChange={togglelogin} type="checkbox" />
          <level htmlFor="already register" already regist >already register ?</level> 
          <br />
           <input type="submit" value={islogin ? "login" :"register"} />

        </form>
        <br />
        <br />
        <br />


        </div>
    )
}

export default Signup
