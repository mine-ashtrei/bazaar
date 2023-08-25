import { Pagination, PaginationResult } from "../common/models";
import { get_pagination_offset } from "../common/utils";
import Supplier, { ISupplier } from "../models/supplierModel";
import { Types } from "mongoose";

export const createSupplier = async (
  supplierData: ISupplier
): Promise<ISupplier> => {
  const supplier = new Supplier(supplierData);
  return await supplier.save();
};

export const getSupplierById = async (
  supplierId: Types.ObjectId
): Promise<ISupplier | null> => {
  return await Supplier.findById(supplierId).exec();
};

export const updateSupplier = async (
  supplierId: Types.ObjectId,
  supplierData: Partial<ISupplier>
): Promise<ISupplier | null> => {
  return await Supplier.findByIdAndUpdate(supplierId, supplierData, {
    new: true,
    runValidators: true,
  }).exec();
};

export const deleteSupplier = async (
  supplierId: Types.ObjectId
): Promise<ISupplier | null> => {
  return await Supplier.findByIdAndRemove(supplierId).exec();
};

export const getSupplier = async (
  pagination: Pagination
): Promise<PaginationResult<ISupplier>> => {
  const offset = get_pagination_offset(pagination);
  const [supplier, total] = await Promise.all([
    Supplier.find().skip(offset).limit(pagination.limit).exec(),
    Supplier.countDocuments().exec(),
  ]);

  return { values: supplier, total };
};
