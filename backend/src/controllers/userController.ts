import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/userModel";
import { MESSAGES } from "../common/messages";
import * as userService from "../services/userService";

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.sanitizedParams.id!;
    const user = await userService.getUserById(userId);
    if (user == null) {
      res.status(404).json(MESSAGES.USER_NOT_FOUND);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.sanitizedParams.id!;
    const updatedData: Partial<IUser> = req.body;
    const user = await userService.updateUserById(userId, updatedData);
    if (!user) {
      res.status(404).json(MESSAGES.USER_NOT_FOUND);
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.sanitizedParams.id!;
    const deletedUser = await userService.deleteUserById(userId);
    if (!deletedUser) {
      res.status(404).json(MESSAGES.USER_NOT_FOUND);
    } else {
      res.status(204).json(MESSAGES.USER_DELETE_SUCCESFULLY);
    }
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(res.locals.user!);
  } catch (error) {
    next(error);
  }
};
