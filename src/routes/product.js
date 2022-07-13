const express = require('express');
const router = express.Router();
// const multer = require('multer');
const upload = require('../middleware/upload');
// var upload = multer({ dest:'../images/' });

const productController = require('../app/controllers/ProductController');

router.post('/insert',upload.array('image',12), productController.inserts);

// router.put('/update/save/:id',upload.array('image',12), productController.update);

// router.delete('/delete/save/:id', productController.delete);

// router.get('/update/:id', productController.edit);

// router.get('/', productController.index);

module.exports = router;
