import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;
const normalizeOrigin = (value: string) => value.replace(/\/+$/, '');
const frontendOrigin = normalizeOrigin(process.env.FRONTEND_URL || 'http://localhost:5173');

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests (no Origin header), and exact origin matches.
    if (!origin || normalizeOrigin(origin) === frontendOrigin) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'E-commerce API is running' });
});

// Error handling middleware
app.use(errorHandler);

// Export Express app for Vercel serverless deployment
export default app;

// Avoid starting a listener inside a serverless runtime.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
