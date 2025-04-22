
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Detalle_extra_pedidoScalarFieldEnum = {
  id_detalle: 'id_detalle',
  id_extra: 'id_extra',
  cantidad: 'cantidad',
  precio_extra: 'precio_extra'
};

exports.Prisma.Detalle_pedidoScalarFieldEnum = {
  id_detalle: 'id_detalle',
  id_pedido: 'id_pedido',
  id_producto: 'id_producto',
  cantidad: 'cantidad',
  precio_unitario: 'precio_unitario',
  subtotal: 'subtotal'
};

exports.Prisma.ExtraScalarFieldEnum = {
  id_extra: 'id_extra',
  nombre: 'nombre',
  precio: 'precio'
};

exports.Prisma.NotificacionScalarFieldEnum = {
  id_notificacion: 'id_notificacion',
  id_pedido: 'id_pedido',
  mensaje: 'mensaje',
  status: 'status',
  fecha: 'fecha'
};

exports.Prisma.PagoScalarFieldEnum = {
  id_pago: 'id_pago',
  id_pedido: 'id_pedido',
  metodo_pago: 'metodo_pago',
  monto_pagado: 'monto_pagado',
  fecha_pago: 'fecha_pago',
  status: 'status'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id_pedido: 'id_pedido',
  id_usuario: 'id_usuario',
  fecha: 'fecha',
  status: 'status',
  codigo_conf: 'codigo_conf',
  total: 'total'
};

exports.Prisma.ProductoScalarFieldEnum = {
  id_producto: 'id_producto',
  nombre: 'nombre',
  sabor: 'sabor',
  tipo_prod: 'tipo_prod',
  u_med: 'u_med',
  precio: 'precio'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  numero_tel: 'numero_tel',
  usuario: 'usuario',
  contra: 'contra',
  tipo_usuario: 'tipo_usuario',
  fecha_registro: 'fecha_registro'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.extraOrderByRelevanceFieldEnum = {
  nombre: 'nombre'
};

exports.Prisma.notificacionOrderByRelevanceFieldEnum = {
  mensaje: 'mensaje'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.pedidoOrderByRelevanceFieldEnum = {
  codigo_conf: 'codigo_conf'
};

exports.Prisma.productoOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  sabor: 'sabor'
};

exports.Prisma.usuarioOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  numero_tel: 'numero_tel',
  usuario: 'usuario',
  contra: 'contra'
};
exports.notificacion_status = exports.$Enums.notificacion_status = {
  pendiente: 'pendiente',
  enviado: 'enviado',
  leido: 'leido'
};

exports.pago_metodo_pago = exports.$Enums.pago_metodo_pago = {
  tarjeta: 'tarjeta',
  efectivo: 'efectivo'
};

exports.pago_status = exports.$Enums.pago_status = {
  pendiente: 'pendiente',
  exitoso: 'exitoso',
  fallido: 'fallido'
};

exports.pedido_status = exports.$Enums.pedido_status = {
  pendiente: 'pendiente',
  procesando: 'procesando',
  listo: 'listo',
  entregado: 'entregado'
};

exports.producto_tipo_prod = exports.$Enums.producto_tipo_prod = {
  bebidac: 'bebidac',
  bebidaf: 'bebidaf',
  postre: 'postre',
  nuevo: 'nuevo'
};

exports.producto_u_med = exports.$Enums.producto_u_med = {
  pza: 'pza',
  oz: 'oz'
};

exports.usuario_tipo_usuario = exports.$Enums.usuario_tipo_usuario = {
  cliente: 'cliente',
  empleado: 'empleado',
  admin: 'admin'
};

exports.Prisma.ModelName = {
  detalle_extra_pedido: 'detalle_extra_pedido',
  detalle_pedido: 'detalle_pedido',
  extra: 'extra',
  notificacion: 'notificacion',
  pago: 'pago',
  pedido: 'pedido',
  producto: 'producto',
  usuario: 'usuario'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
