const { Router } = require('express');
const { getAllBooks } = require('../controllers/books.js')


const router = Router();

router.get('/', getAllBooks);

// router.get('/:id', getBookById);


module.exports = router;
