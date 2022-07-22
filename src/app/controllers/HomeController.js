
const Bill = require('../models/Bill');
const Staff = require('../models/Staff');
const Customer = require('../models/Customer');
const Supplier = require('../models/Supplier');

const db = require('../../models')

// const dbConn = require('../../config/db');
// const Database = require('../../config/Database')
// const {
//     multipleMongooseToObject,
//     mongooseToObject,
// } = require('../../util/mongoose');

// let mydb = new Database(db);

class  HomeController {
    
    //[GET]  /
    index  (req, res, next) {
       // res.json(req.query.q)

     Promise.all([db.BillDetail.findAll()])
            .then(([results]) =>
                // res.json({numbers,results})
                res.json(
                    results
                )
            )
    
    }
 }

module.exports = new HomeController();
