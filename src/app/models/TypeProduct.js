const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Int32 = require('mongoose-int32').loadType(mongoose);
const mongooseDelete = require('mongoose-delete');

const Type = new Schema(
    {   
        type: { type: String, required: true },
        name: { type: String, required: true },
    },
    { timestamps: true },
);
Type.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('type_product', Type);
