import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import BookList from '../components/BookList';
import API from '../utils/API';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header'
import axios from 'axios'
import AOS from "aos";


export default function Search() {

    const [search, setSearch] = useState('');
    const[books, setBooks] = useState([])

    const onSave = API.saveBook

    const onSearch = async (evt) => {
        evt.preventDefault();

        const result = await API.searchBooks(search);
        console.log(result);
        // console.log(result.items[0].volumeInfo.imageLinks.thumbnail);
        const books = result.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            author: book.volumeInfo.authors,
            link: book.volumeInfo.infoLink,
            image: book.volumeInfo.imageLinks.thumbnail,
            onSave,
        }))
        setBooks(books)
    }



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
        <>
            <Header title = {"Something else"} />
            <Container className="mt-4">
                <Row>
                    <Col>
                        <SearchInput 
                        search={search} 
                        onSearchChange={setSearch} 
                        onSearch={onSearch}
                        />
                    </Col>
                </Row>
            </Container>
            
            
     
                   
            <BookList books={books}/>
         
 


        </>
    )

}