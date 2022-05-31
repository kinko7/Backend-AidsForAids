const { Router } = require('express');
const { AddBook, updateAvailable } = require('../controllers/Book.js')


const router = Router();

router.post('/', AddBook);
// router.put('/:id', updateBook);
// router.delete('/:id', deleteBook)
router.put('/', updateAvailable)



module.exports = router;
