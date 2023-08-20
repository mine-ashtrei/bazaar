import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
// import { MESSAGES } from "../common/messages";
import {
  ValidationChain,
  body,
  query,
  param,
  validationResult,
} from "express-validator";

export interface IValidationRules {
  property: string;
  validation: (body: ValidationChain) => ValidationChain;
}

export const objectIdValidation = (paramName: string): ValidationChain => {
  return param(paramName)
    .custom((obj) => {
      if (Types.ObjectId.isValid(obj)) {
        return true;
      }
      return false;
    })
    .customSanitizer((value, { req }) => {
      if (!req.sanitizedParams) {
        req.sanitizedParams = {};
      }
      req.sanitizedParams[paramName] =
        Types.ObjectId.createFromHexString(value);
    });
};

export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const getCreateValidationRules = (
  properties: IValidationRules[]
): ValidationChain[] => {
  return properties.map(({ property, validation }) => {
    return validation(body(property));
  });
};

export const getUpdateValidationRules = (
  properties: IValidationRules[]
): ValidationChain[] => {
  return properties.map(({ property, validation }) => {
    return validation(body(property)).optional();
  });
};

export const paginationValidation = [
  query("page").optional().isInt({ min: 1 }),
  query("limit").optional().isInt({ min: 1, max: 100 }),
  validate,
];
