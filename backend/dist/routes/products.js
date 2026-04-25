"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const router = express_1.default.Router();
router.get('/', ProductController_1.default.getAll.bind(ProductController_1.default));
router.get('/:id', ProductController_1.default.getById.bind(ProductController_1.default));
router.post('/', ProductController_1.default.create.bind(ProductController_1.default));
router.put('/:id', ProductController_1.default.update.bind(ProductController_1.default));
router.delete('/:id', ProductController_1.default.delete.bind(ProductController_1.default));
exports.default = router;
//# sourceMappingURL=products.js.map