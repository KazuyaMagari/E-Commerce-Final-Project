import "dotenv/config"; 
import { pool } from "../config/database";

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
};

const MOCK_PRODUCTS: Product[] = [
  {
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3MTQ3MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Audio",
    stock: 50,
    featured: true,
  },
  {
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking, heart rate monitor, and smartphone notifications",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1MzU2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Wearables",
    stock: 30,
    featured: true,
  },
  {
    name: "Ultra Laptop",
    description: "Powerful performance with Intel i7 processor, 16GB RAM, 512GB SSD",
    price: 1299.99,
    image: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzcxNTIyMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Computers",
    stock: 15,
    featured: true,
  },
  {
    name: "Smartphone X",
    description: "6.5\" OLED display, 5G connectivity, 128GB storage, triple camera system",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NzE0Nzc4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Phones",
    stock: 40,
  },
  {
    name: "Professional Camera",
    description: "24MP sensor, 4K video recording, weather-sealed body",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzE1MzM3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cameras",
    stock: 10,
  },
  {
    name: "Gaming Console",
    description: "Next-gen gaming console with 4K graphics and immersive gameplay",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzE0OTQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Gaming",
    stock: 25,
  },
  {
    name: "Tablet Pro",
    description: "11\" display, Apple M1 chip, perfect for creativity and productivity",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTUzNTYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tablets",
    stock: 20,
  },
  {
    name: "Tech Bundle",
    description: "Complete electronics bundle with accessories and warranty",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzcxNDc5MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Bundles",
    stock: 5,
    featured: true,
  },
];

async function seedFirebase() {
  try {
    console.log("🚀 Starting data migration to PostgreSQL...");

    // Create tables if they don't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        image VARCHAR(500),
        category VARCHAR(100),
        stock INTEGER DEFAULT 0,
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255),
        total_price DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        shipping_address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER REFERENCES orders(id),
        product_id INTEGER,
        quantity INTEGER NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      )
    `);

    // Insert mock products
    for (const product of MOCK_PRODUCTS) {
      await pool.query(
        'INSERT INTO products (name, description, price, image, category, stock, featured) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING',
        [product.name, product.description, product.price, product.image, product.category, product.stock, product.featured]
      );
    }

    console.log("✅ Data migration completed successfully!");
  } catch (error) {
    console.error("❌ Error during migration:", error);
  } finally {
    await pool.end();
  }
}

seedFirebase();