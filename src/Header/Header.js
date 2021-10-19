import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
       <>
       <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                 <Navbar.Brand href="#home">valient hospital</Navbar.Brand>
                 <Navbar.Toggle />
                   <Navbar.Collapse className="justify-content-end">
                        <NavLink className="head" to="/bannermain">Home</NavLink>
                        <NavLink className="head" to="/about">about us</NavLink>
                        <NavLink className="head" to="/facilities">fecilities</NavLink>
                        <NavLink className="head" to="/service">service</NavLink>
                        <NavLink className="head" to="/offer">offer</NavLink>
                        <NavLink className="head" to="/google">google sign in</NavLink>
                        <NavLink className="head" to="/signup">sign up</NavLink>
                       
                                                        
                        <Navbar.Text>
                         
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                
                
                </Container>
       </Navbar>
       </>
     
       
    )
}

export default Header
