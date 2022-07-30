const express = require('express');
const router = express.Router();
const upload = require('../middleware/customers');

const customerController = require('../app/controllers/CustomerController');

// router.put('/update/save/:id', customerController.update);

// router.get('/search', customerController.search);

router.post('/signup',upload.array('image',12), customerController.insert);

router.post('/login', customerController.login);

module.exports = router;
