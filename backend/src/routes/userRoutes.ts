import { Router } from "express";
import { updateUserValidation } from "../validators/userValidator";
import * as userController from "../controllers/userController";
import { objectIdValidation } from "../validators/common";
import { authenticated } from "../middlewares/authMiddleware";

const router = Router();

router.get("/me", authenticated, userController.getCurrentUser);

router.use("/:id", objectIdValidation("id"), authenticated);

router.get("/:id", userController.getUserById);
router.put("/:id", updateUserValidation, userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

export default router;
