
const Bill = require('../models/Bill');
const Staff = require('../models/Staff');
const Customer = require('../models/Customer');
const Supplier = require('../models/Supplier');

const dbConn = require('../../config/db');
const Database = require('../../config/Database')
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

let mydb = new Database(dbConn);

const sql_selectAll_bill = 'SELECT tensp FROM sanpham';
const sql_selectCount_bill = 'SELECT count(*) as counts FROM hoadon';
const sql_selectCount_staff = 'SELECT count(*) as counts FROM hoadon';
const sql_selectCount_customer = 'SELECT count(*) as counts FROM hoadon';
const sql_selectCount_supplier = 'SELECT count(*) as counts FROM hoadon';

class BillController {
    //[GET]  /staff
    //index(req, res, next) {
        //res.send('home')
        // var perPage = 2;
        // var page = req.query.page || 1;
        // Bill.find({})
        //         .skip((perPage * page) - perPage)
        //         .limit(perPage).exec(function(err,bills){
        //             if(err) throw err;
        //             Promise.all([  Staff.countDocuments(),Customer.countDocuments(),Supplier.countDocuments(), req.cookies.nameuser])
        //             .then(([countStaff,countCustomer, countSupplier, usecooki]) =>{
        //                 Bill.countDocuments({}).exec((err,Count)=>{          
        //                     res.render('home', {
        //                         bills: multipleMongooseToObject(bills),
        //                         pagination:{page, pageCount:Math.ceil(Count / perPage) },
        //                         countStaff,
        //                         countCustomer,
        //                         countBill:Count,
        //                         countSupplier,
        //                         usecooki,
        //                     });
        //                 });
        //             })
        //     });
   // }

    //[GET]  /
    index(req, res, next) {
       // res.json(req.query.q)
      
        Promise.all([ mydb.query(`select * FROM sanpham WHERE tensp like '%${req.query.q}%' limit 0,5`), url])
            .then(([results]) =>
                // res.json({numbers,results}),

                res.json(
                    results
                )
            )
    }
    //     index(req, res, next) {

    //         dbConn.query('SELECT * FROM hoadon',function (error, results, fields) {
    //             if (error) res.send ('error');
    //             else res.json(results);
    //         });

    // }
    // //[GET] /bill
//     indexBill(req, res, next) {
//         var perPage = 4;
//         var page = req.query.page || 1;
//         Bill.find({})
//                 .skip((perPage * page) - perPage)
//                 .limit(perPage).exec(function(err,bills){
//                     if(err) throw err;
//                     Promise.all([ Bill.countDocumentsDeleted(), req.cookies.nameuser])
//                     .then(([deleteBill, usecooki]) =>{
//                         Bill.countDocuments({}).exec((err,Count)=>{          
//                             res.render('bill', {
//                                 bills: multipleMongooseToObject(bills),
//                                 pagination:{page, pageCount:Math.ceil(Count / perPage) },
//                                 deleteBill,
//                                 usecooki,
//                             });
//                         });
//                     })
//             });
//         // Promise.all([
//         //     Bill.find({}),
//         //     Bill.countDocumentsDeleted(),
//         //     req.cookies.nameuser,
//         // ])
//         //     .then(([bills, deleteBill, usecooki]) =>
//         //         res.render('bill', {
//         //             deleteBill,
//         //             bills: multipleMongooseToObject(bills),
//         //             usecooki,
//         //         }),
//         //     )
//         //     .catch(next);
//     }

//     // // // //[Get] /update
//     // edit(req, res, next) {
//     //     // res.send(req.params.slug);
//     //     Staff.findById(req.params.id)
//     //         .then((user) => {
//     //             res.render('staffs/update', {
//     //                 user: mongooseToObject(user),
//     //             });
//     //         })
//     //         .catch(next);
//     // }
//     // //[PUT] /update/save
//     update(req, res, next) {
//         //res.send(req.body);

//         Bill.updateOne({ _id: req.params.id }, req.body)
//             .then(() => res.redirect('/bill'))
//             .catch(next);
//     }

//     // // [DELETE] /delete/save/:id
//     delete(req, res, next) {
//         //res.send(req.params.id)
//         Bill.delete({ _id: req.params.id })
//             .then(() => res.redirect('back'))
//             .catch(next);
//     }

//     // // [DELETE] /delete/save/:id/force
//     forceDelete(req, res, next) {
//         Bill.deleteOne({ _id: req.params.id })
//             .then(() => res.redirect('back'))
//             .catch(next);
//     }
//     //[GET] /trash
//     trashBill(req, res, next) {
//         Promise.all([Bill.findDeleted(), req.cookies.nameuser])
//             // res.send(deletedAt)
//             .then(([bills, usecooki]) => {
//                 res.render('bills/trash', {
//                     bills: multipleMongooseToObject(bills),
//                     usecooki,
//                 });
//             })
//             .catch(next);
//     }

//     // //[PATCH] /supplier/:id/restore
//     restore(req, res, next) {
//         Bill.restore({ _id: req.params.id })
//             .then(() => res.redirect('back'))
//             .catch(next);
//     }

//     // ////[POST] /handle-form-action
//     handleFormActions(req, res, next) {
//         // res.send(req.body.statusIds);
//         switch (req.body.action) {
//             case 'delete':
//                 Bill.delete({ _id: { $in: req.body.billIds } })
//                     .then(() => res.redirect('back'))
//                     .catch(next);
//                 break;
//             case 'updates':
//                 // res.json({$on: req.body.status})
//                 Bill.updateOne(
//                     { _id: { $in: req.body.billIds } },
//                     { $status: req.body.status },
//                 )
//                     .then(() => res.redirect('back'))
//                     .catch(next);
//                 break;
//             default:
//                 res.json({ message: 'Action is invalid' });
//         }
//     }

//     // ////[POST] /handle-form-restore
//     handleFormRestore(req, res, next) {
//         switch (req.body.action) {
//             case 'restore':
//                 Bill.restore({ _id: { $in: req.body.billIds } })
//                     .then(() => res.redirect('back'))
//                     .catch(next);
//                 break;
//             default:
//                 res.json({ message: 'Restore is invalid' });
//         }
//     }

//     // [GET] /detail/:id
//     detailBill(req, res, next) {
//         Bill.findById(req.params.id)
//             .then((bill) => {
//                 // res.json(bill)
//                 res.render('bills/detail', {
//                     bill: mongooseToObject(bill),
//                 });
//             })
//             .catch(next);
//     }
 }

module.exports = new BillController();
