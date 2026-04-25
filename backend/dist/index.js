"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const products_1 = __importDefault(require("./routes/products"));
const orders_1 = __importDefault(require("./routes/orders"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const normalizeOrigin = (value) => value.replace(/\/+$/, '');
const frontendOrigin = normalizeOrigin(process.env.FRONTEND_URL || 'http://localhost:5173');
// Middleware
app.use((0, cors_1.default)({
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
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/api/v1/products', products_1.default);
app.use('/api/v1/orders', orders_1.default);
// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});
// Root route
app.get('/', (req, res) => {
    res.json({ message: 'E-commerce API is running' });
});
// Error handling middleware
app.use(errorHandler_1.default);
// Export Express app for Vercel serverless deployment
exports.default = app;
// Avoid starting a listener inside a serverless runtime.
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
//# sourceMappingURL=index.js.map