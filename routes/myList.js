const express = require('express');
const router = express.Router();

const { myList } = require('../controllers')

//GET api/myList
router.get('/', myList.list)

//POSt api/myList
router.post('/', myList.add)

//DELETE api/myList/_id
router.delete('/:_id', myList.delete)

module.exports = router;