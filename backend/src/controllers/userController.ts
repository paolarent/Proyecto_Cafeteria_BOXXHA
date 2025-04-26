// src/controllers/userController.ts
import { Request, Response } from 'express';
import { updateUser, updateContra } from '../services/userService';

const actualizarUser = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ message: "No autorizado" });
            return
        }
        const id_usuario = req.user.id_usuario;
        const  { nombre, apellido, usuario } = req.body;

        const usuarioActualizado = await updateUser({ id_usuario, nombre, apellido, usuario});
        res.status(200).json({ message: "Usuario actualizado con éxito ", usuarioActualizado});
    } catch (error: any ) {
        const statusCode = error.message === "El username especificado ya existe. Intente con otro" ? 400 : 500;
        res.status(statusCode).json({ message: error.message || "Error al actualizar usuario" });
    }
}

const actualizarContra = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ message: "No autorizado" });
            return
        }
        const id_usuario = req.user.id_usuario;
        const { antiguaContra, contra } = req.body;
        const user = await updateContra({ id_usuario, antiguaContra, contra });

        res.status(200).json({ message: "Contraseña actualizada con éxito", user });
    } catch (error: any) {
        const statusCode = error.message === "La contraseña anterior no coincide" ? 400 :
        error.message === "Usuario no encontrado" ? 404 : 500;

        res.status(statusCode).json({ message: error.message || "Error al actualizar contraseña" });
    } 
}

export { actualizarUser, actualizarContra };