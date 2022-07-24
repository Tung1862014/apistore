const Staff = require('../models/Staff');
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');
const db = require('../../models')
const dbConn = require('../../config/db');
const Database = require('../../config/Database')
let mydb = new Database(dbConn);

class StaffController {
    //[GET]  /staff
    index(req, res, next) {
        //
        var perPage = 4;
        var page = req.query.page || 1;
        Staff.find({})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,users){
                    if(err) throw err;
                    Staff.countDocuments({}).exec((err,Count)=>{          
                        res.render('staff', {
                            users: multipleMongooseToObject(users),
                            pagination:{page, pageCount:Math.ceil(Count / perPage) },
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
    }
    search(req, res, next) {
        //res.json(req.query.name)
        var perPage = 2;
        var page = req.query.page || 1;
        var nameSearch = req.query.name;
       // res.send(nameSearch)
        Staff.find({name: req.query.name})
                .skip((perPage * page) - perPage)
                .limit(perPage).exec(function(err,users){
                    if(err) throw err;
                    Staff.countDocuments({name: req.query.name}).exec((err,Count)=>{          
                        res.render('staffs/search', {
                            users: multipleMongooseToObject(users),
                            pagination:{page, pageCount:Math.ceil(Count / perPage),nameSearch },
                            nameSearch,
                            usecooki:req.cookies.nameuser,
                        });
            
                    });
            });
    }
    //[Get] /update

    edit(req, res, next) {
        Promise.all([Staff.findById(req.params.id), req.cookies.nameuser])

            .then(([user, usecooki]) => {
                res.render('staffs/update', {
                    user: mongooseToObject(user),
                    usecooki,
                });
            })
            .catch(next);
    }

    //[PUT] /update/save
    update(req, res, next) {
        // Staff.updateOne({ _id: req.params.id }, req.body)
        //     .then(() => res.redirect('/staff'))
        //     .catch(next);
        Promise.all([ mydb.query(`UPDATE nguoidung SET tennd='${req.body.tennd}' where idnd = '${req.params.id}' `)])
        .then(([ results]) =>
                // res.json({numbers,results}),
    
                res.json(
                {
                    tt: 'thanh cong',
                }
                )
            )
        .catch(err => res.send('that bai'))
    }

    //[POST]  /staffs/insert
    inserts(req, res, next) {
        //res.json(req.body.password);
        const formData = req.body;
        //const user = new Staff(formData);
        Promise.all([ db.User.create({
            fullName: formData.fullName,
            userName: formData.fullName,
            password: formData.password,
            email: formData.email,
            address: 'An Giang',
            birthday: null,
            phone: null,
            roles: null,
        })])
        .then(([ results]) =>
            // res.json({numbers,results})
            res.json(
            {
                tt: 'thanh cong',
            }
            )
        )
        .catch(err => res.send('that bai loi'))
        // user.save()
        //     .then(() => res.redirect('/staff'))
        //     .catch((error) => {
        //         res.send('loooooooo');
        //     });
    }
    // [DELETE] /delete/save/:id
    delete(req, res, next) {
        // res.json(req.params.id)
        // Staff.deleteOne({ _id: req.params.id })
        //     .then(() => res.redirect('back'))
        //     .catch(next);
        Promise.all([ mydb.query(`DELETE FROM nguoidung WHERE idnd=${ req.params.id}`)])
        .then(([ results]) =>
                // res.json({numbers,results}),
    
                res.json(
                {
                    tt: 'thanh cong',
                }
                )
            )
            .catch(err => res.send('that bai'))
    }

    //[POST] /search
    login(req, res, next){

        //res.json(req.body.email)
        Promise.all([ mydb.query(`SELECT email,tennd  FROM nguoidung WHERE email='${ req.body.email }'`),mydb.query(`SELECT password  FROM nguoidung WHERE  password = '${ req.body.password }'`)])
        .then(([ resultEmail, resultPassword ]) =>
                 res.json({resultEmail, resultPassword})
    
                // res.json(
                // {
                //     tt: 'thanh cong',
                // }
                //)
            )
            .catch(err => res.send('that bai'))
    }
}

module.exports = new StaffController();
