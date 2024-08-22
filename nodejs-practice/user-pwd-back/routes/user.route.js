const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router = express.Router();

const userController = require('../controller/user.controller');

router.get('/', auth, userController.getUsers)
router.post('/', multer, auth, userController.createUser);
router.post('/login', auth, userController.login);
router.delete('/', auth, userController.deleteUser);

module.exports = router;