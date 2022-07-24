const Customer = require('../models/Customer');
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

const db = require('../../models')

class CustomerController {
    //POST SIGN UP
    insert(req, res, next) {
        const formData = req.body;
        Promise.all([db.User.create({
            fullName: formData.fullName,
            userName: formData.userName,
            password: formData.password,
            email: formData.email,
            address: formData.address,
            birthday: formData.birthday,
            phone: formData.phone,
            roles: 1,
        })])

        .then(([results]) => {
            res.json(
                {
                    tt: 'thanh cong',
                }
            )
        })
        .catch(err => res.send('đăng ký thất bại'));
    }
    //POST LOGIN
    login(req, res, next){
        Promise.all([ db.User.findOne({where: {userName: req.body.userName}})])
        .then(([ result]) =>{
            if(result){
                res.json({result})
            }else{
                res.json({tt:'Tài khoản không tồn tại'})
            } 
        }
        )
            .catch(err => res.json({tt:'Tài khoản không tồn tại sss'}))
    }
}

module.exports = new CustomerController();
