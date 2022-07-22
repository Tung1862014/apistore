const Customer = require('../models/Customer');
require('dotenv').config();
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

const CLIENT_URL = process.env.URL_REACT;

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
            res.redirect(CLIENT_URL);
          
    }

}

module.exports = new CustomerController();
