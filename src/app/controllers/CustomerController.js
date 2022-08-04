const Customer = require('../models/Customer');
const fs = require("fs");
const path = require('path');
const uploadDir = require('../../uploads')
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

const db = require('../../models')

class CustomerController {
    updateImage(req, res, next) {
        const formData = req.body;
        console.log('files: '+ JSON.stringify(req.files))
        if(req.files){
            Promise.all([ db.User.findOne({
                attributes: {exclude: ['userName']},
                where: {idND: formData.idND}
            })])
            .then(([result]) =>{
                if(result){
                    const uploadImage  = uploadDir+ result.image;
                    console.log('iamge: '+uploadImage)
                    fs.unlink(uploadImage, (error) => {
                        // if any error
                        if (error) {
                          console.error(error);
                          return;
                        }
                        console.log("Successfully deleted file!");
                      });
            }
            })
            .catch(err => res.json({err: true, promise: false, errorCode: 'loi'})) 
            let paths ='';
            // res.json(req.files)
            const arr =  req.files;
            arr.forEach(function(e, index, arr){
               paths = paths + e.filename +',';
            })
            paths = paths.substring(0, paths.lastIndexOf(','));
            console.log("data: "+ paths)
            formData.image = paths;
         }else{
            console.log('loi image')
         }
         Promise.all( [db.User.update({
            fullName: formData.fullName,
            password: formData.password,
            image: formData.image,
            email: formData.email,
            address: formData.address,
            birthday: formData.birthday,
            phone: formData.phone,
        },{where: {idND: formData.idND}})])
        .then(([user]) =>{
            if(user){
                Promise.all([ db.User.findOne({
                    attributes: {exclude: ['userName']},
                    where: {idND: formData.idND}
                })])
                .then(([result]) =>{
                    if(result){
                        res.json({result})
                    }else{
                        res.json({err: true})
                    } 
                })
                .catch(err => res.json({err: true, promise: false, errorCode: 'loi'})) 
            }
           
        }
        )
        .catch(err => res.json({err: true, promise: false, errorCode: true}))
        
        
    }

    update(req, res, next) {
        const formData = req.body;
         Promise.all( [db.User.update({
            fullName: formData.fullName,
            password: formData.password,
            email: formData.email,
            address: formData.address,
            birthday: formData.birthday,
            phone: formData.phone,
        },{where: {idND: formData.idND}})])
        .then(([user]) =>{
            if(user){
                Promise.all([ db.User.findOne({
                    attributes: {exclude: ['userName']},
                    where: {idND: formData.idND}
                })])
                .then(([result]) =>{
                    if(result){
                        res.json({result})
                    }else{
                        res.json({err: true})
                    } 
                })
                .catch(err => res.json({err: true, promise: false, errorCode: 'loi'})) 
            }
           
        }
        )
        .catch(err => res.json({err: true, promise: false, errorCode: true})) 
    }
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
        Promise.all([ db.User.findOne({
            attributes: {exclude: ['userName']},
            where: {userName: req.body.userName}
        })])
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
