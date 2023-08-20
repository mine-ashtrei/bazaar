import Category, { ICategory } from "../models/categoryModel";
import { Types } from "mongoose";

export const createCategory = async (categoryData: ICategory) => {
  const newCategory = new Category(categoryData);
  const savedCategory = await newCategory.save();
  return savedCategory;
};

export const getCategoryById = async (
  categoryId: Types.ObjectId
): Promise<ICategory | null> => {
  const category = await Category.findById(categoryId);
  return category;
};

export const getAllCategories = async (): Promise<ICategory[] | null> => {
  const categories = await Category.find();
  return categories;
};

export const deleteCategoryById = async (
  categoryId: Types.ObjectId
): Promise<ICategory | null> => {
  return await Category.findByIdAndRemove(categoryId).exec();
};

export const updateCategoryById = async (
  categoryId: Types.ObjectId,
  categoryData: Partial<ICategory>
): Promise<ICategory | null> => {
  categoryData.updatedAt = new Date(Date.now());
  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    categoryData,
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedCategory;
};
