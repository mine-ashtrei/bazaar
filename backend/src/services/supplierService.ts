import { Pagination, PaginationResult } from "../common/models";
import { get_pagination_offset } from "../common/utils";
import Supplier, { ISupplier } from "../models/supplierModel";
import { Types } from "mongoose";

export const createWorkshop = async (
  workshopData: ISupplier
): Promise<ISupplier> => {
  const workshop = new Supplier(workshopData);
  return await workshop.save();
};

export const getWorkshopById = async (
  workshopId: Types.ObjectId
): Promise<ISupplier | null> => {
  return await Supplier.findById(workshopId).exec();
};

export const updateWorkshop = async (
  workshopId: Types.ObjectId,
  workshopData: Partial<ISupplier>
): Promise<ISupplier | null> => {
  return await Supplier.findByIdAndUpdate(workshopId, workshopData, {
    new: true,
    runValidators: true,
  }).exec();
};

export const deleteWorkshop = async (
  workshopId: Types.ObjectId
): Promise<ISupplier | null> => {
  return await Supplier.findByIdAndRemove(workshopId).exec();
};

export const getWorkshops = async (
  pagination: Pagination
): Promise<PaginationResult<ISupplier>> => {
  const offset = get_pagination_offset(pagination);
  const [workshops, total] = await Promise.all([
    Supplier.find().skip(offset).limit(pagination.limit).exec(),
    Supplier.countDocuments().exec(),
  ]);

  return { values: workshops, total };
};
