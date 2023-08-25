// custom.d.ts
import { Types } from "mongoose";
import { IUser } from "../models/userModel";
import { ISupplier } from "../models/supplierModel";
import { IProduct } from "../models/productModel";

declare global {
  namespace Express {
    export interface Request {
      sanitizedParams: {
        productId?: Types.ObjectId;
        id?: Types.ObjectId;
      };
    }
    export interface Locals {
      user?: IUser;
      supplier?: ISupplier;
      product?: IProduct;
      [key: string]: any;
    }
  }
}
