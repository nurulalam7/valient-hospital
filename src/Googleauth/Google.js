// import React, { useState,useEffect } from 'react'
// import './Google.css'
// import { GoogleAuthProvider,getAuth, signInWithPopup,signOut,onAuthStateChanged  } from "firebase/auth";
// import initializeauthentication from '../Firebase/firebase.init';


// import {  createUserWithEmailAndPassword  } from "firebase/auth";




// initializeauthentication();




// // google 
// const Googleprovider = new GoogleAuthProvider();

// const Google = () => {
    
    // const [user,setUser]=useState({})
    // const auth=getAuth();
    // const Googleprovider = new GoogleAuthProvider();

    // const handlegooglesignin=()=>{
       
    //     signInWithPopup(auth,Googleprovider)
    //     .then(result =>{
            
    //         const {displayName,email,photoURL}=result.user;
    //         const loginuser={
    //             name:displayName,
    //             email:email,
    //             photo:photoURL
    //         };
    //         setUser(loginuser);
    //     })
    //     .catch (error =>{
    //         console.log(error.message);
    //     })
       
    // }

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //          setUser(user)
             
    //         } 
    //     });

    // },[])
    // const handlesignout =()=>{
    //     signOut(auth)
    //     .then(()=>{
    //         setUser({});
    //     })
    // }


    // const[email,setemail]=useState("");
    // const [password,setpassword]=useState("");
    // const [islogin,setlogin]=useState(false);
   
    // const registration=e=>{
    //     console.log(email,password)
    //     createUserWithEmailAndPassword (auth,email,password)
    //     .then(result =>{
    //         const user =result.user;
    //         console.log(user);
    //     })
    //     e.preventDefault();

    // }

    // const handleemailchange=e=>{
    //     setemail(e.target.value);
    // }


    // const handlepasswordchange =e=>{
    //     setpassword(e.target.value);
    // } 


    // const togglelogin =e =>{
    //          setlogin(e.target.checked);
    // }
    // return (
        // <div className="gmail">
        //     <br />
        //     <br />
        //     <br />
          
          
        //    <br />

        //    {
        //        user.email && <div>
        //            <h3>{user.name}</h3>
        //            <p>{user.email}</p>
        //            <img src={user.photo} alt="" />
        //        </div>
        //    }

        //     <form onSubmit={registration}>
        //         <h3>please {islogin ? "login" :"register"}</h3>
        //         <level htmlFor="email">Email :</level>
        //         <input onChange={handleemailchange} type="text" name="email" />
        //         <br />
        //         <br />
        //         <level htmlFor="password">password :</level>
        //         <input onBlur={handlepasswordchange} type="password"  name="password"/>
        //         <br />
        //         <br />
        //         <input onChange={togglelogin} type="checkbox" />
        //         <level htmlFor="already register" already regist >already register ?</level> 
        //         <br />
        //         <input type="submit" value={islogin ? "login" :"register"} />

        //     </form>
        //     <br />
        //    <h5>already have an account ?</h5>
        //      ----------------or------------
        //      <br />
        //    {
        //        !user.email?
        //        <button  onClick={handlegooglesignin}>Google sign in</button> :
        //        <button onClick={handlesignout}>sign out</button>
          
        //     }
           

          
            
          
        //    <br />
        //    <br />
        //    <br />
        //    <br />
        //    <br />
        //    <br />
          
          
        
           
          
          
        // </div>
        
//     )
// }

// export default Google
