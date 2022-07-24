const Customer = require('../models/Customer');
require('dotenv').config();
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');


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
            res.redirect(process.env.URL_REACT||'http://localhost:3000/');
          
    }

}

module.exports = new CustomerController();
