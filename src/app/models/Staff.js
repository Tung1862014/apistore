const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Int32 = require('mongoose-int32').loadType(mongoose);
const mongooseDelete = require('mongoose-delete');

const Staff = new Schema(
    {
        name: { type: String, required: true },
        level: { type: String, required: true },
        phone: { type: Int32, required: true },
        cmnd: { type: Number, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true },
);
Staff.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('User', Staff);
