const Product = require('../models/Product');
const fs = require('fs');


// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

const dbConn = require('../../config/db');
const Database = require('../../config/Database');

let mydb = new Database(dbConn);

class ProductController {
    //[GET]  /product
    // index(req, res, next) {
    //     //
    //     //res.send(req.query.page)
    //     // // res.send('Product  !!!!');
    //     var perPage = 5;
    //     var page = req.query.page || 1;
    //     Product.find({})
    //             .skip((perPage * page) - perPage)
    //             .limit(perPage).exec(function(err,products){
    //                 if(err) throw err;
    //                 Product.countDocuments({}).exec((err,Count)=>{          
    //                     res.render('product', {
    //                         products: multipleMongooseToObject(products),
    //                         pagination:{page, pageCount:Math.ceil(Count / perPage) },
    //                         usecooki:req.cookies.nameuser,
    //                     });
            
    //                 });
    //         });
    //     // Promise.all([Product.find({}), req.cookies.nameuser])
    //     //     .then(([products, usecooki]) => {
    //     //         // res.json(products)
    //     //         res.render('product', {
    //     //             products: multipleMongooseToObject(products),
    //     //             usecooki,
    //     //         });
    //     //     })
    //     //     .catch(next);
    // }

    index(req, res, next){
        Promise.all([ mydb.query(`SELECT * FROM sanpham`)])
        .then(([results]) =>
            // res.json({numbers,results}),

            res.json(
                results
            )
        )
    }

    detail(req, res, next){
        //res.json(req.query.q)
        Promise.all([ mydb.query(`SELECT * FROM sanpham where idsp=${req.query.q}`)])
        .then(([results]) =>
            // res.json({numbers,results}),

            res.json(
                results
            )
        )
    }

    // //[Get] /update
    edit(req, res, next) {
        // res.send(req.params.slug);
        Promise.all([Product.findById(req.params.id), req.cookies.nameuser])
            .then(([product, usecooki]) => {
                res.render('products/update', {
                    product: mongooseToObject(product),
                    usecooki,
                });
            })
            .catch(next);
    }
    // //[PUT] /update/save
    update(req, res, next) {
        let arrImg;
        let fileDelete = '';
        const product = req.body;
        //res.json(req.files)
        if(req.files != '') {
            Product.findById(req.params.id)
                .then((products) => {
                    arrImg = (products.image.split(",")); //replace(/"/gi, '')
                        arrImg.forEach(function(e, index, arr){
                            fileDelete = "D:\\nodejs\\store\\src\\uploads\\images\\" + e.substring(29);
                            fs.unlink(fileDelete, (err) => {
                                if (err) {
                                    res.send('looiii');
                                } 
                            });
                        }) 
                })
            let paths ='';
            // res.json(req.files)
            const arr =  req.files;
            arr.forEach(function(e, index, arr){
               paths = paths +'http://localhost:3001/images/'+ e.filename +',';
            })
            paths = paths.substring(0, paths.lastIndexOf(','));
            product.image = paths;
        }else{
            let paths ='';
            Product.findById(req.params.id)
            .then((products) => {
                arrImg = (products.image.split(",")); //replace(/"/gi, '')
                    arrImg.forEach(function(e, index, arr){
                        paths = paths + e +',';
                    }) 
                    paths = paths.substring(0, paths.lastIndexOf(','));
                    product.image = paths;
            })
        }
        Product.updateOne({ _id: req.params.id }, product)
                .then(() => {
                    res.redirect('/product')
                })
                .catch(next);
    }

    //[POST]  /staffs/insert
    inserts(req, res, next) {
    //    var arrayToString = JSON.stringify(Object.assign({}, req.files));  // convert array to string
    //     var stringToJsonObject = JSON.parse(arrayToString);
        //
        //res.send(stringToJsonObject[0].path);
        // res.send('insert sss')

       
        // const formData = req.body;
        // const product = new Product(formData);
          res.json(req.files);
        // if(req.files){
        //     let paths ='';
        //     // res.json(req.files)
        //     const arr =  req.files;
        //     arr.forEach(function(e, index, arr){
        //        paths = paths +'http://localhost:3001/images/'+ e.filename +',';
        //     })
        //     paths = paths.substring(0, paths.lastIndexOf(','));
        //     product.image = paths;
        // }
        // product
        //     .save()
        //     .then(() => res.redirect('/product'))
        //     .catch((error) => {});
    }

    // [DELETE] /delete/save/:id
    delete(req, res, next) {
        // res.json(req.params.id)
        // Product.deleteOne({ _id: req.params.id })
        //     .then(() => res.redirect('/product'))
        //     .catch(next);
        let arrImg;
        let fileDelete = '';
        // Product.findById(req.params.id)

         Promise.all([Product.findById(req.params.id), Product.deleteOne({ _id: req.params.id })])
       
            .then(([product, deleteID]) => {
                 arrImg = (product.image.split(",")); //replace(/"/gi, '')
                 arrImg.forEach(function(e, index, arr){
                    fileDelete = "D:\\nodejs\\store\\src\\uploads\\images\\" + e.substring(29);
                    fs.unlink(fileDelete, (err) => {
                        if (err) {
                            res.send('looiii');
                        }
                        
                    });
                 })
                 res.redirect('/product');
            })
            .catch(next);
    }
}

module.exports = new ProductController();
