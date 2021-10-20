import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Servicefake from './Servicefake';
import './Service.css'



const Service = () => {
    const [isserve,setIsserve]=useState([]);
    useEffect(()=>{
        fetch('./servicefakedata.JSON')
        .then(res=>res.json())
        .then(data=>setIsserve(data));
    },[])
    return (
       
             
       <div className="container informationofservice">
                   
                <Row xs={1} md={3} className="g-4">
                        {
                                isserve.map(ve=><Servicefake
                                key={ve.id}
                                ve={ve}
                                ></Servicefake>)
                        }
                        
                        
                   
                        
                    
                </Row>
            
       </div>
            
               
                
            
      
       

    )
}

export default Service
