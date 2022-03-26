const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Merchant = require('../controller/merchant-control');
// const Login = require('../controller/login-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

// router.get('/', Merchant.getMerchants);
router.get('/', middleware.validate, Merchant.getMerchants);

router.get('/:id', Merchant.getMerchant);
// router.get('/:id', middleware.validate, Merchant.getMerchant);

router.post('/', Merchant.addMerchant);
// router.get('/', middleware.validate, Merchant.addMerchant);

router.put('/:id', Merchant.updateMerchant);
// router.get('/:id', middleware.validate, Merchant.updateMerchant);

router.delete('/:id', Merchant.deleteMerchant);
// router.get('/:id', middleware.validate, Merchant.deleteMerchant);

//---------------------------------------------------------------------------------------------------------------------

// router.post('/', Login.login);

// router.get('/', middleware.validate, (req, res) => {
//     res.status(200).json({ message: 'welcome' })
// });

module.exports = router;