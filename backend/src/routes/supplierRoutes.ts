import { Router } from "express";
import * as supplierController from "../controllers/supplierController";
import {
  createSupplierValidation,
  updateSupplierValidation,
} from "../validators/supplierValidator";
import { authenticated } from "../middlewares/authMiddleware";
import { objectIdValidation, paginationValidation } from "../validators/common";
import { supplierExists, isOwner } from "../middlewares/supplierMiddleware";

const router = Router();

router.use(authenticated);
router.post("/", createSupplierValidation, supplierController.createSupplier);
router.get("/", paginationValidation, supplierController.getSuppliers);

router.use("/:id", objectIdValidation("id"), supplierExists);

router.get("/:id", supplierController.getSupplierById);
router.put(
  "/:id",
  updateSupplierValidation,
  isOwner,
  supplierController.updateSupplierById
);
router.delete("/:id", isOwner, supplierController.deleteSupplierById);

export default router;
