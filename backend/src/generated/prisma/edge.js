
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
exports.pago_metodo_pago = exports.$Enums.pago_metodo_pago = {
  tarjeta: 'tarjeta',
  efectivo: 'efectivo'
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

exports.notificacion_status = exports.$Enums.notificacion_status = {
  pendiente: 'pendiente',
  enviado: 'enviado',
  leido: 'leido'
};

exports.pedido_status = exports.$Enums.pedido_status = {
  pendiente: 'pendiente',
  procesando: 'procesando',
  listo: 'listo',
  entregado: 'entregado'
};

exports.pago_status = exports.$Enums.pago_status = {
  pendiente: 'pendiente',
  exitoso: 'exitoso',
  fallido: 'fallido'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Home\\Desktop\\BOXXHA_CAFETERIA\\Proyecto_Cafeteria_BOXXHA\\backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Home\\Desktop\\BOXXHA_CAFETERIA\\Proyecto_Cafeteria_BOXXHA\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel detalle_extra_pedido {\n  id_detalle     Int            @id\n  id_extra       Int\n  cantidad       Int\n  precio_extra   Float          @db.Float\n  detalle_pedido detalle_pedido @relation(fields: [id_detalle], references: [id_detalle], onDelete: NoAction, onUpdate: NoAction, map: \"fk_detalleped_detext\")\n  extra          extra          @relation(fields: [id_extra], references: [id_extra], onDelete: NoAction, onUpdate: NoAction, map: \"fk_extra_detalleext\")\n\n  @@index([id_extra], map: \"fk_extra_detalleext_idx\")\n}\n\nmodel detalle_pedido {\n  id_detalle           Int                   @id\n  id_pedido            Int\n  id_producto          Int\n  cantidad             Int\n  precio_unitario      Float                 @db.Float\n  subtotal             Float                 @db.Float\n  detalle_extra_pedido detalle_extra_pedido?\n  pedido               pedido                @relation(fields: [id_pedido], references: [id_pedido], onDelete: NoAction, onUpdate: NoAction, map: \"fk_pedido_detalleped\")\n  producto             producto              @relation(fields: [id_producto], references: [id_producto], onDelete: NoAction, onUpdate: NoAction, map: \"fk_producto_detalleped\")\n\n  @@index([id_pedido], map: \"fk_pedido_detalleped_idx\")\n  @@index([id_producto], map: \"fk_producto_detalleped_idx\")\n}\n\nmodel extra {\n  id_extra             Int                    @id\n  nombre               String                 @db.VarChar(25)\n  precio               Float                  @db.Float\n  detalle_extra_pedido detalle_extra_pedido[]\n}\n\nmodel notificacion {\n  id_notificacion Int                 @id\n  id_pedido       Int\n  mensaje         String              @db.VarChar(50)\n  status          notificacion_status\n  fecha           DateTime            @default(now()) @db.Timestamp(0)\n  pedido          pedido              @relation(fields: [id_pedido], references: [id_pedido], onDelete: NoAction, onUpdate: NoAction, map: \"fk_pedido_notif\")\n\n  @@index([id_pedido], map: \"fk_pedido_notif_idx\")\n}\n\nmodel pago {\n  id_pago      Int              @id\n  id_pedido    Int\n  metodo_pago  pago_metodo_pago\n  monto_pagado Float            @db.Float\n  fecha_pago   DateTime         @default(now()) @db.Timestamp(0)\n  status       pago_status\n  pedido       pedido           @relation(fields: [id_pedido], references: [id_pedido], onDelete: NoAction, onUpdate: NoAction, map: \"fk_pedido_pago\")\n\n  @@index([id_pedido], map: \"fk_pedido_pago_idx\")\n}\n\nmodel pedido {\n  id_pedido      Int              @id\n  id_usuario     Int\n  fecha          DateTime         @default(now()) @db.Timestamp(0)\n  status         pedido_status\n  codigo_conf    String           @db.VarChar(6)\n  total          Float?           @db.Float\n  detalle_pedido detalle_pedido[]\n  notificacion   notificacion[]\n  pago           pago[]\n  usuario        usuario          @relation(fields: [id_usuario], references: [id_usuario], onDelete: NoAction, onUpdate: NoAction, map: \"fk_usuario_pedido\")\n\n  @@index([id_usuario], map: \"id_usuario_idx\")\n}\n\nmodel producto {\n  id_producto    Int                @id\n  nombre         String             @db.VarChar(20)\n  sabor          String             @db.VarChar(15)\n  tipo_prod      producto_tipo_prod\n  u_med          producto_u_med\n  precio         Float              @db.Float\n  detalle_pedido detalle_pedido[]\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel usuario {\n  id_usuario     Int                  @id @default(autoincrement())\n  nombre         String               @db.VarChar(15)\n  apellido       String               @db.VarChar(25)\n  email          String?              @unique @db.VarChar(45)\n  numero_tel     String?              @db.VarChar(10)\n  usuario        String               @unique @db.VarChar(15)\n  contra         String               @db.VarChar(12)\n  tipo_usuario   usuario_tipo_usuario @default(cliente)\n  fecha_registro DateTime             @default(now()) @db.Timestamp(0)\n  pedido         pedido[]\n}\n\nenum pago_metodo_pago {\n  tarjeta\n  efectivo\n}\n\nenum producto_tipo_prod {\n  bebidac\n  bebidaf\n  postre\n  nuevo\n}\n\nenum producto_u_med {\n  pza\n  oz\n}\n\nenum notificacion_status {\n  pendiente\n  enviado\n  leido\n}\n\nenum pedido_status {\n  pendiente\n  procesando\n  listo\n  entregado\n}\n\nenum pago_status {\n  pendiente\n  exitoso\n  fallido\n}\n\nenum usuario_tipo_usuario {\n  cliente\n  empleado\n  admin\n}\n",
  "inlineSchemaHash": "14adaccdc2886935bb5419950a9998773d0c023238ac9926060548af4b22ef14",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"detalle_extra_pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_detalle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio_extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detalle_pedido\",\"nativeType\":null,\"relationName\":\"detalle_extra_pedidoTodetalle_pedido\",\"relationFromFields\":[\"id_detalle\"],\"relationToFields\":[\"id_detalle\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"extra\",\"nativeType\":null,\"relationName\":\"detalle_extra_pedidoToextra\",\"relationFromFields\":[\"id_extra\"],\"relationToFields\":[\"id_extra\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"detalle_pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_detalle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_extra_pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detalle_extra_pedido\",\"nativeType\":null,\"relationName\":\"detalle_extra_pedidoTodetalle_pedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"detalle_pedidoTopedido\",\"relationFromFields\":[\"id_pedido\"],\"relationToFields\":[\"id_pedido\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto\",\"nativeType\":null,\"relationName\":\"detalle_pedidoToproducto\",\"relationFromFields\":[\"id_producto\"],\"relationToFields\":[\"id_producto\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"extra\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_extra_pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detalle_extra_pedido\",\"nativeType\":null,\"relationName\":\"detalle_extra_pedidoToextra\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"notificacion\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_notificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notificacion_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"notificacionTopedido\",\"relationFromFields\":[\"id_pedido\"],\"relationToFields\":[\"id_pedido\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pago\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metodo_pago\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pago_metodo_pago\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto_pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pago_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"pagoTopedido\",\"relationFromFields\":[\"id_pedido\"],\"relationToFields\":[\"id_pedido\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_conf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detalle_pedido\",\"nativeType\":null,\"relationName\":\"detalle_pedidoTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notificacion\",\"nativeType\":null,\"relationName\":\"notificacionTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pago\",\"nativeType\":null,\"relationName\":\"pagoTopedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"nativeType\":null,\"relationName\":\"pedidoTousuario\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id_usuario\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"producto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sabor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_prod\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto_tipo_prod\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"u_med\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto_u_med\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detalle_pedido\",\"nativeType\":null,\"relationName\":\"detalle_pedidoToproducto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"12\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_usuario\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"usuario_tipo_usuario\",\"nativeType\":null,\"default\":\"cliente\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_registro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pedido\",\"nativeType\":null,\"relationName\":\"pedidoTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"}},\"enums\":{\"pago_metodo_pago\":{\"values\":[{\"name\":\"tarjeta\",\"dbName\":null},{\"name\":\"efectivo\",\"dbName\":null}],\"dbName\":null},\"producto_tipo_prod\":{\"values\":[{\"name\":\"bebidac\",\"dbName\":null},{\"name\":\"bebidaf\",\"dbName\":null},{\"name\":\"postre\",\"dbName\":null},{\"name\":\"nuevo\",\"dbName\":null}],\"dbName\":null},\"producto_u_med\":{\"values\":[{\"name\":\"pza\",\"dbName\":null},{\"name\":\"oz\",\"dbName\":null}],\"dbName\":null},\"notificacion_status\":{\"values\":[{\"name\":\"pendiente\",\"dbName\":null},{\"name\":\"enviado\",\"dbName\":null},{\"name\":\"leido\",\"dbName\":null}],\"dbName\":null},\"pedido_status\":{\"values\":[{\"name\":\"pendiente\",\"dbName\":null},{\"name\":\"procesando\",\"dbName\":null},{\"name\":\"listo\",\"dbName\":null},{\"name\":\"entregado\",\"dbName\":null}],\"dbName\":null},\"pago_status\":{\"values\":[{\"name\":\"pendiente\",\"dbName\":null},{\"name\":\"exitoso\",\"dbName\":null},{\"name\":\"fallido\",\"dbName\":null}],\"dbName\":null},\"usuario_tipo_usuario\":{\"values\":[{\"name\":\"cliente\",\"dbName\":null},{\"name\":\"empleado\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

