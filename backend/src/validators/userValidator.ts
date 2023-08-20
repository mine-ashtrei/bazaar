import { body } from "express-validator";
import { MESSAGES } from "../common/messages";
import { validate } from "./common";

const emailPasswordRules = [
  body("email").isEmail().withMessage(MESSAGES.VALIDATION_BAD_EMAIL),
  body("password")
    .isLength({ min: 6 })
    .withMessage(MESSAGES.VALIDATION_BAD_PASSWORD),
];

export const emailPasswordValidation = [...emailPasswordRules, validate];
export const updateUserValidation = [...emailPasswordRules, validate];
