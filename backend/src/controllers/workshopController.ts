import { Request, Response, NextFunction } from "express";
import * as workshopService from "../services/workshopService";
import * as userService from "../services/userService";
import { IWorkshop } from "../models/workshopModel";
import { Types } from "mongoose";
import { MESSAGES } from "../common/messages";
import { get_pagination } from "../common/utils";

export const createWorkshop = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workshopData: IWorkshop = req.body;
    const user = res.locals.user!;
    const newWorkshop = await workshopService.createWorkshop(workshopData);
    await userService.updateUserById(user.id, {
      workshopId: newWorkshop.id,
    });

    res.status(201).json(newWorkshop);
  } catch (error) {
    next(error);
  }
};

export const getWorkshops = async (
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

export const getWorkshopById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workshopId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const workshop = await workshopService.getWorkshopById(workshopId);
    if (!workshop) {
      res.status(404).json(MESSAGES.WORKSHOP_NOT_FOUND);
    } else {
      res.status(200).json(workshop);
    }
  } catch (error) {
    next(error);
  }
};

export const updateWorkshopById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workshopId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const workshopData: Partial<IWorkshop> = req.body;
    const updatedWorkshop = await workshopService.updateWorkshop(
      workshopId,
      workshopData
    );
    if (!updatedWorkshop) {
      res.status(404).json(MESSAGES.WORKSHOP_NOT_FOUND);
    } else {
      res.status(200).json(updatedWorkshop);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteWorkshopById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workshopId: Types.ObjectId = req.sanitizedParams.id as Types.ObjectId;
    const deletedWorkshop = await workshopService.deleteWorkshop(workshopId);
    if (!deletedWorkshop) {
      res.status(404).json(MESSAGES.WORKSHOP_NOT_FOUND);
    } else {
      res.status(204).json(MESSAGES.WORKSHOP_DELETED);
    }
  } catch (error) {
    next(error);
  }
};
