const Customer = require('../models/Customer');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class CustomerController {
    //[GET]  /customer
    index(req, res, next) {
        //
        var perPage = 5;
        var page = req.query.page || 1;
        Customer.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,customers){
                    if(err) throw err;
                    Customer.countDocuments({}).exec((err,Count)=>{          
                        res.render('customer', {
                            customers: multipleMongooseToObject(customers),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
        // Promise.all([Customer.find({}), req.cookies.nameuser])
        //     .then(([customers, usecooki]) => {
        //         res.render('customer', {
        //             customers: multipleMongooseToObject(customers),
        //             usecooki,
        //         });
        //     })
        //     .catch(next);
    }
    search(req, res, next) {
        //res.json(req.query.name)
        var perPage = 5;
        var page = req.query.page || 1;
        Customer.find({name: req.query.name})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,customers){
                    if(err) throw err;
                    Customer.countDocuments({name: req.query.name}).exec((err,Count)=>{          
                        res.render('customer', {
                            customers: multipleMongooseToObject(customers),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
    }
    //[PUT] /update/save
    update(req, res, next) {
        // res.json(req.body)
        // res.json(req.params.id);
        Customer.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/customer'))
            .catch(next);
    }
}

module.exports = new CustomerController();
