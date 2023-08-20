import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { MESSAGES } from "../common/messages";
import * as workshopService from "../services/workshopService";

export const workshopExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
  const workshop = await workshopService.getWorkshopById(id);
  if (!workshop) {
    res.status(404).json(MESSAGES.WORKSHOP_NOT_FOUND);
    return;
  }
  res.locals.workshop = workshop;
  next();
};

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user!;
  const workshopId: Types.ObjectId = req.sanitizedParams.id!;
  if (user.workshopId == null) {
    res.status(403).json(MESSAGES.WORKSHOP_FORBIDDEN);
    return;
  }
  if (user.workshopId!.toString() !== workshopId.toString()) {
    res.status(403).json(MESSAGES.WORKSHOP_FORBIDDEN);
    return;
  }
  next();
};
