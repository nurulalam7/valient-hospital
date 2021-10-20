import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'
import UseFirebase from './../Hooks/Usefirebase';



const Header = () => {
    const {user,logout}=UseFirebase();
    
    return (
       <>
       <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                 <Navbar.Brand className="fw-bolder" href="#home"> VALIENT HOSPITAL   </Navbar.Brand>
                 <Navbar.Toggle />
                   <Navbar.Collapse className="justify-content-end">
                        <NavLink className="head" to="/bannermain">Home</NavLink>
                        <NavLink className="head" to="/about">about us</NavLink>
                        <NavLink className="head" to="/facilities">fecilities</NavLink>
                        <NavLink className="head" to="/service">service</NavLink>
                        <NavLink className="head" to="/offer">offer</NavLink>
                        <NavLink className="head" to="/login">log in</NavLink>
                        
                        <Navbar.Text>
                         
                             <a className="text-decoration-none fw-bold" href="#login">{user.displayName}</a>
                        </Navbar.Text>
                        
                       {user?.email && <button className="btn btn-success mx-2" onClick={logout}>log out</button>}
                       {
                           user.email && <img  src={user.photoURL} className="useriamge" alt="" />
                       }
                       
                                                        
                        
                    </Navbar.Collapse>
                
                
                </Container>
       </Navbar>
       </>
     
       
    )
}

export default Header
