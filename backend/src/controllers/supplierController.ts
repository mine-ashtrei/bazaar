import { Request, Response, NextFunction } from "express";
import * as workshopService from "../services/supplierService";
import * as userService from "../services/userService";
import { ISupplier } from "../models/supplierModel";
import { Types } from "mongoose";
import { MESSAGES } from "../common/messages";
import { get_pagination } from "../common/utils";

export const createSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierData: ISupplier = req.body;
    const user = res.locals.user!;
    const newSupplier = await workshopService.createWorkshop(supplierData);
    await userService.updateUserById(user.id, {
      supplierId: newSupplier.id,
    });

    res.status(201).json(newSupplier);
  } catch (error) {
    next(error);
  }
};

export const getSuppliers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pagination = get_pagination(req.query);
    const { values, total } = await workshopService.getWorkshops(pagination);
    res.status(200).json({ values, total });
  } catch (error) {
    next(error);
  }
};

export const getSupplierById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const supplier = await workshopService.getWorkshopById(supplierId);
    if (!supplier) {
      res.status(404).json(MESSAGES.SUPPLIER_NOT_FOUND);
    } else {
      res.status(200).json(supplier);
    }
  } catch (error) {
    next(error);
  }
};

export const updateSupplierById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const supplierData: Partial<ISupplier> = req.body;
    const updatedSupplier = await workshopService.updateWorkshop(
      supplierId,
      supplierData
    );
    if (!updatedSupplier) {
      res.status(404).json(MESSAGES.SUPPLIER_NOT_FOUND);
    } else {
      res.status(200).json(updatedSupplier);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteSupplierById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const supplierWorkshop = await workshopService.deleteWorkshop(supplierId);
    if (!supplierWorkshop) {
      res.status(404).json(MESSAGES.SUPPLIER_NOT_FOUND);
    } else {
      res.status(204).json(MESSAGES.SUPPLIER_DELETED);
    }
  } catch (error) {
    next(error);
  }
};
