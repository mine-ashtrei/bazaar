import { Request, Response, NextFunction } from "express";
import * as productService from "../services/productService";
import { MESSAGES } from "../common/messages";

export const productExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.sanitizedParams.productId!;
  const product = await productService.getProductById(productId);
  if (!product) {
    res.status(404).json(MESSAGES.PRODUCT_NOT_FOUND);
    return;
  }
  res.locals.product = product;
  next();
};

export const isProductOwner = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = res.locals.product!;
  if (
    product.workshopId.toString() !== res.locals.user!.supplierId!.toString()
  ) {
    res.status(403).json(MESSAGES.PRODUCT_FORBIDDEN);
    return;
  }
  next();
};
