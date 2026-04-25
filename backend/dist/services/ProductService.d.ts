export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    category?: string;
    stock?: number;
    featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
export declare class ProductService {
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(data: Product): Promise<Product>;
    updateProduct(id: string, data: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
declare const _default: ProductService;
export default _default;
//# sourceMappingURL=ProductService.d.ts.map