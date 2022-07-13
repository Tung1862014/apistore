const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Int32 = require('mongoose-int32').loadType(mongoose);
const mongooseDelete = require('mongoose-delete');

const Bill = new Schema(
    {
        name: { type: String, required: true },
        nameNV: { type: String, required: true },
        nameKH: { type: String, required: true },
        status: { type: String, required: true },
        number: { type: Int32, required: true }, 
    },
    { timestamps: true },
);

Bill.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Bill', Bill);
