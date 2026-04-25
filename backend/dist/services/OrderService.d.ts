export interface Order {
    id?: string;
    userId?: string;
    items: OrderItem[];
    totalPrice: number;
    status?: string;
    shippingAddress?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
}
export declare class OrderService {
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
    createOrder(data: Order): Promise<Order>;
    updateOrder(id: string, data: Partial<Order>): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
}
declare const _default: OrderService;
export default _default;
//# sourceMappingURL=OrderService.d.ts.map