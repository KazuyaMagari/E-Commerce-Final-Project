import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';
import errorHandler from './middleware/errorHandler';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});
// Root route
app.get('/', (req, res) => {
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
//# sourceMappingURL=index.js.map