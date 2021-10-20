import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Serveinfo from './Serveinfo';
import './Serve.css'

const Serve = () => {
    const [serve,setServe]=useState([]);
    useEffect(()=>{
        fetch('./servefake.JSON')
        .then(res=>res.json())
        .then(data=>setServe(data));
    },[])

    return (
        <div className="container headline">
            <h3>OUR SERVICES</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    serve.map(ser=><Serveinfo
                    key={ser.id}
                    ser={ser}
                    ></Serveinfo>)
                }

            </Row>
           
        </div>

    )

       
    
}

export default Serve
