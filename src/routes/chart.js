const express = require('express');
const router = express.Router();

const chartController = require('../app/controllers/ChartController');
//const staffController = require('../app/controllers/StaffController');
// router.post('/insert', staffController.inserts);

// router.put('/update/save/:id', staffController.update);

// router.get('/update/:id', staffController.edit);

router.get('/', chartController.index);

module.exports = router;
