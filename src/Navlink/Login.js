import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

import UseFirebase from './../Hooks/Usefirebase';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    
    
    // const {signinusinggoogle}=UseFirebase();
    const {signinusinggoogle, handleemail,handlepasword, signinwithemail}=useAuth();
   

    
    return (
        <div className="logininfo">
            <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleemail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control onChange={handlepasword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={signinwithemail} variant="primary" type="submit">
                        register
                    </Button>
            </Form>


            <br />
            <br />
            <br />
            <h2>please log in</h2>
            <button onClick={signinusinggoogle}>google sign in</button>
             
            <br />
            <Link to='/register'>new user?</Link>
            <br />
            <br />
        </div>
        
    )
}

export default Login
