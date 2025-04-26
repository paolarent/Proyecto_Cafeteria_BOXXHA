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

    const validate = await prisma.usuario.findUnique({
        where: { usuario },
    });

    if (validate) {
        throw new Error("El username especificado ya existe. Intente con otro");
    }

    const updatedUser = await prisma.usuario.update({
        where: { id_usuario },
        data: {
        nombre,
        apellido,
        usuario,
        },
    });

    return updatedUser.usuario;
};

// Actualizar contraseña
export const updateContra = async (data:{
    id_usuario: number,
    antiguaContra: string,
    contra: string,
}) => {
    const { id_usuario, antiguaContra, contra } = data;

    // Obtener usuario y contra actual
    const usuario = await prisma.usuario.findUnique({
        where: { id_usuario },
    });

    if (!usuario){
        throw new Error("Usuario no encontrado");
    }

    const validate = await bcrypt.compare(antiguaContra, usuario.contra);

    if (!validate){
        throw new Error("La contraseña anterior no coincide");
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(contra, 10);

    const updatedContra = await prisma.usuario.update({
        where: { id_usuario },
        data: { contra: hashedPassword },
    });

    return updatedContra;

};
