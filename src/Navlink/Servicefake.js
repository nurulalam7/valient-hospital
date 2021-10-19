import React from 'react'
import { Card, Col } from 'react-bootstrap';

const Servicefake = (props) => {
    const {img,description,name}=props.ve;
    return (
        <div>
            
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                           <button className="bg-danger px-4 py-1 rounded corner ">details</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    )
}

export default Servicefake;
