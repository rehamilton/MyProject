import React from 'react';

import { Card, Form, Button } from 'react-bootstrap';



function SearchInput({ search, onSearchChange, onSearch }) {

    return (

        <Card>
            <Form onSubmit={onSearch}>
                <Form.Group controlId="book-title" className= "m-2">
                    <p className = "font-weight-bold">Book Search</p>
                    <Form.Control 
                        value={search} 
                        onChange={evt => onSearchChange(evt.target.value)} 
                        placeholder="Enter book title" 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className = "float-right m-2">
                    Search
                </Button>
            </Form>
        </Card>
    )

}

export default SearchInput