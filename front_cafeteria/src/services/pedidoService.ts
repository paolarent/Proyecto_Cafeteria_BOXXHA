import axios from "axios";
const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/pedidoRoutes";
import { Pedido } from "../contexts/PedidoContext";

type ExtraInput = {
  id: number;
  cantidad: number;
};

type PedidoDetalleInput = {
  id_bebcaliente?: number;
  id_bebfria?: number;
  id_frappe?: number;
  id_postre?: number;
  id_tamano?: number;
  id_leche?: number;
  regular?: boolean;
  total: number;
  extras?: ExtraInput[];
};

type PedidoCompletoInput = {
  total: number;
  detalle_pedido: PedidoDetalleInput[];
};

// Transformar Pedido genérico a PedidoDetalleInput
function transformarPedido(pedido: Pedido): PedidoDetalleInput {
  return {
    id_bebcaliente: pedido.tipo === 'caliente' ? pedido.id_bebida : undefined,
    id_bebfria: pedido.tipo === 'frio' ? pedido.id_bebida : undefined,
    id_frappe: pedido.tipo === 'frappe' ? pedido.id_bebida : undefined,
    id_postre: pedido.tipo === 'postre' ? pedido.id_postre : undefined,
    id_tamano: pedido.id_tamano,
    id_leche: pedido.id_leche,
    regular: pedido.regular,
    total: pedido.total,
    extras: pedido.extras?.map(e => ({
      id: e.id,
      cantidad: e.cantidad,
    })),
  };
}

// Función exportada que recibe un arreglo de Pedido y los transforma antes de enviarlos
export const enviarPedidos = async (pedidos: Pedido[]) => {
  const pedidosTransformados = pedidos.map(transformarPedido);
  return postPedido(pedidosTransformados);
};


export const postPedido = async (
  pedidos: PedidoDetalleInput[]
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró token de autenticación");
    }

    const totalGeneral = pedidos.reduce((acc, p) => acc + p.total, 0);

    const pedidoCompleto: PedidoCompletoInput = {
      total: totalGeneral,
      detalle_pedido: pedidos,
    };

    const response = await axios.post(`${API_BASE_URL}/pedidos`, pedidoCompleto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error en postPedido:", error);
    return { success: false, error };
  }
};

export const crearNoti = async (idPedido: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/notificaciones`, {
      idPedido,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error en crearNoti:", error);
    return { success: false, error };
  }
}