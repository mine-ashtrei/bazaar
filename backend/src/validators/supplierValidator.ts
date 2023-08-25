import { ValidationChain } from "express-validator";
import {
  getCreateValidationRules,
  getUpdateValidationRules,
  IValidationRules,
  validate,
} from "./common";

import { checkExact } from "express-validator";
// Allowed properties for the update request and their validation functions
const properties: IValidationRules[] = [
  {
    property: "name",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "description",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "address.street",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "address.city",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "address.state",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "address.country",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "address.postalCode",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "contact.phone",
    validation: (body: ValidationChain): ValidationChain => body.notEmpty(),
  },
  {
    property: "contact.email",
    validation: (body: ValidationChain): ValidationChain => body.isEmail(),
  },
];

const createSupplierRules: ValidationChain[] =
  getCreateValidationRules(properties);

const updateSupplierRules: ValidationChain[] =
  getUpdateValidationRules(properties);

export const createSupplierValidation = [
  checkExact(createSupplierRules),
  validate,
];

export const updateSupplierValidation = [
  checkExact(updateSupplierRules),
  validate,
];