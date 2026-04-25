import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router.get('/', OrderController.getAll.bind(OrderController));
router.get('/:id', OrderController.getById.bind(OrderController));
router.post('/', OrderController.create.bind(OrderController));
router.put('/:id', OrderController.update.bind(OrderController));
router.delete('/:id', OrderController.delete.bind(OrderController));

export default router;
