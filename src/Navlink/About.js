import React, { useEffect, useState } from 'react'
import Aboutfake from './Aboutfake';
import { Row } from 'react-bootstrap';
import './about.css'

const About = () => {
    const [isabout,setisabout]=useState([]);
    useEffect(()=>{
        fetch('./aboufakedata.JSON')
        .then(res=>res.json())
        .then(data=>setisabout(data));
    },[])
    return (
        <div className="container aboutinfo">
            <h1>about us</h1>
               <Row xs={1} md={3} className="g-4">
                        {
                                isabout.map(abou=><Aboutfake
                                key={abou.id}
                                abou={abou}
                                ></Aboutfake>)
                        }
                        
                        
                   
                        
                    
                </Row>
               
            
        </div>
    )
}

export default About
