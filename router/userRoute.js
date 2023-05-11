const express = require('express');

const {addUser,findUserbyID} = require('../controller/userController')
const router = express.Router();

router.post('/users',addUser);

router.get('/users/:id',findUserbyID)

module.exports = router;