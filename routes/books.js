const express = require('express');
const router = express.Router();

const { book } = require('../controllers')

//GET api/books
router.get('/', book.list)

//POSt api/books
router.post('/', book.add)

//DELETE api/books/_id
router.delete('/:_id', book.delete)

module.exports = router;