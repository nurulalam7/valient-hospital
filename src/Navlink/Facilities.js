import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Facilitiesfake from './Facilitiesfake';
import './Facilities.css'


const Facilities = () => {
    const [isfaci,setisfaci]=useState([]);
    useEffect(()=>{
        fetch('./facilitiesfakedata.JSON')
        .then(res=>res.json())
        .then(data=>setisfaci(data));
    },[])
   
    return (
        <div className="facili">
            <h2>our facilities</h2>
               <Row xs={1} md={3} className="g-4">
                        {
                                isfaci.map(facilit=> <Facilitiesfake
                                key={facilit.id}
                                facilit={facilit}
                                ></Facilitiesfake>)
                        }
                        
                        
                   
                        
                    
                </Row>
               
              
        </div>
    )
}

export default Facilities
