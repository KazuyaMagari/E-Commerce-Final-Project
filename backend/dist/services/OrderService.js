"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const database_1 = require("../config/database");
class OrderService {
    async getAllOrders() {
        const result = await database_1.pool.query('SELECT * FROM orders ORDER BY created_at DESC');
        const orders = [];
        for (const row of result.rows) {
            const itemsResult = await database_1.pool.query('SELECT * FROM order_items WHERE order_id = $1', [row.id]);
            const items = itemsResult.rows.map((item) => ({
                productId: item.product_id,
                quantity: item.quantity,
                price: item.price,
            }));
            orders.push({
                id: row.id,
                userId: row.user_id,
                items,
                totalPrice: row.total_price,
                status: row.status,
                shippingAddress: row.shipping_address,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
            });
        }
        return orders;
    }
    async getOrderById(id) {
        const result = await database_1.pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            throw { status: 404, message: 'Order not found' };
        }
        const row = result.rows[0];
        const itemsResult = await database_1.pool.query('SELECT * FROM order_items WHERE order_id = $1', [id]);
        const items = itemsResult.rows.map((item) => ({
            productId: item.product_id,
            quantity: item.quantity,
            price: item.price,
        }));
        return {
            id: row.id,
            userId: row.user_id,
            items,
            totalPrice: row.total_price,
            status: row.status,
            shippingAddress: row.shipping_address,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
        };
    }
    async createOrder(data) {
        const { userId, items, totalPrice, status = 'pending', shippingAddress } = data;
        const client = await database_1.pool.connect();
        try {
            await client.query('BEGIN');
            const orderResult = await client.query('INSERT INTO orders (user_id, total_price, status, shipping_address, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *', [userId, totalPrice, status, shippingAddress]);
            const orderId = orderResult.rows[0].id;
            for (const item of items) {
                await client.query('INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)', [orderId, item.productId, item.quantity, item.price]);
            }
            await client.query('COMMIT');
            return {
                id: orderId,
                userId,
                items,
                totalPrice,
                status,
                shippingAddress,
                createdAt: orderResult.rows[0].created_at,
                updatedAt: orderResult.rows[0].updated_at,
            };
        }
        catch (error) {
            await client.query('ROLLBACK');
            throw error;
        }
        finally {
            client.release();
        }
    }
    async updateOrder(id, data) {
        const { userId, totalPrice, status, shippingAddress } = data;
        await database_1.pool.query('UPDATE orders SET user_id = $1, total_price = $2, status = $3, shipping_address = $4, updated_at = NOW() WHERE id = $5', [userId, totalPrice, status, shippingAddress, id]);
        return this.getOrderById(id);
    }
    async deleteOrder(id) {
        await database_1.pool.query('DELETE FROM orders WHERE id = $1', [id]);
    }
}
exports.OrderService = OrderService;
exports.default = new OrderService();
//# sourceMappingURL=OrderService.js.map