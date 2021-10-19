import React, { useEffect, useState } from 'react'
import './Offer.css'
import { Row } from 'react-bootstrap';
import Offerfake from './Offerfake';

const Offer = () => {
    const [isoffer,setisoffer]=useState([]);
    useEffect(()=>{
        fetch('./offerfake.JSON')
        .then(res=>res.json())
        .then(data=>setisoffer(data));
    },[])
    return (
        <div className="ouroffer">
            <h1>our regular offer</h1>
                <Row xs={1} md={3} className="g-4">
                        {
                                isoffer.map(of=><Offerfake
                                key={of.id}
                                of={of}
                                ></Offerfake>)
                        }
                        
                        
                   
                        
                    
                </Row>
           
        </div>
    )
}

export default Offer
