import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.producto.create({
    data: {
      id_producto: 1,
      nombre: 'Latte',
      sabor: 'Vainilla',
      tipo_prod: 'bebidaf',
      u_med: 'oz',
      precio: 85.0
    }
  });

  console.log('Datos insertados');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
