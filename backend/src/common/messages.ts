
import { ReturnMessage } from "./models";

const ERROR_SERVER: ReturnMessage = {
      summary: "Something went wrong",
      userAction: "Retry",
      description: "Internal server error",
};

const AUTH_LOGOUT: ReturnMessage = {
      summary: "Logout",
      userAction: "None",
      description: "User logout",
};

const AUTH_LOGIN_ERROR: ReturnMessage = {
      summary: "Login error",
      userAction: "Retry",
      description: "Email and password are not valid",
};

const AUTH_UNAUTHORIZE: ReturnMessage = {
      summary: "Unauthorize",
      userAction: "Retry",
      description: "User does not have access to resource",
};

const AUTH_MISSING_TOKEN: ReturnMessage = {
      summary: "No token provided",
      userAction: "Retry",
      description: "Authentication token not provided",
};

const AUTH_BAD_TOKEN: ReturnMessage = {
      summary: "Bad token",
      userAction: "Retry",
      description: "A bad token was provided",
};

const AUTH_REDIS: ReturnMessage = {
      summary: "Reddis error",
      userAction: "Retry",
      description: "An error occurred while accessing Redis",
};

const AUTH_RESET_PASSWORD_INVALID_TOKEN: ReturnMessage = {
      summary: "Invalid token",
      userAction: "Retry",
      description: "An invalid token was given",
};

const AUTH_FORBIDDEN: ReturnMessage = {
      summary: "Forbidden",
      userAction: "None",
      description: "Action forbiden for user",
};

const SUPPLIER_DELETED: ReturnMessage = {
      summary: "Supplier deleted",
      userAction: "None",
      description: "Supplier deleted successfully",
};

const SUPPLIER_NOT_FOUND: ReturnMessage = {
      summary: "Supplier not found",
      userAction: "Retry",
      description: "Supplier was not found in the database",
};

const SUPPLIER_FORBIDDEN: ReturnMessage = {
      summary: "Forbidden",
      userAction: "Retry",
      description: "User does not have access to this supplier",
};

const PRODUCT_PRESIGNED_URL: ReturnMessage = {
      summary: "Failed generating url",
      userAction: "Retry",
      description: "Failed to generate presigned url for image",
};

const PRODUCT_NOT_FOUND: ReturnMessage = {
      summary: "Product not found",
      userAction: "Retry",
      description: "Product was not found in the database",
};

const PRODUCT_FORBIDDEN: ReturnMessage = {
      summary: "Forbidden",
      userAction: "Retry",
      description: "User does not have access to this product",
};

const PRODUCT_DELETE_SUCCESFULLY: ReturnMessage = {
      summary: "Product deleted",
      userAction: "None",
      description: "Product was deleted successfully",
};

const COMMON_INVALID_OBJECTID: ReturnMessage = {
      summary: "Invalid ObjectID",
      userAction: "Retry",
      description: "ObjectID is not valid",
};

const COMMON_DB_ERROR: ReturnMessage = {
      summary: "Database Error",
      userAction: "Retry",
      description: "An error with the database occured",
};

const USER_NOT_FOUND: ReturnMessage = {
      summary: "User not found",
      userAction: "Retry",
      description: "User was not found in the database",
};

const USER_DB_CREATE: ReturnMessage = {
      summary: "Error creating user",
      userAction: "Retry",
      description: "An error occurred while trying to create the user",
};

const USER_DB_GET: ReturnMessage = {
      summary: "Error retrieving user",
      userAction: "Retry",
      description: "An error occurred while trying to retrive the user",
};

const USER_DB_UPDATE: ReturnMessage = {
      summary: "Error updating user",
      userAction: "Retry",
      description: "An error occurred while trying to update the user",
};

const USER_DELETE_SUCCESFULLY: ReturnMessage = {
      summary: "User deleted",
      userAction: "None",
      description: "User was deleted successfully",
};

const USER_DELETE: ReturnMessage = {
      summary: "User not deleted",
      userAction: "Retry",
      description: "An error occurred while trying to delete the user",
};

