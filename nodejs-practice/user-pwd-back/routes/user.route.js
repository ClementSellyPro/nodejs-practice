const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');

router.get('/', userController.getUsers)
router.post('/', userController.createUser);
router.delete('/', userController.deleteUser);

module.exports = router;