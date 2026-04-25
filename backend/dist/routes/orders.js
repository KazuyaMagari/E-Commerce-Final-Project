"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const router = express_1.default.Router();
router.get('/', OrderController_1.default.getAll.bind(OrderController_1.default));
router.get('/:id', OrderController_1.default.getById.bind(OrderController_1.default));
router.post('/', OrderController_1.default.create.bind(OrderController_1.default));
router.put('/:id', OrderController_1.default.update.bind(OrderController_1.default));
router.delete('/:id', OrderController_1.default.delete.bind(OrderController_1.default));
exports.default = router;
//# sourceMappingURL=orders.js.map