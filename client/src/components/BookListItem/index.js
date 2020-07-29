import React from 'react';
// import 'materialize-css';
// import { Icon, CardTitle, Card, Row, Col } from 'react-materialize';

import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'


function BookListItem( { _id, id, title, description, link, author, image, position, onSave, onDelete }) {

    

    return( 

        <div className= "col s4 m4 l4"> 
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <div className="position-badge">{position}</div>
                    <img className="activator bookImage" src={image} alt= {title}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className = "card-action">
                    <a href={link} target="_blank">More Info</a>
                    {onSave && (
                        <a 
                        className="waves-effect waves-light btn" 
                        onClick={() => {onSave({title, description, image, link, author})}}>
                            Save
                        </a>
                    )}
                    {onDelete && (<a 
                        className="waves-effect waves-light btn"
                        onClick={() => onDelete({_id})} 
                        variant="danger">Remove</a>
                    )}
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4 flow-text"><i className="material-icons right">close</i>{title}</span>
                <p>{description}</p>
                </div>
            </div>
        </div>

    )

}

export default BookListItem

