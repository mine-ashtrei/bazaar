import { resolve } from "path";
import { writeFileSync } from "fs";
import { programFromConfig, buildGenerator } from "typescript-json-schema";
import { ValidationChain } from "express-validator";
import { Model } from "mongoose";
import m2c from "mongoose-to-swagger";

import User from "../src/models/userModel";
import Category from "../src/models/categoryModel";
import Product from "../src/models/productModel";
import ProductImage from "../src/models/productImageModel";
import ShoppingCartItem from "../src/models/shoppingCartItemModel";
import ShoppingCart from "../src/models/shoppingCartModel";
import Supplier from "../src/models/supplierModel";

import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

// import { emailPasswordRules } from "../src/validators/userValidator";
// import { createWorkshopRules } from "../src/validators/workshopValidator";
import { StandardValidation } from "express-validator/src/context-items";

const typesList = ["ReturnMessage"];
const mongooseSchemas = [
  User,
  Category,
  ProductImage,
  Product,
  ShoppingCartItem,
  ShoppingCart,
  Supplier,
];

const validationRules = {
  // emailPasswordRules: emailPasswordRules,
  // createWorkshopRules: createWorkshopRules,
};

function unCapitalize(string: string): string {
  return string.charAt(0).toLocaleLowerCase() + string.slice(1);
}

function writeSchemaToFile(schemaFilename: string, schema: any) {
  const outputPath = resolve("./schemas", schemaFilename);
  writeFileSync(outputPath, schema);
  console.log(`Generated schema file: ${outputPath}`);
}

function generateSchemaFilesFromTypes(typesList: string[]) {
  const config = {
    tsconfig: "./tsconfig.json",
    required: true,
  };

  const program = programFromConfig(config.tsconfig);
  const generator = buildGenerator(program, config);

  if (!generator) {
    console.error("Failed to build generator.");
    return;
  }

  const symbols = generator.getSymbols();
  console.log(`Found ${symbols.length} symbols`);
  for (const symbol of symbols) {
    if (typesList.indexOf(symbol.name) < 0) {
      continue;
    }
    const schema = generator.getSchemaForSymbol(symbol.name);
    const schemaFilename = `${unCapitalize(symbol.name)}Schema.json`;
    writeSchemaToFile(schemaFilename, JSON.stringify(schema, null, 2));
  }
}

function generateSchemaFilesFromMongoose(mongooseSchemas: Model<any>[]) {
  for (const schema of mongooseSchemas) {
    const schemaFilename = `${unCapitalize(schema.modelName)}Schema.json`;
    const jsonSchema = m2c(schema);
    writeSchemaToFile(schemaFilename, JSON.stringify(jsonSchema, null, 2));
  }
}

function validationChainToJSONSchema(validationChain: ValidationChain[]) {
  const schema: {
    type: string;
    properties: Record<string, any>;
    required: string[];
  } = { type: "object", properties: {}, required: [] };

  validationChain.forEach((chain) => {
    const context = chain.builder.build();
    const fieldName: string = context.fields[0]!;
    schema.properties[fieldName] = {};
    if (context.optional === false) {
      schema.required.push(fieldName);
    }
    console.log("BUUUU");
    console.log(context);
    context.stack.forEach((validator) => {
      const rule = validator as StandardValidation;
      const property = schema.properties[fieldName];
      console.log(rule);
      console.log(rule["validator"]);
      switch (rule["validator"]) {
        case isLength:
          console.log(rule["options"]);
          property.minLength = rule["options"][0].min;
          property.maxLength = rule["options"][0].max;
          break;
        case isEmail:
          property.type = "string";
          property.format = "email";
          break;

        case "isInt":
          property.type = "integer";
          break;
        case "isFloat":
          property.type = "number";
          break;
        case "isBoolean":
          property.type = "boolean";
          break;
        default:
          break;
      }
    });
  });

  return schema;
}

function generateSchemaFilesFromValidationRules(validationRules: any) {
  for (const name in validationRules) {
    const schemaFilename = `${unCapitalize(name)}Schema.json`;
    const schema = validationChainToJSONSchema(validationRules[name]);
    writeSchemaToFile(schemaFilename, JSON.stringify(schema, null, 2));
  }
}

generateSchemaFilesFromTypes(typesList);
generateSchemaFilesFromMongoose(mongooseSchemas);
generateSchemaFilesFromValidationRules(validationRules);
console.log("Done");
