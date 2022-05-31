const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const books = require('./books.js');
const book = require('./book.js');
const bulkBooks = require ('./bulkBooks.js');
const google = require('./google.js');
const login = require('./login.js');
const users = require('./users.js');
const mercadopago = require('./mercadopago.js');
const purchases = require('./purchases.js');
const paypal = require('./paypal.js');
const resetPass = require('./resetPassword.js');
const stats = require('./stats.js');
const confirmPass = require('./confirmPassword.js');
const forgotPass = require('./forgotPassword.js');
const checkPass = require('./checkPassword.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/books', books );
router.use('/bulkBooks', bulkBooks );


router.use('/book', book);
router.use('/users', users);
router.use('/purchases', purchases);
router.use('/password', resetPass);
router.use('/stats', stats);
router.use('/confirm', confirmPass);
router.use('/forgot', forgotPass);
router.use('/confirmForgot', confirmPass);
router.use('/checkPass', checkPass);


router.use('/', google);

router.use('/', login);

router.use('/', mercadopago);

router.use('/', paypal);

module.exports = router;
