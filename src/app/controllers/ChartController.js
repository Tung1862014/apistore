
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

class ChartController {
    
    //[GET]  /
    index(req, res, next) {
        // res.json(req.query)
      
        Promise.all([ mydb.query(`SELECT id, ngaygiaohang, donhang, doanhthu, soluongban FROM thongke WHERE ngaygiaohang BETWEEN DATE_SUB(DATE('${req.query.ngdi}'),INTERVAL 2 DAY) AND DATE_ADD(DATE('${req.query.ngde}'),INTERVAL 2 DAY)`)])
            .then(([results]) =>
                // res.json({numbers,results}),

                res.json(
                    results
                )
            )
    }

 }

module.exports = new ChartController();
