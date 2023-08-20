import { Request, Response, NextFunction } from "express";
import * as productImageService from "../services/productImageService";
import * as productService from "../services/productService";
import { IProduct } from "../models/productModel";
import { MESSAGES } from "../common/messages";
import { get_pagination } from "../common/utils";

export const getPresignedUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fileName = req.query.fileName as string;
    const presignedUrl = await productImageService.createPresignUrl(fileName);
    res.status(200).json(presignedUrl);
  } catch (error) {
    next(error);
  }
};
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productData: IProduct = req.body;
    productData.workshopId = res.locals.user!.workshopId!;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pagination = get_pagination(req.query);
    // const workshopId = res.locals.user!.workshopId!;
    // const categories = req.query.category as string;
    // const tags = req.query.tags as string[];
    // const brand = req.query.brand as string;
    const { values, total } = await productService.getProducts(pagination);
    res.status(200).json({ values, total });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.sanitizedParams.productId!;
    const product = await productService.getProductById(productId);
    if (!product) {
      res.status(404).json(MESSAGES.PRODUCT_NOT_FOUND);
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.sanitizedParams.productId!;
    const productData: Partial<IProduct> = req.body;
    const updatedProduct = await productService.updateProductById(
      productId,
      productData
    );
    if (!updatedProduct) {
      res.status(404).json(MESSAGES.PRODUCT_NOT_FOUND);
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.sanitizedParams.productId!;
    const deletedProduct = await productService.deleteProductById(productId);
    if (!deletedProduct) {
      res.status(404).json(MESSAGES.PRODUCT_NOT_FOUND);
      return;
    }
    res.status(204).json(MESSAGES.PRODUCT_DELETE_SUCCESFULLY);
  } catch (error) {
    next(error);
  }
};
