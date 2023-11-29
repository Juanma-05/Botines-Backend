import { Request, Response } from 'express';
import { User } from '../entities/User';
import { AppDataSource } from '../database';

export const login = async (req: Request, res: Response) => {

    const {email, password} = req.body

    try{
        const usuario = await AppDataSource.manager.findOne(User, {where:{email, password}})
        if (usuario) {res.json({mensaje: "ingreso correcto"})}

        else {res.status(400).json({mensaje: "ingreso fallido"})}
    }
    catch(error){
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }    }
}