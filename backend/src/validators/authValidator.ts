import { body } from "express-validator";
import { validate } from "./common";

export const forgotPasswordValidation = [body("email").isEmail(), validate];

export const resetPasswordValidation = [
  body("email").isEmail(),
  body("token").exists().isString(),
  validate,
];
