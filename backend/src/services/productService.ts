import { Pagination, PaginationResult } from "../common/models";
import { get_pagination_offset } from "../common/utils";
import Product, { IProduct } from "../models/productModel";
import { Types } from "mongoose";

export const createProduct = async (productData: IProduct) => {
  const newProduct = new Product(productData);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

export const getProductById = async (
  productId: Types.ObjectId
): Promise<IProduct | null> => {
  const product = await Product.findById(productId).exec();
  return product;
};

export const getProducts = async (
  pagination: Pagination
): Promise<PaginationResult<IProduct>> => {
  const offset = get_pagination_offset(pagination);
  const [values, total] = await Promise.all([
    Product.find().skip(offset).limit(pagination.limit).exec(),
    Product.countDocuments().exec(),
  ]);
  return { values, total };
};

export const getProductsByWorkshopId = async (
  workshopId: Types.ObjectId,
  pagination: Pagination
): Promise<PaginationResult<IProduct>> => {
  const offset = get_pagination_offset(pagination);
  const [values, total] = await Promise.all([
    Product.find({ workshopId: workshopId })
      .skip(offset)
      .limit(pagination.limit)
      .exec(),
    Product.countDocuments().exec(),
  ]);
  return { values, total };
};

export const getProductsByCategoryId = async (
  categoryId: Types.ObjectId
): Promise<IProduct[] | null> => {
  const products = await Product.find({ categoryId: categoryId });
  return products;
};

export const deleteProductById = async (
  productId: Types.ObjectId
): Promise<IProduct | null> => {
  return await Product.findByIdAndRemove(productId).exec();
};

export const updateProductById = async (
  productId: Types.ObjectId,
  productData: Partial<IProduct>
): Promise<IProduct | null> => {
  productData.updatedAt = new Date(Date.now());
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    productData,
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedProduct;
};

export const updateProductQuantityById = async (
  productId: Types.ObjectId,
  deltaQuantity: number
): Promise<IProduct | null> => {
  const product = await getProductById(productId);

  if (!product) {
    return null;
  }

  const newQuantity = product.availableQuantity + deltaQuantity;

  if (newQuantity < 0) {
    throw new Error("Insufficient quantity available");
  }

  return await updateProductById(productId, { availableQuantity: newQuantity });
};
