import { query } from "express-validator";
import { validate } from "./common";
import { body } from "express-validator";
import { MESSAGES } from "../common/messages";

const productImagePresignedUrlRules = [query("fileName").notEmpty().isString()];

export const productImagePresignedUrlValidation = [
  ...productImagePresignedUrlRules,
  validate,
];

export const productRules = [
  body("description").isLength({ min: 100, max: 2048 }).withMessage(MESSAGES.VALIDATION_BAD_DESCRIPTION),
  body("tags")
    .isArray({ min: 1, max: 10 })
    .withMessage(MESSAGES.VALIDATION_BAD_TAGS_ARRAY),
  body("tags.*")
    .isLength({ min: 1, max: 64 })
    .withMessage(MESSAGES.VALIDATION_BAD_TAGS_STRING),
];

export const createProductValidation = [...productRules, validate];
export const updateProductValidation = [];