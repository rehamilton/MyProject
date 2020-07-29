import React from 'react';
// import 'materialize-css';
// import { Icon, CardTitle, Card, Row, Col } from 'react-materialize';

import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'


function BookListItem( { _id, id, title, description, link, author, image, onSave, onDelete }) {

    return( 

        <ListGroup.Item >
            <Card>
                <Row>
                    <Col m={9}>
                        <h2>{title}</h2>
                    </Col>
                    {/* <Col m={3}>
                        {link && <Button as="a" href={link} className = "float-right m-1" target="_blank">View</Button>}
                        {onSave && (
                            <Button 
                            className = "float-right m-1"
                            onClick={() => {onSave({title, description, image, link, author})}}>
                                Save
                            </Button>
                        )}
                        {onDelete && (<Button className = "float-right m-1" onClick={() => onDelete({_id})} 
                            variant="danger">Delete</Button>
                        )}
                    </Col> */}
                </Row>
                <Row>
                    <Col>
                        <p>{author && author.join(", ")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src={image || ""} alt="cover" />
                    </Col>
                    <Col>
                        <p>{description}</p>
                    </Col>
                </Row>
            </Card>
        </ListGroup.Item>


    )

}

export default BookListItem

