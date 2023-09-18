import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { AuthService } from "../../../shared/axios";


const register =async (req:Request):Promise<IGenericResponse> =>{
    const result:IGenericResponse = await AuthService.post('/auth/register', req.body);
      return result;
}
const login =async (req:Request):Promise<IGenericResponse> =>{
    const result:IGenericResponse = await AuthService.post('/auth/login', req.body);
      return result;
}


export const UserService = {
    register,
    login
}