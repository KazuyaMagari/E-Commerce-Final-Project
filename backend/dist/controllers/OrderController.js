"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const OrderService_1 = __importDefault(require("../services/OrderService"));
class OrderController {
    async getAll(req, res, next) {
        try {
            const orders = await OrderService_1.default.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const order = await OrderService_1.default.getOrderById(req.params.id);
            res.json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const order = await OrderService_1.default.createOrder(req.body);
            res.status(201).json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const order = await OrderService_1.default.updateOrder(req.params.id, req.body);
            res.json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await OrderService_1.default.deleteOrder(req.params.id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.OrderController = OrderController;
exports.default = new OrderController();
//# sourceMappingURL=OrderController.js.map