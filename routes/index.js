const express = require('express')
const router = express.Router()

const booksRoutes = require('./books')
const myListRoutes = require('./myList')

router.use('/books', booksRoutes)
router.use('/myList', myListRoutes)

module.exports = router;