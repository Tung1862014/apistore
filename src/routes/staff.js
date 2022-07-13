const express = require('express');
const router = express.Router();

const staffController = require('../app/controllers/StaffController');
router.post('/insert', staffController.inserts);

router.put('/update/save/:id', staffController.update);

router.delete('/delete/save/:id', staffController.delete);

router.post('/login', staffController.login);

// router.get('/update/:id', staffController.edit);

// router.get('/search', staffController.search);

// router.get('/', staffController.index);

module.exports = router;
