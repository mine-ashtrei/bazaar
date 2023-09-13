import express from "express";
import * as authController from "../controllers/authController";
import { emailPasswordValidation } from "../validators/userValidator";
import { authenticated } from "../middlewares/authMiddleware";
import {
  forgotPasswordValidation,
  resetPasswordValidation,
} from "../validators/authValidator";

const router = express.Router();

router.post("/register", emailPasswordValidation, authController.registerUser);
router.post("/login", emailPasswordValidation, authController.loginUser);
router.post("/logout", authenticated, authController.logout);
router.post(
  "/forgot-password",
  forgotPasswordValidation,
  authController.forgotPassword
);
router.post(
  "/reset-password",
  resetPasswordValidation,
  authController.resetPassword
);

router.post("/register/google", authController.registerGoogleUser);
router.post("/login/google", authController.loginGoogleUser);
router.post("/refresh-token", authenticated, authController.refreshToken);

export default router;
