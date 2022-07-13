const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

router.put('/update/save/:id', customerController.update);

router.get('/search', customerController.search);

router.get('/', customerController.index);

module.exports = router;
