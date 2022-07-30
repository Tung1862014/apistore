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
        console.log(formData.userName);
        let testUserName = '';
         Promise.all([ db.User.findOne({where: {userName: formData.userName}})])
         .then(([user]) => {
            console.log(user);
            if(user !== null){
                res.json(
                    {
                        userName: false,
                    }
                )
            }else {
                if(req.files){
                    let paths ='';
                    // res.json(req.files)
                    const arr =  req.files;
                    arr.forEach(function(e, index, arr){
                       paths = paths +`${process.env.URL_IMAGE_CUSTOMER}`+ e.filename +',';
                    })
                    paths = paths.substring(0, paths.lastIndexOf(','));
                    formData.image = paths;
                 }else{
                    console.log('loi image')
                 }
                Promise.all([db.User.create({
                    fullName: formData.fullName,
                    userName: formData.userName,
                    password: formData.password,
                    image: formData.image,
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
         })
         .catch((err) => {
             res.send('Loi khong tim user')
         })
        
         
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
