import React from 'react'
import { Link } from 'react-router-dom'
import funny from './../image/404 page.jpg'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="fun">
           <img src={funny} alt="" />
            <br />
            <br />
            <br />
            <h1>PAGE NOT FOUND 404</h1>
            <br />
            <br />
            <br />
           

           
            <Link to="/"></Link>
        </div>
    )
}

export default Notfound
