let mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderId: String,
    amount: String,
    createdAt: String,
    createdBy: String,
});

const Order = mongoose.model('orders', OrderSchema);
export default Order;