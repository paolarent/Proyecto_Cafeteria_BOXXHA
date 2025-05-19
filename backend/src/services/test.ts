import {pedidosRecientes} from './dashboardService';

async function main() {
  const ordenes = await pedidosRecientes();
  console.log(JSON.stringify(ordenes, null, 2)); // Muestra ordenado y legible
}

main().catch((e) => {
    console.error('Error al consultar ordenes', e);
});