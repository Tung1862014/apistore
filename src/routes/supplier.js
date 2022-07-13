const express = require('express');
const router = express.Router();

const supplierController = require('../app/controllers/SupplierController');
router.post('/insert', supplierController.inserts);

router.put('/update/save/:id', supplierController.update);

//router.patch('/:id/restore', supplierController.restore);

router.delete('/delete/save/:id', supplierController.delete);

//router.delete('/delete/save/:id/force', supplierController.forceDelete);

router.get('/update/:id', supplierController.edit);

//router.get('/trash', supplierController.trashSupplier);

router.get('/', supplierController.index);

module.exports = router;
