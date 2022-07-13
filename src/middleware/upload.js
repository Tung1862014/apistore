const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads/images/'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,Date.now() +'-'+ file.originalname )
    }
  })
  
const upload = multer({ storage: storage })

// const storate = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,__dirname + './images')
//     },
//     filename: function(req, file, cb) {
//         let ext = file.originalname
//         cb(null,file.originalname+ '-' +Date.now())
//     },
//     dest:'../images/'
// });

// const upload = multer({
//     storate,
//     // fileFilter: function(req, file, callback) {
//     //     if(
//     //         file.mimetype == "image/png" ||
//     //         file.mimetype == "image/jpeg"
//     //     ){
//     //         callback(null,true)
//     //     }else{
//     //         console.log('only jpg & png ')
//     //     }
//     // },
//     // limit: {
//     //     fileSize: 1024 * 1024 * 2
//     // }
// })

module.exports = upload;