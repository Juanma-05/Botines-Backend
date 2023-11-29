import { Request, Response } from 'express';
import {Products2} from "../entities/Products2"

export const createProducts2 = async (req: Request, res: Response) => {

    try {
        const { name, price, img } = req.body;

        const prod = new Products2();
        prod.name = name;
        prod.price= price;
        prod.img = img;

        await prod.save();

        return res.json(prod);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export const getProducts2 = async (req: Request, res: Response) => {

    try {
        const prod = await Products2.find();
        return res.json(prod);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}