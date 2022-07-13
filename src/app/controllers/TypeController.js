const Type = require('../models/TypeProduct');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class StaffController {
    //[GET]  /staff
    index(req, res, next) {
        //
        var perPage = 4;
        var page = req.query.page || 1;
        Type.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,types){
                    if(err) throw err;
                    Type.countDocuments({}).exec((err,Count)=>{          
                        res.render('type', {
                            types: multipleMongooseToObject(types),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
        // Promise.all([Staff.find({}), req.cookies.nameuser])

        //     .then(([users, usecooki]) => {
        //         res.render('staff', {
        //             users: multipleMongooseToObject(users),
        //             usecooki,
        //         });
        //     })
        //     .catch(next);
    }

    //[Get] /update

    edit(req, res, next) {
        var perPage = 2;
        var page = req.query.page || 1;
        Type.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,types){
                    if(err) throw err;
                    Promise.all([ Type.findById(req.params.id), req.cookies.nameuser])
                    .then(([typeUpdate, usecooki]) =>{
                        Type.countDocuments({}).exec((err,Count)=>{          
                            res.render('type', {
                                types: multipleMongooseToObject(types),
                                pagination:{page, pageCount:Math.ceil(Count / perPage) },
                                typeUpdate: mongooseToObject(typeUpdate),
                                usecooki:req.cookies.nameuser,
                            });
                
                        });
                    }) 
                    .catch(next);
            });
    }

    //[PUT] /update/save
    update(req, res, next) {
        Type.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/type'))
            .catch(next);
    }

    //[POST]  /staffs/insert
    inserts(req, res, next) {
        // res.send(req.body);
        const formData = req.body;
        const type_products = new Type(formData);
        Type.countDocuments()
            .then((count) =>{
                type_products.type = 'ML0'+(count+1) ;
                //res.json(type_products);
                type_products.save()
                    .then(() => res.redirect('/type'))
                    .catch((error) => {
                        res.send('loooooooo');
                });
            })
            .catch((error) => {
                res.send('loi');
            })
        
    }
    // [DELETE] /delete/save/:id
    delete(req, res, next) {
        Type.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new StaffController();
