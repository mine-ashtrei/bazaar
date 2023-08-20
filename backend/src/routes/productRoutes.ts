import { Router } from "express";
import * as productController from "../controllers/productController";
import {
  createProductValidation,
  updateProductValidation,
  productImagePresignedUrlValidation,
} from "../validators/productValidator";
import { authenticated, hasRole } from "../middlewares/authMiddleware";
import { objectIdValidation, paginationValidation } from "../validators/common";
import {
  productExists,
  isProductOwner,
} from "../middlewares/productMiddleware";

const router = Router();

router.post(
  "/",
  authenticated,
  hasRole(["workshop"]),
  createProductValidation,
  productController.createProduct
);
router.get(
  "/presigned-url",
  productImagePresignedUrlValidation,
  productController.getPresignedUrl
);
router.get("/", paginationValidation, productController.getProducts);
router.get(
  "/:productId",
  objectIdValidation("productId"),
  productExists,
  productController.getProductById
);
router.put(
  "/:productId",
  authenticated,
  hasRole(["workshop"]),
  objectIdValidation("productId"),
  productExists,
  isProductOwner,
  updateProductValidation,
  productController.updateProductById
);
router.delete(
  "/:productId",
  authenticated,
  hasRole(["workshop"]),
  objectIdValidation("productId"),
  productExists,
  isProductOwner,
  productController.deleteProductById
);

export default router;
