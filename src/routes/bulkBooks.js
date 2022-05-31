const { Router } = require('express');
const { bulkBooks } = require('../controllers/bulkBooks.js')


const router = Router();

router.post('/', bulkBooks);



module.exports = router;
