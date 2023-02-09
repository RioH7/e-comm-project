import Order from '../models/Order.js';

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).send({ error: "Order not found" });
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

const createOrder = async(req, res) => {
    const order = new Order({
        userID: req.body.userID,
        items: [{
            productID: req.params.productID,
            name: req.params.name,
            price: req.params.price,
            quantity: req.params.quantity
        }],
        address: req.params.address,
        orderDate: req.params.orderDate,
        total: req.params.total
    });

    try {
        const savedOrder = await Order.save();
        res.send({ id: savedOrder._id });
    } catch(error) {
        res.status(400).send(error);
    }
}

const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.send({ message: 'Order deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
}

export { getOrders, getOrderById, createOrder, cancelOrder };