import OrderService from '../services/OrderService';
export class OrderController {
    async getAll(req, res, next) {
        try {
            const orders = await OrderService.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const order = await OrderService.getOrderById(req.params.id);
            res.json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const order = await OrderService.createOrder(req.body);
            res.status(201).json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const order = await OrderService.updateOrder(req.params.id, req.body);
            res.json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await OrderService.deleteOrder(req.params.id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
export default new OrderController();
//# sourceMappingURL=OrderController.js.map