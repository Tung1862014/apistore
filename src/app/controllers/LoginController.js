const Customer = require('../models/Customer');
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

const CLIENT_URL = "http://localhost:3000";

class CustomerController {
    //[GET]  /staff
    index(req, res, next) {
        //
        res.render('loginForm/login');
        // Staff.find({})
        //     .then((users) => {
        //         res.render('staff', {
        //             users: multipleMongooseToObject(users),
        //         });
        //     })
        //     .catch(next);
    }

    // //[Get] /update
    // edit(req, res, next) {
    //     // res.send(req.params.slug);
    //     Staff.findById(req.params.id)
    //         .then((user) => {
    //             res.render('staffs/update', {
    //                 user: mongooseToObject(user),
    //             });
    //         })
    //         .catch(next);

    // }
    // //[PUT] /update/save
    // update(req, res, next) {
    //     // res.json(req.body)

    //     Staff.updateOne({_id: req.params.id}, req.body)
    //         .then(() => res.redirect('/staff'))
    //         .catch(next);

    // }

    // //[POST]  /staffs/insert
    // test(req, res, next) {
    //     //
    //     // Customer.findOne({nameuser: req.body.name},function (err, docs) {
    //     //     if (err){
    //     //         console.log(err)
    //     //     }
    //     //     else{
    //     //         res.json(docs);
    //     // }})
    //     Customer.findOne({
    //         nameuser: req.body.name,
    //         password: req.body.password,
    //     })
    //         .then((customers) => {
    //             // res.json(customers)
    //             if (customers != null) {
    //                 // res.render('home', {
    //                 //     customers: mongooseToObject(customers),
    //                 // });
    //                 res.cookie('nameuser', mongooseToObject(customers), {
    //                     expires: new Date(Date.now() + 900000),
    //                 });
    //                 res.redirect('/');
    //             } else {
    //                 alert('Tài khoản không tồn tại');
    //             }
    //         })
    //         .catch((error) => {
    //             res.send('Tài khoản không tồn tại');
    //         });

    //     // const formData = req.body;
    //     // const user = new Staff(formData);
    //     // user.save()
    //     //     .then(() => res.redirect('/staff'))
    //     //     .catch((error) => {});
    // }
    logout(req, res, next) {
        try {
            res.clearCookie('nameuser');
            res.redirect('/login');
        } catch (error) {
            res.send('looi logout');
        }
    }

    loginSuccess(req, res, next) {
            if (req.user) {
              res.status(200).json({
                success: true,
                message: "successfull",
                user: req.user,
                //   cookies: req.cookies
              });
            }
    }
    loginFailed(req, res, next) {
        
            res.status(401).json({
              success: false,
              message: "failure",
            });
         
    }

    logoutGoogle(req, res, next) {
       
            req.logout();
            res.redirect(CLIENT_URL);
          
    }

}

module.exports = new CustomerController();
