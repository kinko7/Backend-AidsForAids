const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const events = require('./events.js');
const event = require('./event.js');
const bulkevents = require ('./bulkevents.js');
const google = require('./google.js');
const login = require('./login.js');
const users = require('./users.js');
const mercadopago = require('./mercadopago.js');
const tickets = require('./tickets.js');
const paypal = require('./paypal.js');
const resetPass = require('./resetPassword.js');
const stats = require('./stats.js');
const confirmPass = require('./confirmPassword.js');
const forgotPass = require('./forgotPassword.js');
const checkPass = require('./checkPassword.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/events', events );
router.use('/bulkevents', bulkevents );


router.use('/event', event);
router.use('/users', users);
router.use('/tickets', tickets);
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
