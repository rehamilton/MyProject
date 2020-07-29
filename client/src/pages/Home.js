import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import API from '../utils/API';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Header from '../components/Header'
import Slider from '../components/Slider'
import AOS from "aos";
import "aos/dist/aos.css";
import SearchInput from '../components/SearchInput'


export default function Home() {

    const[books, setBooks] = useState([])
    const [search, setSearch] = useState('');

    const onDelete = API.deleteBook

    function getBooks() {
        axios.get('/api/books')
        .then((results) =>  {
            console.log(results)
            setBooks(results.data)
        })
    }

    // listen to state changes
    useEffect(() => {
        //will only run once when component mounted
        getBooks()
        AOS.init();
    },[])




    return (
        <Container className="mt-4">
            <Header title = {"Top 101 Books"}/>
            <SearchInput />
            <Slider books={books} onDelete ={onDelete}/>
            <Row>
                <Col>
                    <BookList books={books} onDelete ={onDelete}/>
                </Col>
            </Row>
        </Container>
    )

}