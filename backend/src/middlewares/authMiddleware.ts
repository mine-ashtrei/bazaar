import { Request, Response, NextFunction } from "express";
import { MESSAGES } from "../common/messages";
import * as authService from "../services/authService";
import * as redisService from "../services/redisService";
import * as userService from "../services/userService";
import { UserRole } from "../models/userModel";

export const authenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader == null) {
      res.status(401).json(MESSAGES.AUTH_MISSING_TOKEN);
      return;
    }
    const token = authHeader!.split(" ")[1];
    if (token == null) {
      res.status(401).json(MESSAGES.AUTH_MISSING_TOKEN);
      return;
    }
    // check token
    const payload = await authService.authenticateJWT(token!);
    if (payload == null) {
      res.status(400).json(MESSAGES.AUTH_BAD_TOKEN);
      return;
    }
    const redisToken = await redisService.getLoginToken(payload!.id.toString());
    if (redisToken != token) {
      res.status(401).json(MESSAGES.AUTH_UNAUTHORIZE);
      return;
    }
    const user = await userService.getUserById(payload!.id);
    if (user == null) {
      res.status(404).json(MESSAGES.USER_NOT_FOUND);
      return;
    }
    res.locals.user = user!;
    next();
  } catch (error) {
    next(error);
  }
};

export const hasRole = (roles: UserRole[]) => {
  return (_req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    if (user == null) {
      res.status(401).json(MESSAGES.AUTH_UNAUTHORIZE);
      return;
    }
    if (!roles.includes(user.role)) {
      res.status(403).json(MESSAGES.AUTH_FORBIDDEN);
      return;
    }
    next();
  };
};
