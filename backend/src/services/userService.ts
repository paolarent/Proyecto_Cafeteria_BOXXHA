import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

// Actualizar datos de usuario
export const updateUser = async (data:{
    id_usuario: number,
    nombre: string,
    apellido: string,
    usuario: string,
}) => {
    const { id_usuario, nombre, apellido, usuario } = data;

    const updatedUser = await prisma.usuario.update({
        where: { id_usuario },
        data: {
        nombre,
        apellido,
        usuario,
        },
    });

    return updatedUser;
};

// Actualizar contraseña
export const updateContra = async (data:{
    id_usuario: number,
    contra: string,
}) => {
    const { id_usuario, contra } = data;

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(contra, 10);

    const updatedUser = await prisma.usuario.update({
        where: { id_usuario },
        data: { contra: hashedPassword },
    });

    return updatedUser;

};
