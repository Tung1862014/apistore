const Supplier = require('../models/Supplier');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class SupplierController {
    //[GET]  /staff
    index(req, res, next) {
        //
        var perPage = 4;
        var page = req.query.page || 1;
        Supplier.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,suppliers){
                    if(err) throw err;
                    Supplier.countDocuments({}).exec((err,Count)=>{          
                        res.render('supplier', {
                            suppliers: multipleMongooseToObject(suppliers),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
    }

    // //[Get] /update
    edit(req, res, next) {
        //res.send(req.params.id);
        var perPage = 2;
        var page = req.query.page || 1;
        Supplier.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,suppliers){
                    if(err) throw err;
                    Promise.all([Supplier.findById(req.params.id), req.cookies.nameuser])
                    .then(([supplierUpdate, usecooki]) => {
                    Supplier.countDocuments({}).exec((err,Count)=>{          
                        res.render('supplier', {
                            supplierUpdate: mongooseToObject(supplierUpdate),
                            suppliers: multipleMongooseToObject(suppliers),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki,
                        });
            
                    });
                })
                .catch((err) => {
                    res.send('loi');
                })
            });
    }
    // //[PUT] /update/save
    update(req, res, next) {
        // res.json(req.body)

        Supplier.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/supplier'))
            .catch(next);
    }

    //[POST]  /staffs/insert
    inserts(req, res, next) {
        //
        // res.send('insert sss')
        const formData = req.body;
        const supplier = new Supplier(formData);
        supplier
            .save()
            .then(() => res.redirect('/supplier'))
            .catch((error) => {});
    }

    // [DELETE] /delete/save/:id
    delete(req, res, next) {
        //res.send(req.params.id)
        Supplier.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new SupplierController();
