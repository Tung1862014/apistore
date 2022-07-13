const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
//const staffController = require('../app/controllers/StaffController');
// router.post('/insert', staffController.inserts);

// router.put('/update/save/:id', staffController.update);

// router.get('/update/:id', staffController.edit);

router.get('/', homeController.index);

module.exports = router;
