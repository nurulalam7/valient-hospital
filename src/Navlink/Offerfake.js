import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Offerfake = (props) => {
    const {img,name}=props.of;
    return (
        <div>
             <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                       
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    )
}

export default Offerfake
