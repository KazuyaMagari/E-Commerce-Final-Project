import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/', ProductController.getAll.bind(ProductController));
router.get('/:id', ProductController.getById.bind(ProductController));
router.post('/', ProductController.create.bind(ProductController));
router.put('/:id', ProductController.update.bind(ProductController));
router.delete('/:id', ProductController.delete.bind(ProductController));

export default router;
