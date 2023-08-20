// custom.d.ts
import { Types } from "mongoose";
import { IUser } from "../models/userModel";
import { IWorkshop } from "../models/workshopModel";
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
      workshop?: IWorkshop;
      product?: IProduct;
      [key: string]: any;
    }
  }
}
