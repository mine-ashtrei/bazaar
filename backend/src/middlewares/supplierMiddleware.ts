import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { MESSAGES } from "../common/messages";
import * as supplierService from "../services/supplierService";

export const supplierExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
  const supplier = await supplierService.getSupplierById(id);
  if (!supplier) {
    res.status(404).json(MESSAGES.SUPPLIER_NOT_FOUND);
    return;
  }
  res.locals.supplier = supplier;
  next();
};

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user!;
  const supplierId: Types.ObjectId = req.sanitizedParams.id!;
  if (user.supplierId == null) {
    res.status(403).json(MESSAGES.SUPPLIER_FORBIDDEN);
    return;
  }
  if (user.supplierId!.toString() !== supplierId.toString()) {
    res.status(403).json(MESSAGES.SUPPLIER_FORBIDDEN);
    return;
  }
  next();
};
