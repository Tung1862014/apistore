// const typeRoute = require('./type');
const staffRoute = require('./staff');
const customerRoute = require('./customer');
const loginRoute = require('./login');
const homeRoute = require('./home');
// const billRoute = require('./bill');
const productRoute = require('./product');
// const supplierRoute = require('./supplier');
const chartRoute = require('./chart');

function route(app) {
    // app.use('/supplier', supplierRoute);
    app.use('/staff', staffRoute);
    app.use('/customer', customerRoute);
    // app.use('/bill', billRoute);
    app.use('/auth', loginRoute);
    app.use('/product', productRoute);
    // app.use('/type', typeRoute);
    app.use('/', homeRoute);
    app.use('/home', homeRoute);

    app.use('/chart', chartRoute);

}

module.exports = route;
