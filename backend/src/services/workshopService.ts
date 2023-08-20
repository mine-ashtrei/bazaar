import { Pagination, PaginationResult } from "../common/models";
import { get_pagination_offset } from "../common/utils";
import Workshop, { IWorkshop } from "../models/workshopModel";
import { Types } from "mongoose";

export const createWorkshop = async (
  workshopData: IWorkshop
): Promise<IWorkshop> => {
  const workshop = new Workshop(workshopData);
  return await workshop.save();
};

export const getWorkshopById = async (
  workshopId: Types.ObjectId
): Promise<IWorkshop | null> => {
  return await Workshop.findById(workshopId).exec();
};

export const updateWorkshop = async (
  workshopId: Types.ObjectId,
  workshopData: Partial<IWorkshop>
): Promise<IWorkshop | null> => {
  return await Workshop.findByIdAndUpdate(workshopId, workshopData, {
    new: true,
    runValidators: true,
  }).exec();
};

export const deleteWorkshop = async (
  workshopId: Types.ObjectId
): Promise<IWorkshop | null> => {
  return await Workshop.findByIdAndRemove(workshopId).exec();
};

export const getWorkshops = async (
  pagination: Pagination
): Promise<PaginationResult<IWorkshop>> => {
  const offset = get_pagination_offset(pagination);
  const [workshops, total] = await Promise.all([
    Workshop.find().skip(offset).limit(pagination.limit).exec(),
    Workshop.countDocuments().exec(),
  ]);

  return { values: workshops, total };
};
