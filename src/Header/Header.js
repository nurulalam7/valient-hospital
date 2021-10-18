import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'



const Header = () => {
    return (
       <>
       <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                 <Navbar.Brand href="#home">valient hospital</Navbar.Brand>
                 <Navbar.Toggle />
                   <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">about us </Nav.Link>
                        <Nav.Link href="#medical">medical team</Nav.Link>
                        <Nav.Link href="#facilities">fecilities</Nav.Link>
                        
                        <Nav.Link href="#packages">packages</Nav.Link>
                                                        
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
