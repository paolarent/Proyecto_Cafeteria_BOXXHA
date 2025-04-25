// src/controllers/userController.ts
import { Request, Response } from 'express';
import { updateUser, updateContra } from '../services/userService';

const actualizarUser = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ mensaje: "No autorizado" });
            return
        }
        const id_usuario = req.user.id_usuario;
        const  { nombre, apellido, usuario } = req.body;

        const usuarioActualizado = await updateUser({ id_usuario, nombre, apellido, usuario});
        res.status(200).json({ mensaje: "Usuario actualizado con éxito ", usuarioActualizado});
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario" });
    }
}

const actualizarContra = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ mensaje: "No autorizado" });
            return
        }
        const id_usuario = req.user.id_usuario;
        const { contra } = req.body;
        const user = await updateContra({ id_usuario, contra });

        res.status(200).json({ mensaje: "Contraseña actualizada con éxito", user });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar contraseña" });
    } 
}

export { actualizarUser, actualizarContra };