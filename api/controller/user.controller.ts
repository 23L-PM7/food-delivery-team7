import { UserModel } from "../models/user.models";

export async function getUser(_req:any, res:any) {
    const user = await UserModel.find();
  
    res.json(user);
  }
  
  export async function createUser(req:any, res:any) {
    const {userName , userEmail,  userPassword}= req.body
    const user = await UserModel.create({
      userName,
      userEmail,
      userPassword
    });
  
    res.json(user);
  }