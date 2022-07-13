const mongoose = require('mongoose');
const Int32 = require('mongoose-int32').loadType(mongoose);
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Supplier = new Schema(
    {
        name: { type: String, required: true },
        //image: { type: Buffer , required: true },
        number: { type: Int32, required: true },
        // deletedAt: {type: Date, default: Date.now},
    },
    { timestamps: true },
);

//Add plugins
// mongoose.plugin(slug);
Supplier.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Supplier', Supplier);
