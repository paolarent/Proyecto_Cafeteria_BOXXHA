// src/services/authService.ts
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { usuario_tipo_usuario } from '@prisma/client';

export const registerUser = async (data: {
  nombre: string,
  apellido: string,
  email?: string,
  numero_tel?: string,
  usuario: string,
  contra: string,
}) => {
  const { nombre, apellido, email, numero_tel, usuario, contra } = data;

  // Validación de campos requeridos
  if (!nombre || !apellido || !usuario || !contra) {
    throw new Error("Todos los campos obligatorios deben estar completos.");
  }

  // Validación exclusiva: solo uno entre email o numero_tel
  if ((!email && !numero_tel) || (email && numero_tel)) {
    throw new Error("Debes ingresar solo uno: email o número de teléfono, no ambos.");
  }

  // Validación de usuario único
  const existingUser = await prisma.usuario.findFirst({
    where: {
      OR: [
        { usuario },
        { email },
        { numero_tel }
      ]
    }
  });

  if (existingUser) {
    throw new Error("El nombre de usuario, email o número ya está registrado.");
  }

  // Encriptar contraseña
  const hashedPassword = await bcrypt.hash(contra, 10);

  // Crear usuario
  const newUser = await prisma.usuario.create({
    data: {
      nombre,
      apellido,
      usuario,
      contra: hashedPassword,
      email: email ?? null,
      numero_tel: numero_tel ?? null,
      // tipo_usuario será "cliente" por defecto desde Prisma
    }
  });

  return {
    message: "Usuario registrado exitosamente",
    user: {
      id: newUser.id_usuario,
      usuario: newUser.usuario,
      tipo_usuario: newUser.tipo_usuario
    }
  };
};


export const registerEmpleado= async (data: {
  nombre: string,
  apellido: string,
  email?: string,
  numero_tel?: string,
  usuario: string,
  contra: string,
  tipo_usuario?: string,
}) => {
  const { nombre, apellido, email, numero_tel, usuario, contra, tipo_usuario } = data;

  // Validación de campos requeridos
  if (!nombre || !apellido || !usuario || !contra) {
    throw new Error("Todos los campos obligatorios deben estar completos.");
  }


  // Validación exclusiva: solo uno entre email o numero_tel
  if ((!email && !numero_tel) || (email && numero_tel)) {
    throw new Error("Debes ingresar solo uno: email o número de teléfono, no ambos.");
  }

  // Validación de usuario único
  const existingUser = await prisma.usuario.findFirst({
    where: {
      OR: [
        { usuario },
        { email },
        { numero_tel }
      ]
    }
  });

  if (existingUser) {
    throw new Error("El nombre de usuario, email o número ya está registrado.");
  }

  // Encriptar contraseña
  const hashedPassword = await bcrypt.hash(contra, 10);
  // Crear usuario
  const newUser = await prisma.usuario.create({
  data: {
    nombre,
    apellido,
    usuario,
    contra: hashedPassword,
    email: email ?? null,
    numero_tel: numero_tel ?? null,
    tipo_usuario: usuario_tipo_usuario.empleado,  
    }
  });
  return {
    message: "Usuario registrado exitosamente",
    user: {
      id: newUser.id_usuario,
      usuario: newUser.usuario,
      tipo_usuario: newUser.tipo_usuario
    }
  };
  
};

export const updateEmpleado = async (data: {
  nombre: string,
  apellido: string,
  email?: string,
  numero_tel?: string,
  usuario: string,
  contra: string,
  tipo_usuario?: string,
}) => {
  const { nombre, apellido, email, numero_tel, usuario, contra, tipo_usuario } = data;

};

export const loginUser = async (identificador: string, contra: string) => {
  if (!identificador || !contra) {
    throw new Error("Faltan datos de inicio de sesión.");
  }

  // Buscar al usuario por email, numero_tel o nombre de usuario
  const user = await prisma.usuario.findFirst({
    where: {
      OR: [
        { usuario: identificador },
        { email: identificador },
        { numero_tel: identificador }
      ]
    }
  });

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  const isPasswordCorrect = await bcrypt.compare(contra, user.contra);

  if (!isPasswordCorrect) {
    throw new Error("Contraseña incorrecta.");
  }

  // Generar token JWT
  //const token = jwt.sign(
   // { id: user.id_usuario },
   // process.env.JWT_SECRET as string,
    //{ expiresIn: "5h" }
  //);
  const token = generateToken(user.id_usuario);

  return {
    message: "Inicio de sesión exitoso",
    token: token,
    user: {
      id: user.id_usuario,
      usuario: user.usuario,
      tipo_usuario: user.tipo_usuario
    }
  };
};

function generateToken(id_usuario: number){
  return jwt.sign({id_usuario}, process.env.JWT_SECRET as string, {expiresIn: "3h"});
}

export const verificarTipoUsuario = async (id: number) => {
  if (!id){
    throw new Error ("Falta el id del usuario");
  }

  const user = await prisma.usuario.findFirst({
    where: {id_usuario : id}
  });

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }
  
  return {user: {tipo_usuario: user.tipo_usuario}};
}