const express = require('express');
const router = express.Router();

const billController = require('../app/controllers/BillController');
// const staffController = require('../app/controllers/StaffController');
// router.post('/insert', staffController.inserts);

router.put('/update/save/:id', billController.update);

router.delete('/delete/save/:id', billController.delete);

router.post('/handle-form-action', billController.handleFormActions);

router.post('/handle-form-restore', billController.handleFormRestore);

router.patch('/:id/restore', billController.restore);

router.delete('/delete/save/:id/force', billController.forceDelete);

router.get('/trash', billController.trashBill);

router.get('/detail/:id', billController.detailBill);

// router.get('/update/:id', staffController.edit);

router.get('/', billController.indexBill);

module.exports = router;
