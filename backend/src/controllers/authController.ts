import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../common/messages";
import { IUser } from "../models/userModel";
import * as userService from "../services/userService";
import * as authService from "../services/authService";
import * as redisService from "../services/redisService";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData: IUser = req.body;
    const savedUser = await userService.createUser(userData);
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;
    const user = await userService.getUserByEmail(email);
    if (user == null) {
      res.status(404).json(MESSAGES.AUTH_LOGIN_ERROR);
      return;
    }
    const isPasswordMatch = await authService.isPasswordMatch(
      password,
      user!.password as string
    );
    if (!isPasswordMatch) {
      res.status(401).json(MESSAGES.AUTH_LOGIN_ERROR);
      return;
    }
    const token = await authService.createToken(user!);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const registerGoogleUser = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  throw new Error("Not Implemented");
};

export const loginGoogleUser = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  throw new Error("Not Implemented");
};

export const refreshToken = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await redisService.deleteLoginToken(res.locals.user!.id);
    const token = await authService.createToken(res.locals.user!);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await redisService.deleteLoginToken(res.locals.user!.id);
    res.status(200).json(MESSAGES.AUTH_LOGOUT);
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // check token
    const token: string = req.body.token;
    const email: string = req.body.email;
    const redis_token = await redisService.getResetPasswordToken(email);
    if (token != redis_token && token != null && redis_token != null) {
      res.status(401).json(MESSAGES.AUTH_RESET_PASSWORD_INVALID_TOKEN);
      return;
    }
    // update user
    let user = await userService.getUserByEmail(email);
    if (user == null) {
      res.status(400).json(MESSAGES.USER_NOT_FOUND);
      return;
    }
    const password: string = req.body.password;
    user = await userService.updateUserById(user!._id, {
      password: password,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const token = await authService.createResetPasswordToken(email);
    res.status(200).json({
      token: token,
    });
  } catch (error) {
    next(error);
  }
};
