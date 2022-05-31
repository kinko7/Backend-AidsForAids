const { Router } = require('express');
const { getUsers, getUserById, updateUser } = require('../controllers/users.js')


const router = Router();


router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);



module.exports = router;