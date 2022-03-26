const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Login = require('../controller/login-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

router.post('/', Login.login);

router.get('/', middleware.validate, (req, res) => {
    res.status(200).json({ message: 'welcome' })
});

module.exports = router;