const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Login = require('../controller/login-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

router.post('/login1', Login.login);

router.post('/login2', Login.login2);

router.get('/login1', middleware.validate, (req, res) => {
    res.status(200).json({ message: 'welcome' })
});

router.get('/login2', middleware.validate2, (req, res) => {
    res.status(200).json({ message: 'welcome' })
});

//---------------------------------------------------------------------------------------------------------------------

module.exports = router;