const { Router } = require('express');
const { getPurchases, postPurchases, getBookPurchases } = require('../controllers/purchases.js')

   
    

const router = Router();

router.get('/', getPurchases);
// router.put('/:id', updatePurchase);
router.post('/', postPurchases);
router.get('/book', getBookPurchases)


module.exports = router;