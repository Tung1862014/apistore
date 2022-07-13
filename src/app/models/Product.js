const mongoose = require('mongoose');
const Int32 = require('mongoose-int32').loadType(mongoose);
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, required: true },
        //image: { type: Buffer , required: true },
        number: { type: Int32, required: true },
        money: { type: Int32, required: true },
        promotion: { type: Int32, required: true },
        image: { type: String, required: true},
        describe:{ type: String, required: true},
        type: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Product', Product);
