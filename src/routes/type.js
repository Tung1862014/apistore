const express = require('express');
const router = express.Router();

const typeController = require('../app/controllers/TypeController');
router.post('/insert', typeController.inserts);

router.put('/update/save/:id', typeController.update);

router.delete('/delete/save/:id', typeController.delete);

router.get('/update/:id', typeController.edit);

router.get('/', typeController.index);

module.exports = router;
