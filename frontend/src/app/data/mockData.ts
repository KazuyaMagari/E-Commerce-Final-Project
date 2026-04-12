import { Product, Order } from '../types';

// Mock products data
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MTQ3MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    stock: 50,
    featured: true,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitor, and smartphone notifications',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1MzU2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    stock: 30,
    featured: true,
  },
  {
    id: '3',
    name: 'Ultra Laptop',
    description: 'Powerful performance with Intel i7 processor, 16GB RAM, 512GB SSD',
    price: 1299.99,
    image: 'https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzcxNTIyMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computers',
    stock: 15,
    featured: true,
  },
  {
    id: '4',
    name: 'Smartphone X',
    description: '6.5" OLED display, 5G connectivity, 128GB storage, triple camera system',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NzE0Nzc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Phones',
    stock: 40,
  },
  {
    id: '5',
    name: 'Professional Camera',
    description: '24MP sensor, 4K video recording, weather-sealed body',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzE1MzM3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cameras',
    stock: 10,
  },
  {
    id: '6',
    name: 'Gaming Console',
    description: 'Next-gen gaming console with 4K graphics and immersive gameplay',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzE0OTQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gaming',
    stock: 25,
  },
  {
    id: '7',
    name: 'Tablet Pro',
    description: '11" display, Apple M1 chip, perfect for creativity and productivity',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTUzNTYzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tablets',
    stock: 20,
  },
  {
    id: '8',
    name: 'Tech Bundle',
    description: 'Complete electronics bundle with accessories and warranty',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzcxNDc5MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bundles',
    stock: 5,
    featured: true,
  },
];

// Mock orders data (will be managed in-memory for demo)
let mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { product: PRODUCTS[0], quantity: 1 },
      { product: PRODUCTS[1], quantity: 2 },
    ],
    total: 1099.97,
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+1234567890',
    shippingAddress: '123 Main St, City, State 12345',
    status: 'delivered',
    createdAt: '2026-02-15T10:30:00Z',
  },
  {
    id: 'ORD-002',
    items: [{ product: PRODUCTS[2], quantity: 1 }],
    total: 1299.99,
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '+1234567891',
    shippingAddress: '456 Oak Ave, City, State 12345',
    status: 'shipped',
    createdAt: '2026-02-17T14:20:00Z',
  },
];

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
