import { IGenericResponse } from '../../../interfaces/common';
import { BlogService as HttpService } from '../../../shared/axios';
import { Request } from 'express';
const insertIntoDb = async (req: Request):Promise<IGenericResponse> => {
  
  
    const result:IGenericResponse = await HttpService.post('/blog/create-blog', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return result;
};
const getAllFromDb = async (req: Request):Promise<IGenericResponse> => {
  
  const result:IGenericResponse = await HttpService.get('/blog',{
    params:req.query,
  
  });
  return result;
};
const getById = async (req: Request):Promise<IGenericResponse> => {
  
  const result:IGenericResponse = await HttpService.get(`/blog/${req.params.id}`,{
    params:req.query,
  
  });
  return result;
};
const updateBlog = async (req: Request):Promise<IGenericResponse> => {
   
  const result:IGenericResponse = await HttpService.patch(`/blog/update/${req.params.id}`,req.body,{
    headers: {
        Authorization: req.headers.authorization
      }
  });
  return result;
};
const deleteBlog = async (req: Request):Promise<IGenericResponse> => {
   
  const result:IGenericResponse = await HttpService.delete(`/blog/${req.params.id}`,{
    headers: {
        Authorization: req.headers.authorization
      }
  });
  return result;
};

export const BlogService = {
  insertIntoDb,
  getAllFromDb,
  getById,
  updateBlog,
  deleteBlog
};
