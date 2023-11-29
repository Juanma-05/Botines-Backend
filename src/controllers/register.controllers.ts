import { Request, Response } from 'express';
import { User } from '../entities/User';

export const register = async (req: Request, res: Response) => {

    try {
        const {email, password} = req.body;

        // Verificar si el email ya está en uso
            const existingUser = await User.findOne({where: {email}});

            if (existingUser) {
                return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
            }


        const user = new User();
        user.email = email;
        user.password = password;

        await user.save();

        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }

}

// export const getUsers = async (req: Request, res: Response) => {
//     try{
//         const {email, password} = req.body
//         const comparador = await User .findOne( {where:{email, password}})
//         if (comparador) {
//             return res.json({mensaje: "ingreso correcto"})}

//         else {res.status(400).json({mensaje: "ingreso fallido"})}
//     }
//     catch(error){
//         console.log(error)
    // }
    // // try {
    //     const users = await User.find();
    //     return res.json(users);
    // } catch (error) {
    //     if (error instanceof Error) {
    //         return res.status(400).json({ message: error.message });
    //     }
    // }
// }

// export const updateUser = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;

//         const user = await User.findOneBy({ id: parseInt(req.params.id) });

//         if (!user) return res.status(404).json({ message: 'Usuario no existente' });

//         await User.update({ id: parseInt(id) }, req.body);

//         return res.sendStatus(204);

//     } catch (error) {
//         if (error instanceof Error) {
//             return res.status(400).json({ message: error.message });
//         }
//     }
// }

// export const deleteUser = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;

//         const result = await User.delete({ id: parseInt(id) });

//         if (result.affected === 0) {
//             return res.status(400).json({ message: 'Usuario no encontrado' });
//         }

//         return res.status(204);

//     } catch (error) {
//         if (error instanceof Error) {
//             return res.status(400).json({ message: error.message });
//         }
//     }

// }

// export const getUser = async (req: Request, res: Response) => {

//     try {
//         const { id } = req.params;

//         const user = await User.findOneBy({ id: parseInt(id) });

//         return res.json(user);

//     } catch (error) {
//         if (error instanceof Error) {
//             return res.status(400).json({ message: error.message });
//         }

//     }

// }