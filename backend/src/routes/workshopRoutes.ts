import { Router } from "express";
import * as workshopController from "../controllers/workshopController";
import {
  createWorkshopValidation,
  updateWorkshopValidation,
} from "../validators/workshopValidator";
import { authenticated } from "../middlewares/authMiddleware";
import { objectIdValidation, paginationValidation } from "../validators/common";
import { workshopExists, isOwner } from "../middlewares/workshopMiddleware";

const router = Router();

router.use(authenticated);
router.post("/", createWorkshopValidation, workshopController.createWorkshop);
router.get("/", paginationValidation, workshopController.getWorkshops);

router.use("/:id", objectIdValidation("id"), workshopExists);

router.get("/:id", workshopController.getWorkshopById);
router.put(
  "/:id",
  updateWorkshopValidation,
  isOwner,
  workshopController.updateWorkshopById
);
router.delete("/:id", isOwner, workshopController.deleteWorkshopById);

export default router;
