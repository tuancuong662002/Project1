const product = require('./product') ;
const customer = require('./customer');
const bill = require('./bill');
function route(app){
    app.use('/product', product)
    app.use('/customer' , customer)
    app.use('/bill', bill)
}
module.exports = route ;
