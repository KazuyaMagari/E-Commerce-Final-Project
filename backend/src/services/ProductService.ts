import { pool } from '../config/database';

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

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    return result.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      price: parseFloat(row.price),
      image: row.image,
      category: row.category,
      stock: row.stock,
      featured: row.featured,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  async getProductById(id: string): Promise<Product> {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      throw { status: 404, message: 'Product not found' };
    }
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      price: parseFloat(row.price),
      image: row.image,
      category: row.category,
      stock: row.stock,
      featured: row.featured,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async createProduct(data: Product): Promise<Product> {
    const { name, description, price, image, category, stock, featured } = data;
    const result = await pool.query(
      'INSERT INTO products (name, description, price, image, category, stock, featured, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW()) RETURNING *',
      [name, description, price, image, category, stock, featured]
    );
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      price: row.price,
      image: row.image,
      category: row.category,
      stock: row.stock,
      featured: row.featured,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    const { name, description, price, image, category, stock, featured } = data;
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3, image = $4, category = $5, stock = $6, featured = $7, updated_at = NOW() WHERE id = $8 RETURNING *',
      [name, description, price, image, category, stock, featured, id]
    );
    if (result.rows.length === 0) {
      throw { status: 404, message: 'Product not found' };
    }
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      price: row.price,
      image: row.image,
      category: row.category,
      stock: row.stock,
      featured: row.featured,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async deleteProduct(id: string): Promise<void> {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
  }
}

export default new ProductService();
