import { query } from "express-validator";
import { validate } from "./common";

const productImagePresignedUrlRules = [query("fileName").notEmpty().isString()];

export const productImagePresignedUrlValidation = [
  ...productImagePresignedUrlRules,
  validate,
];

export const createProductValidation = [];
export const updateProductValidation = [];
