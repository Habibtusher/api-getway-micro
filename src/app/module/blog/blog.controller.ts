import { Request, Response, NextFunction } from 'express';
import { BlogService } from './blog.service';
import sendResponse from '../../../shared/response';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getById(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.updateBlog(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.deleteBlog(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BlogController = {
  insertIntoDb,
  getAllFromDb,
  getById,
  updateBlog,
  deleteBlog
};
