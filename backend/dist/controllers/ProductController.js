"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = __importDefault(require("../services/ProductService"));
class ProductController {
    async getAll(req, res, next) {
        try {
            const products = await ProductService_1.default.getAllProducts();
            const featured = req.query.featured === 'true';
            const filtered = featured ? products.filter(p => p.featured) : products;
            res.json(filtered);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const product = await ProductService_1.default.getProductById(req.params.id);
            res.json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const product = await ProductService_1.default.createProduct(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const product = await ProductService_1.default.updateProduct(req.params.id, req.body);
            res.json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await ProductService_1.default.deleteProduct(req.params.id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map