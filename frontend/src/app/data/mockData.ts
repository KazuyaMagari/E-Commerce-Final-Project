import { Product, Order } from '../types';

// Mock products data
export const PRODUCTS: Product[] = [];

// Mock orders data (will be managed in-memory for demo)
let mockOrders: Order[] = [];

// Products API
export const productsAPI = {
  getAll: (): Product[] => {
    return [...PRODUCTS];
  },
  
  getById: (id: string): Product | undefined => {
    return PRODUCTS.find((p) => p.id === id);
  },
  
  getFeatured: (): Product[] => {
    return PRODUCTS.filter((p) => p.featured);
  },
  
  getByCategory: (category: string): Product[] => {
    return PRODUCTS.filter((p) => p.category === category);
  },
  
  create: (product: Omit<Product, 'id'>): Product => {
    const newProduct = {
      ...product,
      id: `${Date.now()}`,
    };
    PRODUCTS.push(newProduct);
    return newProduct;
  },
  
  update: (id: string, updates: Partial<Product>): Product | undefined => {
    const index = PRODUCTS.findIndex((p) => p.id === id);
    if (index === -1) return undefined;
    
    PRODUCTS[index] = { ...PRODUCTS[index], ...updates };
    return PRODUCTS[index];
  },
  
  delete: (id: string): boolean => {
    const index = PRODUCTS.findIndex((p) => p.id === id);
    if (index === -1) return false;
    
    PRODUCTS.splice(index, 1);
    return true;
  },
};

// Orders API
export const ordersAPI = {
  getAll: (): Order[] => {
    return [...mockOrders];
  },
  
  getById: (id: string): Order | undefined => {
    return mockOrders.find((o) => o.id === id);
  },
  
  create: (order: Omit<Order, 'id' | 'createdAt'>): Order => {
    const newOrder: Order = {
      ...order,
      id: `ORD-${String(mockOrders.length + 1).padStart(3, '0')}`,
      createdAt: new Date().toISOString(),
    };
    mockOrders.push(newOrder);
    return newOrder;
  },
  
  updateStatus: (id: string, status: Order['status']): Order | undefined => {
    const order = mockOrders.find((o) => o.id === id);
    if (!order) return undefined;
    
    order.status = status;
    return order;
  },
};
