import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { UserService } from "./user.service";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await UserService.register(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };
const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await UserService.login(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };


  export const UserController ={
    register,
    login
  }