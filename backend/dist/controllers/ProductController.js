import ProductService from '../services/ProductService';
export class ProductController {
    async getAll(req, res, next) {
        try {
            const products = await ProductService.getAllProducts();
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
            const product = await ProductService.getProductById(req.params.id);
            res.json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const product = await ProductService.createProduct(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const product = await ProductService.updateProduct(req.params.id, req.body);
            res.json(product);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await ProductService.deleteProduct(req.params.id);
            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}
export default new ProductController();
//# sourceMappingURL=ProductController.js.map