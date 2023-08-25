import { Router } from "express";
import * as workshopController from "../controllers/supplierController";
import {
  createWorkshopValidation,
  updateWorkshopValidation,
} from "../validators/supplierValidator";
import { authenticated } from "../middlewares/authMiddleware";
import { objectIdValidation, paginationValidation } from "../validators/common";
import { workshopExists, isOwner } from "../middlewares/supplierMiddleware";

const router = Router();

router.use(authenticated);
router.post("/", createWorkshopValidation, workshopController.createSupplier);
router.get("/", paginationValidation, workshopController.getSuppliers);

router.use("/:id", objectIdValidation("id"), workshopExists);

router.get("/:id", workshopController.getSupplierById);
router.put(
  "/:id",
  updateWorkshopValidation,
  isOwner,
  workshopController.updateSupplierById
);
router.delete("/:id", isOwner, workshopController.deleteSupplierById);

export default router;
