import React from 'react'
import { Card, Col } from 'react-bootstrap';

const Serveinfo = (props) => {
    const {img,description,name}=props.ser;
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
                           <button className="bg-danger px-4 py-1 rounded corner ">more</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Serveinfo