const VALIDATION_BAD_EMAIL: ReturnMessage = {
      summary: "Invalid email",
      userAction: "Retry",
      description: "Please enter a valid email address.",
};

const VALIDATION_BAD_PASSWORD: ReturnMessage = {
      summary: "Invalid password",
      userAction: "Retry",
      description: "Password must be at least 6 characters long.",
};

const VALIDATION_MISSING_QUERRY_FILENAME: ReturnMessage = {
      summary: "Missing filename",
      userAction: "Retry",
      description: "Querry filename is missing",
};

const VALIDATION_BAD_QUERRY_FILENAME_TYPE: ReturnMessage = {
      summary: "Invalid filename",
      userAction: "Retry",
      description: "Please enter a valid filename",
};

const VALIDATION_BAD_DESCRIPTION: ReturnMessage = {
      summary: "Invalid description",
      userAction: "Retry",
      description: "Please enter a description having between 100 and 2048 characters",
};

const VALIDATION_BAD_TAGS_ARRAY: ReturnMessage = {
      summary: "Invalid tags",
      userAction: "Retry",
      description: "Please enter a valid tags array",
};

const VALIDATION_BAD_TAGS_STRING: ReturnMessage = {
      summary: "Invalid tags content",
      userAction: "Retry",
      description: "Please enter a valid entry inside tags array",
};

export const MESSAGES = {
  ERROR_SERVER: ERROR_SERVER,
  AUTH_LOGOUT: AUTH_LOGOUT,
  AUTH_LOGIN_ERROR: AUTH_LOGIN_ERROR,
  AUTH_UNAUTHORIZE: AUTH_UNAUTHORIZE,
  AUTH_MISSING_TOKEN: AUTH_MISSING_TOKEN,
  AUTH_BAD_TOKEN: AUTH_BAD_TOKEN,
  AUTH_REDIS: AUTH_REDIS,
  AUTH_RESET_PASSWORD_INVALID_TOKEN: AUTH_RESET_PASSWORD_INVALID_TOKEN,
  AUTH_FORBIDDEN: AUTH_FORBIDDEN,
  SUPPLIER_DELETED: SUPPLIER_DELETED,
  SUPPLIER_NOT_FOUND: SUPPLIER_NOT_FOUND,
  SUPPLIER_FORBIDDEN: SUPPLIER_FORBIDDEN,
  PRODUCT_PRESIGNED_URL: PRODUCT_PRESIGNED_URL,
  PRODUCT_NOT_FOUND: PRODUCT_NOT_FOUND,
  PRODUCT_FORBIDDEN: PRODUCT_FORBIDDEN,
  PRODUCT_DELETE_SUCCESFULLY: PRODUCT_DELETE_SUCCESFULLY,
  COMMON_INVALID_OBJECTID: COMMON_INVALID_OBJECTID,
  COMMON_DB_ERROR: COMMON_DB_ERROR,
  USER_NOT_FOUND: USER_NOT_FOUND,
  USER_DB_CREATE: USER_DB_CREATE,
  USER_DB_GET: USER_DB_GET,
  USER_DB_UPDATE: USER_DB_UPDATE,
  USER_DELETE_SUCCESFULLY: USER_DELETE_SUCCESFULLY,
  USER_DELETE: USER_DELETE,
  VALIDATION_BAD_EMAIL: VALIDATION_BAD_EMAIL,
  VALIDATION_BAD_PASSWORD: VALIDATION_BAD_PASSWORD,
  VALIDATION_MISSING_QUERRY_FILENAME: VALIDATION_MISSING_QUERRY_FILENAME,
  VALIDATION_BAD_QUERRY_FILENAME_TYPE: VALIDATION_BAD_QUERRY_FILENAME_TYPE,
  VALIDATION_BAD_DESCRIPTION: VALIDATION_BAD_DESCRIPTION,
  VALIDATION_BAD_TAGS_ARRAY: VALIDATION_BAD_TAGS_ARRAY,
  VALIDATION_BAD_TAGS_STRING: VALIDATION_BAD_TAGS_STRING,

};
