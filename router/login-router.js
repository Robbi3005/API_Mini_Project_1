const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Login = require('../controller/login-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

// router.post('/', Login.login);

router.get('/', middleware.validate, (req, res) => {
    res.status(200).json({ message: 'welcome' })
});

//---------------------------------------------------------------------------------------------------------------------

// JWT 2

// router.post('/2', Login.login2);

// router.get('/2', middleware.validate2, (req, res) => {
//     res.status(200).json({ message: 'welcome' })
// });

//---------------------------------------------------------------------------------------------------------------------

module.exports = router;