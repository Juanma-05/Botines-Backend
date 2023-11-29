import { Request, Response } from 'express';
import {Products1} from "../entities/Products1"

export const createProducts1 = async (req: Request, res: Response) => {

    try {
        const { name, price, img } = req.body;

        const prod = new Products1();
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

export const getProducts1 = async (req: Request, res: Response) => {

    try {
        const prod = await Products1.find();
        return res.json(prod);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}