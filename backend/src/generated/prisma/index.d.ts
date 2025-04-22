
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model detalle_extra_pedido
 * 
 */
export type detalle_extra_pedido = $Result.DefaultSelection<Prisma.$detalle_extra_pedidoPayload>
/**
 * Model detalle_pedido
 * 
 */
export type detalle_pedido = $Result.DefaultSelection<Prisma.$detalle_pedidoPayload>
/**
 * Model extra
 * 
 */
export type extra = $Result.DefaultSelection<Prisma.$extraPayload>
/**
 * Model notificacion
 * 
 */
export type notificacion = $Result.DefaultSelection<Prisma.$notificacionPayload>
/**
 * Model pago
 * 
 */
export type pago = $Result.DefaultSelection<Prisma.$pagoPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model producto
 * 
 */
export type producto = $Result.DefaultSelection<Prisma.$productoPayload>
/**
 * Model usuario
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const pago_metodo_pago: {
  tarjeta: 'tarjeta',
  efectivo: 'efectivo'
};

export type pago_metodo_pago = (typeof pago_metodo_pago)[keyof typeof pago_metodo_pago]


export const producto_tipo_prod: {
  bebida: 'bebida',
  postre: 'postre'
};

export type producto_tipo_prod = (typeof producto_tipo_prod)[keyof typeof producto_tipo_prod]


export const producto_u_med: {
  pza: 'pza',
  oz12: 'oz12',
  oz16: 'oz16'
};

export type producto_u_med = (typeof producto_u_med)[keyof typeof producto_u_med]


export const notificacion_status: {
  pendiente: 'pendiente',
  enviado: 'enviado',
  leido: 'leido'
};

export type notificacion_status = (typeof notificacion_status)[keyof typeof notificacion_status]


export const pedido_status: {
  pendiente: 'pendiente',
  procesando: 'procesando',
  listo: 'listo',
  entregado: 'entregado'
};

export type pedido_status = (typeof pedido_status)[keyof typeof pedido_status]


export const pago_status: {
  pendiente: 'pendiente',
  exitoso: 'exitoso',
  fallido: 'fallido'
};

export type pago_status = (typeof pago_status)[keyof typeof pago_status]


export const usuario_tipo_usuario: {
  cliente: 'cliente',
  empleado: 'empleado',
  admin: 'admin'
};

export type usuario_tipo_usuario = (typeof usuario_tipo_usuario)[keyof typeof usuario_tipo_usuario]

}

export type pago_metodo_pago = $Enums.pago_metodo_pago

export const pago_metodo_pago: typeof $Enums.pago_metodo_pago

export type producto_tipo_prod = $Enums.producto_tipo_prod

export const producto_tipo_prod: typeof $Enums.producto_tipo_prod

export type producto_u_med = $Enums.producto_u_med

export const producto_u_med: typeof $Enums.producto_u_med

export type notificacion_status = $Enums.notificacion_status

export const notificacion_status: typeof $Enums.notificacion_status

export type pedido_status = $Enums.pedido_status

export const pedido_status: typeof $Enums.pedido_status

export type pago_status = $Enums.pago_status

export const pago_status: typeof $Enums.pago_status

export type usuario_tipo_usuario = $Enums.usuario_tipo_usuario

export const usuario_tipo_usuario: typeof $Enums.usuario_tipo_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Detalle_extra_pedidos
 * const detalle_extra_pedidos = await prisma.detalle_extra_pedido.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Detalle_extra_pedidos
   * const detalle_extra_pedidos = await prisma.detalle_extra_pedido.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.detalle_extra_pedido`: Exposes CRUD operations for the **detalle_extra_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_extra_pedidos
    * const detalle_extra_pedidos = await prisma.detalle_extra_pedido.findMany()
    * ```
    */
  get detalle_extra_pedido(): Prisma.detalle_extra_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_pedido`: Exposes CRUD operations for the **detalle_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_pedidos
    * const detalle_pedidos = await prisma.detalle_pedido.findMany()
    * ```
    */
  get detalle_pedido(): Prisma.detalle_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extra`: Exposes CRUD operations for the **extra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extras
    * const extras = await prisma.extra.findMany()
    * ```
    */
  get extra(): Prisma.extraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.notificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    detalle_extra_pedido: 'detalle_extra_pedido',
    detalle_pedido: 'detalle_pedido',
    extra: 'extra',
    notificacion: 'notificacion',
    pago: 'pago',
    pedido: 'pedido',
    producto: 'producto',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "detalle_extra_pedido" | "detalle_pedido" | "extra" | "notificacion" | "pago" | "pedido" | "producto" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      detalle_extra_pedido: {
        payload: Prisma.$detalle_extra_pedidoPayload<ExtArgs>
        fields: Prisma.detalle_extra_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_extra_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_extra_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          findFirst: {
            args: Prisma.detalle_extra_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_extra_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          findMany: {
            args: Prisma.detalle_extra_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>[]
          }
          create: {
            args: Prisma.detalle_extra_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          createMany: {
            args: Prisma.detalle_extra_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detalle_extra_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          update: {
            args: Prisma.detalle_extra_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.detalle_extra_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_extra_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalle_extra_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_extra_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Detalle_extra_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_extra_pedido>
          }
          groupBy: {
            args: Prisma.detalle_extra_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_extra_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_extra_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_extra_pedidoCountAggregateOutputType> | number
          }
        }
      }
      detalle_pedido: {
        payload: Prisma.$detalle_pedidoPayload<ExtArgs>
        fields: Prisma.detalle_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          findFirst: {
            args: Prisma.detalle_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          findMany: {
            args: Prisma.detalle_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>[]
          }
          create: {
            args: Prisma.detalle_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          createMany: {
            args: Prisma.detalle_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detalle_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          update: {
            args: Prisma.detalle_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.detalle_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalle_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Detalle_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_pedido>
          }
          groupBy: {
            args: Prisma.detalle_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_pedidoCountAggregateOutputType> | number
          }
        }
      }
      extra: {
        payload: Prisma.$extraPayload<ExtArgs>
        fields: Prisma.extraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.extraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.extraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          findFirst: {
            args: Prisma.extraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.extraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          findMany: {
            args: Prisma.extraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>[]
          }
          create: {
            args: Prisma.extraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          createMany: {
            args: Prisma.extraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.extraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          update: {
            args: Prisma.extraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          deleteMany: {
            args: Prisma.extraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.extraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.extraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extraPayload>
          }
          aggregate: {
            args: Prisma.ExtraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtra>
          }
          groupBy: {
            args: Prisma.extraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtraGroupByOutputType>[]
          }
          count: {
            args: Prisma.extraCountArgs<ExtArgs>
            result: $Utils.Optional<ExtraCountAggregateOutputType> | number
          }
        }
      }
      notificacion: {
        payload: Prisma.$notificacionPayload<ExtArgs>
        fields: Prisma.notificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findFirst: {
            args: Prisma.notificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findMany: {
            args: Prisma.notificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          create: {
            args: Prisma.notificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          createMany: {
            args: Prisma.notificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          update: {
            args: Prisma.notificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          deleteMany: {
            args: Prisma.notificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.notificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      pago: {
        payload: Prisma.$pagoPayload<ExtArgs>
        fields: Prisma.pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          findFirst: {
            args: Prisma.pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          findMany: {
            args: Prisma.pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>[]
          }
          create: {
            args: Prisma.pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          createMany: {
            args: Prisma.pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          update: {
            args: Prisma.pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          deleteMany: {
            args: Prisma.pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      producto: {
        payload: Prisma.$productoPayload<ExtArgs>
        fields: Prisma.productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findFirst: {
            args: Prisma.productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findMany: {
            args: Prisma.productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          create: {
            args: Prisma.productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          createMany: {
            args: Prisma.productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          update: {
            args: Prisma.productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          deleteMany: {
            args: Prisma.productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.productoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    detalle_extra_pedido?: detalle_extra_pedidoOmit
    detalle_pedido?: detalle_pedidoOmit
    extra?: extraOmit
    notificacion?: notificacionOmit
    pago?: pagoOmit
    pedido?: pedidoOmit
    producto?: productoOmit
    usuario?: usuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExtraCountOutputType
   */

  export type ExtraCountOutputType = {
    detalle_extra_pedido: number
  }

  export type ExtraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_extra_pedido?: boolean | ExtraCountOutputTypeCountDetalle_extra_pedidoArgs
  }

  // Custom InputTypes
  /**
   * ExtraCountOutputType without action
   */
  export type ExtraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtraCountOutputType
     */
    select?: ExtraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExtraCountOutputType without action
   */
  export type ExtraCountOutputTypeCountDetalle_extra_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_extra_pedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    detalle_pedido: number
    notificacion: number
    pago: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_pedido?: boolean | PedidoCountOutputTypeCountDetalle_pedidoArgs
    notificacion?: boolean | PedidoCountOutputTypeCountNotificacionArgs
    pago?: boolean | PedidoCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountDetalle_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountNotificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalle_pedido: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_pedido?: boolean | ProductoCountOutputTypeCountDetalle_pedidoArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetalle_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pedido: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | UsuarioCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model detalle_extra_pedido
   */

  export type AggregateDetalle_extra_pedido = {
    _count: Detalle_extra_pedidoCountAggregateOutputType | null
    _avg: Detalle_extra_pedidoAvgAggregateOutputType | null
    _sum: Detalle_extra_pedidoSumAggregateOutputType | null
    _min: Detalle_extra_pedidoMinAggregateOutputType | null
    _max: Detalle_extra_pedidoMaxAggregateOutputType | null
  }

  export type Detalle_extra_pedidoAvgAggregateOutputType = {
    id_detalle: number | null
    id_extra: number | null
    cantidad: number | null
    precio_extra: number | null
  }

  export type Detalle_extra_pedidoSumAggregateOutputType = {
    id_detalle: number | null
    id_extra: number | null
    cantidad: number | null
    precio_extra: number | null
  }

  export type Detalle_extra_pedidoMinAggregateOutputType = {
    id_detalle: number | null
    id_extra: number | null
    cantidad: number | null
    precio_extra: number | null
  }

  export type Detalle_extra_pedidoMaxAggregateOutputType = {
    id_detalle: number | null
    id_extra: number | null
    cantidad: number | null
    precio_extra: number | null
  }

  export type Detalle_extra_pedidoCountAggregateOutputType = {
    id_detalle: number
    id_extra: number
    cantidad: number
    precio_extra: number
    _all: number
  }


  export type Detalle_extra_pedidoAvgAggregateInputType = {
    id_detalle?: true
    id_extra?: true
    cantidad?: true
    precio_extra?: true
  }

  export type Detalle_extra_pedidoSumAggregateInputType = {
    id_detalle?: true
    id_extra?: true
    cantidad?: true
    precio_extra?: true
  }

  export type Detalle_extra_pedidoMinAggregateInputType = {
    id_detalle?: true
    id_extra?: true
    cantidad?: true
    precio_extra?: true
  }

  export type Detalle_extra_pedidoMaxAggregateInputType = {
    id_detalle?: true
    id_extra?: true
    cantidad?: true
    precio_extra?: true
  }

  export type Detalle_extra_pedidoCountAggregateInputType = {
    id_detalle?: true
    id_extra?: true
    cantidad?: true
    precio_extra?: true
    _all?: true
  }

  export type Detalle_extra_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_extra_pedido to aggregate.
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_extra_pedidos to fetch.
     */
    orderBy?: detalle_extra_pedidoOrderByWithRelationInput | detalle_extra_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_extra_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_extra_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_extra_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_extra_pedidos
    **/
    _count?: true | Detalle_extra_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_extra_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_extra_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_extra_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_extra_pedidoMaxAggregateInputType
  }

  export type GetDetalle_extra_pedidoAggregateType<T extends Detalle_extra_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_extra_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_extra_pedido[P]>
      : GetScalarType<T[P], AggregateDetalle_extra_pedido[P]>
  }




  export type detalle_extra_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_extra_pedidoWhereInput
    orderBy?: detalle_extra_pedidoOrderByWithAggregationInput | detalle_extra_pedidoOrderByWithAggregationInput[]
    by: Detalle_extra_pedidoScalarFieldEnum[] | Detalle_extra_pedidoScalarFieldEnum
    having?: detalle_extra_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_extra_pedidoCountAggregateInputType | true
    _avg?: Detalle_extra_pedidoAvgAggregateInputType
    _sum?: Detalle_extra_pedidoSumAggregateInputType
    _min?: Detalle_extra_pedidoMinAggregateInputType
    _max?: Detalle_extra_pedidoMaxAggregateInputType
  }

  export type Detalle_extra_pedidoGroupByOutputType = {
    id_detalle: number
    id_extra: number
    cantidad: number
    precio_extra: number
    _count: Detalle_extra_pedidoCountAggregateOutputType | null
    _avg: Detalle_extra_pedidoAvgAggregateOutputType | null
    _sum: Detalle_extra_pedidoSumAggregateOutputType | null
    _min: Detalle_extra_pedidoMinAggregateOutputType | null
    _max: Detalle_extra_pedidoMaxAggregateOutputType | null
  }

  type GetDetalle_extra_pedidoGroupByPayload<T extends detalle_extra_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_extra_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_extra_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_extra_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_extra_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type detalle_extra_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_extra?: boolean
    cantidad?: boolean
    precio_extra?: boolean
    detalle_pedido?: boolean | detalle_pedidoDefaultArgs<ExtArgs>
    extra?: boolean | extraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_extra_pedido"]>



  export type detalle_extra_pedidoSelectScalar = {
    id_detalle?: boolean
    id_extra?: boolean
    cantidad?: boolean
    precio_extra?: boolean
  }

  export type detalle_extra_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle" | "id_extra" | "cantidad" | "precio_extra", ExtArgs["result"]["detalle_extra_pedido"]>
  export type detalle_extra_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_pedido?: boolean | detalle_pedidoDefaultArgs<ExtArgs>
    extra?: boolean | extraDefaultArgs<ExtArgs>
  }

  export type $detalle_extra_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_extra_pedido"
    objects: {
      detalle_pedido: Prisma.$detalle_pedidoPayload<ExtArgs>
      extra: Prisma.$extraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle: number
      id_extra: number
      cantidad: number
      precio_extra: number
    }, ExtArgs["result"]["detalle_extra_pedido"]>
    composites: {}
  }

  type detalle_extra_pedidoGetPayload<S extends boolean | null | undefined | detalle_extra_pedidoDefaultArgs> = $Result.GetResult<Prisma.$detalle_extra_pedidoPayload, S>

  type detalle_extra_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_extra_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_extra_pedidoCountAggregateInputType | true
    }

  export interface detalle_extra_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_extra_pedido'], meta: { name: 'detalle_extra_pedido' } }
    /**
     * Find zero or one Detalle_extra_pedido that matches the filter.
     * @param {detalle_extra_pedidoFindUniqueArgs} args - Arguments to find a Detalle_extra_pedido
     * @example
     * // Get one Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_extra_pedidoFindUniqueArgs>(args: SelectSubset<T, detalle_extra_pedidoFindUniqueArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_extra_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_extra_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Detalle_extra_pedido
     * @example
     * // Get one Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_extra_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_extra_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_extra_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoFindFirstArgs} args - Arguments to find a Detalle_extra_pedido
     * @example
     * // Get one Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_extra_pedidoFindFirstArgs>(args?: SelectSubset<T, detalle_extra_pedidoFindFirstArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_extra_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoFindFirstOrThrowArgs} args - Arguments to find a Detalle_extra_pedido
     * @example
     * // Get one Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_extra_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_extra_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_extra_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_extra_pedidos
     * const detalle_extra_pedidos = await prisma.detalle_extra_pedido.findMany()
     * 
     * // Get first 10 Detalle_extra_pedidos
     * const detalle_extra_pedidos = await prisma.detalle_extra_pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle`
     * const detalle_extra_pedidoWithId_detalleOnly = await prisma.detalle_extra_pedido.findMany({ select: { id_detalle: true } })
     * 
     */
    findMany<T extends detalle_extra_pedidoFindManyArgs>(args?: SelectSubset<T, detalle_extra_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_extra_pedido.
     * @param {detalle_extra_pedidoCreateArgs} args - Arguments to create a Detalle_extra_pedido.
     * @example
     * // Create one Detalle_extra_pedido
     * const Detalle_extra_pedido = await prisma.detalle_extra_pedido.create({
     *   data: {
     *     // ... data to create a Detalle_extra_pedido
     *   }
     * })
     * 
     */
    create<T extends detalle_extra_pedidoCreateArgs>(args: SelectSubset<T, detalle_extra_pedidoCreateArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_extra_pedidos.
     * @param {detalle_extra_pedidoCreateManyArgs} args - Arguments to create many Detalle_extra_pedidos.
     * @example
     * // Create many Detalle_extra_pedidos
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_extra_pedidoCreateManyArgs>(args?: SelectSubset<T, detalle_extra_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalle_extra_pedido.
     * @param {detalle_extra_pedidoDeleteArgs} args - Arguments to delete one Detalle_extra_pedido.
     * @example
     * // Delete one Detalle_extra_pedido
     * const Detalle_extra_pedido = await prisma.detalle_extra_pedido.delete({
     *   where: {
     *     // ... filter to delete one Detalle_extra_pedido
     *   }
     * })
     * 
     */
    delete<T extends detalle_extra_pedidoDeleteArgs>(args: SelectSubset<T, detalle_extra_pedidoDeleteArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_extra_pedido.
     * @param {detalle_extra_pedidoUpdateArgs} args - Arguments to update one Detalle_extra_pedido.
     * @example
     * // Update one Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_extra_pedidoUpdateArgs>(args: SelectSubset<T, detalle_extra_pedidoUpdateArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_extra_pedidos.
     * @param {detalle_extra_pedidoDeleteManyArgs} args - Arguments to filter Detalle_extra_pedidos to delete.
     * @example
     * // Delete a few Detalle_extra_pedidos
     * const { count } = await prisma.detalle_extra_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_extra_pedidoDeleteManyArgs>(args?: SelectSubset<T, detalle_extra_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_extra_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_extra_pedidos
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_extra_pedidoUpdateManyArgs>(args: SelectSubset<T, detalle_extra_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_extra_pedido.
     * @param {detalle_extra_pedidoUpsertArgs} args - Arguments to update or create a Detalle_extra_pedido.
     * @example
     * // Update or create a Detalle_extra_pedido
     * const detalle_extra_pedido = await prisma.detalle_extra_pedido.upsert({
     *   create: {
     *     // ... data to create a Detalle_extra_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_extra_pedido we want to update
     *   }
     * })
     */
    upsert<T extends detalle_extra_pedidoUpsertArgs>(args: SelectSubset<T, detalle_extra_pedidoUpsertArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_extra_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoCountArgs} args - Arguments to filter Detalle_extra_pedidos to count.
     * @example
     * // Count the number of Detalle_extra_pedidos
     * const count = await prisma.detalle_extra_pedido.count({
     *   where: {
     *     // ... the filter for the Detalle_extra_pedidos we want to count
     *   }
     * })
    **/
    count<T extends detalle_extra_pedidoCountArgs>(
      args?: Subset<T, detalle_extra_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_extra_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_extra_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_extra_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_extra_pedidoAggregateArgs>(args: Subset<T, Detalle_extra_pedidoAggregateArgs>): Prisma.PrismaPromise<GetDetalle_extra_pedidoAggregateType<T>>

    /**
     * Group by Detalle_extra_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_extra_pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_extra_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_extra_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: detalle_extra_pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_extra_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_extra_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_extra_pedido model
   */
  readonly fields: detalle_extra_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_extra_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_extra_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_pedido<T extends detalle_pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, detalle_pedidoDefaultArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    extra<T extends extraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, extraDefaultArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_extra_pedido model
   */
  interface detalle_extra_pedidoFieldRefs {
    readonly id_detalle: FieldRef<"detalle_extra_pedido", 'Int'>
    readonly id_extra: FieldRef<"detalle_extra_pedido", 'Int'>
    readonly cantidad: FieldRef<"detalle_extra_pedido", 'Int'>
    readonly precio_extra: FieldRef<"detalle_extra_pedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * detalle_extra_pedido findUnique
   */
  export type detalle_extra_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_extra_pedido to fetch.
     */
    where: detalle_extra_pedidoWhereUniqueInput
  }

  /**
   * detalle_extra_pedido findUniqueOrThrow
   */
  export type detalle_extra_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_extra_pedido to fetch.
     */
    where: detalle_extra_pedidoWhereUniqueInput
  }

  /**
   * detalle_extra_pedido findFirst
   */
  export type detalle_extra_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_extra_pedido to fetch.
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_extra_pedidos to fetch.
     */
    orderBy?: detalle_extra_pedidoOrderByWithRelationInput | detalle_extra_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_extra_pedidos.
     */
    cursor?: detalle_extra_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_extra_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_extra_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_extra_pedidos.
     */
    distinct?: Detalle_extra_pedidoScalarFieldEnum | Detalle_extra_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_extra_pedido findFirstOrThrow
   */
  export type detalle_extra_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_extra_pedido to fetch.
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_extra_pedidos to fetch.
     */
    orderBy?: detalle_extra_pedidoOrderByWithRelationInput | detalle_extra_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_extra_pedidos.
     */
    cursor?: detalle_extra_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_extra_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_extra_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_extra_pedidos.
     */
    distinct?: Detalle_extra_pedidoScalarFieldEnum | Detalle_extra_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_extra_pedido findMany
   */
  export type detalle_extra_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_extra_pedidos to fetch.
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_extra_pedidos to fetch.
     */
    orderBy?: detalle_extra_pedidoOrderByWithRelationInput | detalle_extra_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_extra_pedidos.
     */
    cursor?: detalle_extra_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_extra_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_extra_pedidos.
     */
    skip?: number
    distinct?: Detalle_extra_pedidoScalarFieldEnum | Detalle_extra_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_extra_pedido create
   */
  export type detalle_extra_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_extra_pedido.
     */
    data: XOR<detalle_extra_pedidoCreateInput, detalle_extra_pedidoUncheckedCreateInput>
  }

  /**
   * detalle_extra_pedido createMany
   */
  export type detalle_extra_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_extra_pedidos.
     */
    data: detalle_extra_pedidoCreateManyInput | detalle_extra_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_extra_pedido update
   */
  export type detalle_extra_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_extra_pedido.
     */
    data: XOR<detalle_extra_pedidoUpdateInput, detalle_extra_pedidoUncheckedUpdateInput>
    /**
     * Choose, which detalle_extra_pedido to update.
     */
    where: detalle_extra_pedidoWhereUniqueInput
  }

  /**
   * detalle_extra_pedido updateMany
   */
  export type detalle_extra_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_extra_pedidos.
     */
    data: XOR<detalle_extra_pedidoUpdateManyMutationInput, detalle_extra_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which detalle_extra_pedidos to update
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * Limit how many detalle_extra_pedidos to update.
     */
    limit?: number
  }

  /**
   * detalle_extra_pedido upsert
   */
  export type detalle_extra_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_extra_pedido to update in case it exists.
     */
    where: detalle_extra_pedidoWhereUniqueInput
    /**
     * In case the detalle_extra_pedido found by the `where` argument doesn't exist, create a new detalle_extra_pedido with this data.
     */
    create: XOR<detalle_extra_pedidoCreateInput, detalle_extra_pedidoUncheckedCreateInput>
    /**
     * In case the detalle_extra_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_extra_pedidoUpdateInput, detalle_extra_pedidoUncheckedUpdateInput>
  }

  /**
   * detalle_extra_pedido delete
   */
  export type detalle_extra_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    /**
     * Filter which detalle_extra_pedido to delete.
     */
    where: detalle_extra_pedidoWhereUniqueInput
  }

  /**
   * detalle_extra_pedido deleteMany
   */
  export type detalle_extra_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_extra_pedidos to delete
     */
    where?: detalle_extra_pedidoWhereInput
    /**
     * Limit how many detalle_extra_pedidos to delete.
     */
    limit?: number
  }

  /**
   * detalle_extra_pedido without action
   */
  export type detalle_extra_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model detalle_pedido
   */

  export type AggregateDetalle_pedido = {
    _count: Detalle_pedidoCountAggregateOutputType | null
    _avg: Detalle_pedidoAvgAggregateOutputType | null
    _sum: Detalle_pedidoSumAggregateOutputType | null
    _min: Detalle_pedidoMinAggregateOutputType | null
    _max: Detalle_pedidoMaxAggregateOutputType | null
  }

  export type Detalle_pedidoAvgAggregateOutputType = {
    id_detalle: number | null
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
    precio_unitario: number | null
    subtotal: number | null
  }

  export type Detalle_pedidoSumAggregateOutputType = {
    id_detalle: number | null
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
    precio_unitario: number | null
    subtotal: number | null
  }

  export type Detalle_pedidoMinAggregateOutputType = {
    id_detalle: number | null
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
    precio_unitario: number | null
    subtotal: number | null
  }

  export type Detalle_pedidoMaxAggregateOutputType = {
    id_detalle: number | null
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
    precio_unitario: number | null
    subtotal: number | null
  }

  export type Detalle_pedidoCountAggregateOutputType = {
    id_detalle: number
    id_pedido: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    _all: number
  }


  export type Detalle_pedidoAvgAggregateInputType = {
    id_detalle?: true
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidoSumAggregateInputType = {
    id_detalle?: true
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidoMinAggregateInputType = {
    id_detalle?: true
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidoMaxAggregateInputType = {
    id_detalle?: true
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidoCountAggregateInputType = {
    id_detalle?: true
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    _all?: true
  }

  export type Detalle_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_pedido to aggregate.
     */
    where?: detalle_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_pedidos
    **/
    _count?: true | Detalle_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_pedidoMaxAggregateInputType
  }

  export type GetDetalle_pedidoAggregateType<T extends Detalle_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_pedido[P]>
      : GetScalarType<T[P], AggregateDetalle_pedido[P]>
  }




  export type detalle_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidoWhereInput
    orderBy?: detalle_pedidoOrderByWithAggregationInput | detalle_pedidoOrderByWithAggregationInput[]
    by: Detalle_pedidoScalarFieldEnum[] | Detalle_pedidoScalarFieldEnum
    having?: detalle_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_pedidoCountAggregateInputType | true
    _avg?: Detalle_pedidoAvgAggregateInputType
    _sum?: Detalle_pedidoSumAggregateInputType
    _min?: Detalle_pedidoMinAggregateInputType
    _max?: Detalle_pedidoMaxAggregateInputType
  }

  export type Detalle_pedidoGroupByOutputType = {
    id_detalle: number
    id_pedido: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    _count: Detalle_pedidoCountAggregateOutputType | null
    _avg: Detalle_pedidoAvgAggregateOutputType | null
    _sum: Detalle_pedidoSumAggregateOutputType | null
    _min: Detalle_pedidoMinAggregateOutputType | null
    _max: Detalle_pedidoMaxAggregateOutputType | null
  }

  type GetDetalle_pedidoGroupByPayload<T extends detalle_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type detalle_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_pedido?: boolean
    id_producto?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    detalle_extra_pedido?: boolean | detalle_pedido$detalle_extra_pedidoArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_pedido"]>



  export type detalle_pedidoSelectScalar = {
    id_detalle?: boolean
    id_pedido?: boolean
    id_producto?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
  }

  export type detalle_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle" | "id_pedido" | "id_producto" | "cantidad" | "precio_unitario" | "subtotal", ExtArgs["result"]["detalle_pedido"]>
  export type detalle_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_extra_pedido?: boolean | detalle_pedido$detalle_extra_pedidoArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }

  export type $detalle_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_pedido"
    objects: {
      detalle_extra_pedido: Prisma.$detalle_extra_pedidoPayload<ExtArgs> | null
      pedido: Prisma.$pedidoPayload<ExtArgs>
      producto: Prisma.$productoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle: number
      id_pedido: number
      id_producto: number
      cantidad: number
      precio_unitario: number
      subtotal: number
    }, ExtArgs["result"]["detalle_pedido"]>
    composites: {}
  }

  type detalle_pedidoGetPayload<S extends boolean | null | undefined | detalle_pedidoDefaultArgs> = $Result.GetResult<Prisma.$detalle_pedidoPayload, S>

  type detalle_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_pedidoCountAggregateInputType | true
    }

  export interface detalle_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_pedido'], meta: { name: 'detalle_pedido' } }
    /**
     * Find zero or one Detalle_pedido that matches the filter.
     * @param {detalle_pedidoFindUniqueArgs} args - Arguments to find a Detalle_pedido
     * @example
     * // Get one Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_pedidoFindUniqueArgs>(args: SelectSubset<T, detalle_pedidoFindUniqueArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Detalle_pedido
     * @example
     * // Get one Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoFindFirstArgs} args - Arguments to find a Detalle_pedido
     * @example
     * // Get one Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_pedidoFindFirstArgs>(args?: SelectSubset<T, detalle_pedidoFindFirstArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoFindFirstOrThrowArgs} args - Arguments to find a Detalle_pedido
     * @example
     * // Get one Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedido.findMany()
     * 
     * // Get first 10 Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle`
     * const detalle_pedidoWithId_detalleOnly = await prisma.detalle_pedido.findMany({ select: { id_detalle: true } })
     * 
     */
    findMany<T extends detalle_pedidoFindManyArgs>(args?: SelectSubset<T, detalle_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_pedido.
     * @param {detalle_pedidoCreateArgs} args - Arguments to create a Detalle_pedido.
     * @example
     * // Create one Detalle_pedido
     * const Detalle_pedido = await prisma.detalle_pedido.create({
     *   data: {
     *     // ... data to create a Detalle_pedido
     *   }
     * })
     * 
     */
    create<T extends detalle_pedidoCreateArgs>(args: SelectSubset<T, detalle_pedidoCreateArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_pedidos.
     * @param {detalle_pedidoCreateManyArgs} args - Arguments to create many Detalle_pedidos.
     * @example
     * // Create many Detalle_pedidos
     * const detalle_pedido = await prisma.detalle_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_pedidoCreateManyArgs>(args?: SelectSubset<T, detalle_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalle_pedido.
     * @param {detalle_pedidoDeleteArgs} args - Arguments to delete one Detalle_pedido.
     * @example
     * // Delete one Detalle_pedido
     * const Detalle_pedido = await prisma.detalle_pedido.delete({
     *   where: {
     *     // ... filter to delete one Detalle_pedido
     *   }
     * })
     * 
     */
    delete<T extends detalle_pedidoDeleteArgs>(args: SelectSubset<T, detalle_pedidoDeleteArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_pedido.
     * @param {detalle_pedidoUpdateArgs} args - Arguments to update one Detalle_pedido.
     * @example
     * // Update one Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_pedidoUpdateArgs>(args: SelectSubset<T, detalle_pedidoUpdateArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_pedidos.
     * @param {detalle_pedidoDeleteManyArgs} args - Arguments to filter Detalle_pedidos to delete.
     * @example
     * // Delete a few Detalle_pedidos
     * const { count } = await prisma.detalle_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_pedidoDeleteManyArgs>(args?: SelectSubset<T, detalle_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_pedidos
     * const detalle_pedido = await prisma.detalle_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_pedidoUpdateManyArgs>(args: SelectSubset<T, detalle_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_pedido.
     * @param {detalle_pedidoUpsertArgs} args - Arguments to update or create a Detalle_pedido.
     * @example
     * // Update or create a Detalle_pedido
     * const detalle_pedido = await prisma.detalle_pedido.upsert({
     *   create: {
     *     // ... data to create a Detalle_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_pedido we want to update
     *   }
     * })
     */
    upsert<T extends detalle_pedidoUpsertArgs>(args: SelectSubset<T, detalle_pedidoUpsertArgs<ExtArgs>>): Prisma__detalle_pedidoClient<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoCountArgs} args - Arguments to filter Detalle_pedidos to count.
     * @example
     * // Count the number of Detalle_pedidos
     * const count = await prisma.detalle_pedido.count({
     *   where: {
     *     // ... the filter for the Detalle_pedidos we want to count
     *   }
     * })
    **/
    count<T extends detalle_pedidoCountArgs>(
      args?: Subset<T, detalle_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_pedidoAggregateArgs>(args: Subset<T, Detalle_pedidoAggregateArgs>): Prisma.PrismaPromise<GetDetalle_pedidoAggregateType<T>>

    /**
     * Group by Detalle_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: detalle_pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_pedido model
   */
  readonly fields: detalle_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_extra_pedido<T extends detalle_pedido$detalle_extra_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, detalle_pedido$detalle_extra_pedidoArgs<ExtArgs>>): Prisma__detalle_extra_pedidoClient<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends productoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productoDefaultArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_pedido model
   */
  interface detalle_pedidoFieldRefs {
    readonly id_detalle: FieldRef<"detalle_pedido", 'Int'>
    readonly id_pedido: FieldRef<"detalle_pedido", 'Int'>
    readonly id_producto: FieldRef<"detalle_pedido", 'Int'>
    readonly cantidad: FieldRef<"detalle_pedido", 'Int'>
    readonly precio_unitario: FieldRef<"detalle_pedido", 'Float'>
    readonly subtotal: FieldRef<"detalle_pedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * detalle_pedido findUnique
   */
  export type detalle_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedido to fetch.
     */
    where: detalle_pedidoWhereUniqueInput
  }

  /**
   * detalle_pedido findUniqueOrThrow
   */
  export type detalle_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedido to fetch.
     */
    where: detalle_pedidoWhereUniqueInput
  }

  /**
   * detalle_pedido findFirst
   */
  export type detalle_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedido to fetch.
     */
    where?: detalle_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_pedidos.
     */
    cursor?: detalle_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_pedidos.
     */
    distinct?: Detalle_pedidoScalarFieldEnum | Detalle_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_pedido findFirstOrThrow
   */
  export type detalle_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedido to fetch.
     */
    where?: detalle_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_pedidos.
     */
    cursor?: detalle_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_pedidos.
     */
    distinct?: Detalle_pedidoScalarFieldEnum | Detalle_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_pedido findMany
   */
  export type detalle_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where?: detalle_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_pedidos.
     */
    cursor?: detalle_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    distinct?: Detalle_pedidoScalarFieldEnum | Detalle_pedidoScalarFieldEnum[]
  }

  /**
   * detalle_pedido create
   */
  export type detalle_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_pedido.
     */
    data: XOR<detalle_pedidoCreateInput, detalle_pedidoUncheckedCreateInput>
  }

  /**
   * detalle_pedido createMany
   */
  export type detalle_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_pedidos.
     */
    data: detalle_pedidoCreateManyInput | detalle_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_pedido update
   */
  export type detalle_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_pedido.
     */
    data: XOR<detalle_pedidoUpdateInput, detalle_pedidoUncheckedUpdateInput>
    /**
     * Choose, which detalle_pedido to update.
     */
    where: detalle_pedidoWhereUniqueInput
  }

  /**
   * detalle_pedido updateMany
   */
  export type detalle_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_pedidos.
     */
    data: XOR<detalle_pedidoUpdateManyMutationInput, detalle_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which detalle_pedidos to update
     */
    where?: detalle_pedidoWhereInput
    /**
     * Limit how many detalle_pedidos to update.
     */
    limit?: number
  }

  /**
   * detalle_pedido upsert
   */
  export type detalle_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_pedido to update in case it exists.
     */
    where: detalle_pedidoWhereUniqueInput
    /**
     * In case the detalle_pedido found by the `where` argument doesn't exist, create a new detalle_pedido with this data.
     */
    create: XOR<detalle_pedidoCreateInput, detalle_pedidoUncheckedCreateInput>
    /**
     * In case the detalle_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_pedidoUpdateInput, detalle_pedidoUncheckedUpdateInput>
  }

  /**
   * detalle_pedido delete
   */
  export type detalle_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    /**
     * Filter which detalle_pedido to delete.
     */
    where: detalle_pedidoWhereUniqueInput
  }

  /**
   * detalle_pedido deleteMany
   */
  export type detalle_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_pedidos to delete
     */
    where?: detalle_pedidoWhereInput
    /**
     * Limit how many detalle_pedidos to delete.
     */
    limit?: number
  }

  /**
   * detalle_pedido.detalle_extra_pedido
   */
  export type detalle_pedido$detalle_extra_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    where?: detalle_extra_pedidoWhereInput
  }

  /**
   * detalle_pedido without action
   */
  export type detalle_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model extra
   */

  export type AggregateExtra = {
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  export type ExtraAvgAggregateOutputType = {
    id_extra: number | null
    precio: number | null
  }

  export type ExtraSumAggregateOutputType = {
    id_extra: number | null
    precio: number | null
  }

  export type ExtraMinAggregateOutputType = {
    id_extra: number | null
    nombre: string | null
    precio: number | null
  }

  export type ExtraMaxAggregateOutputType = {
    id_extra: number | null
    nombre: string | null
    precio: number | null
  }

  export type ExtraCountAggregateOutputType = {
    id_extra: number
    nombre: number
    precio: number
    _all: number
  }


  export type ExtraAvgAggregateInputType = {
    id_extra?: true
    precio?: true
  }

  export type ExtraSumAggregateInputType = {
    id_extra?: true
    precio?: true
  }

  export type ExtraMinAggregateInputType = {
    id_extra?: true
    nombre?: true
    precio?: true
  }

  export type ExtraMaxAggregateInputType = {
    id_extra?: true
    nombre?: true
    precio?: true
  }

  export type ExtraCountAggregateInputType = {
    id_extra?: true
    nombre?: true
    precio?: true
    _all?: true
  }

  export type ExtraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extra to aggregate.
     */
    where?: extraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extraOrderByWithRelationInput | extraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: extraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned extras
    **/
    _count?: true | ExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtraMaxAggregateInputType
  }

  export type GetExtraAggregateType<T extends ExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtra[P]>
      : GetScalarType<T[P], AggregateExtra[P]>
  }




  export type extraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: extraWhereInput
    orderBy?: extraOrderByWithAggregationInput | extraOrderByWithAggregationInput[]
    by: ExtraScalarFieldEnum[] | ExtraScalarFieldEnum
    having?: extraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtraCountAggregateInputType | true
    _avg?: ExtraAvgAggregateInputType
    _sum?: ExtraSumAggregateInputType
    _min?: ExtraMinAggregateInputType
    _max?: ExtraMaxAggregateInputType
  }

  export type ExtraGroupByOutputType = {
    id_extra: number
    nombre: string
    precio: number
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  type GetExtraGroupByPayload<T extends extraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtraGroupByOutputType[P]>
            : GetScalarType<T[P], ExtraGroupByOutputType[P]>
        }
      >
    >


  export type extraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_extra?: boolean
    nombre?: boolean
    precio?: boolean
    detalle_extra_pedido?: boolean | extra$detalle_extra_pedidoArgs<ExtArgs>
    _count?: boolean | ExtraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extra"]>



  export type extraSelectScalar = {
    id_extra?: boolean
    nombre?: boolean
    precio?: boolean
  }

  export type extraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_extra" | "nombre" | "precio", ExtArgs["result"]["extra"]>
  export type extraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_extra_pedido?: boolean | extra$detalle_extra_pedidoArgs<ExtArgs>
    _count?: boolean | ExtraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $extraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "extra"
    objects: {
      detalle_extra_pedido: Prisma.$detalle_extra_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_extra: number
      nombre: string
      precio: number
    }, ExtArgs["result"]["extra"]>
    composites: {}
  }

  type extraGetPayload<S extends boolean | null | undefined | extraDefaultArgs> = $Result.GetResult<Prisma.$extraPayload, S>

  type extraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<extraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtraCountAggregateInputType | true
    }

  export interface extraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['extra'], meta: { name: 'extra' } }
    /**
     * Find zero or one Extra that matches the filter.
     * @param {extraFindUniqueArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends extraFindUniqueArgs>(args: SelectSubset<T, extraFindUniqueArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {extraFindUniqueOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends extraFindUniqueOrThrowArgs>(args: SelectSubset<T, extraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraFindFirstArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends extraFindFirstArgs>(args?: SelectSubset<T, extraFindFirstArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraFindFirstOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends extraFindFirstOrThrowArgs>(args?: SelectSubset<T, extraFindFirstOrThrowArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extras
     * const extras = await prisma.extra.findMany()
     * 
     * // Get first 10 Extras
     * const extras = await prisma.extra.findMany({ take: 10 })
     * 
     * // Only select the `id_extra`
     * const extraWithId_extraOnly = await prisma.extra.findMany({ select: { id_extra: true } })
     * 
     */
    findMany<T extends extraFindManyArgs>(args?: SelectSubset<T, extraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extra.
     * @param {extraCreateArgs} args - Arguments to create a Extra.
     * @example
     * // Create one Extra
     * const Extra = await prisma.extra.create({
     *   data: {
     *     // ... data to create a Extra
     *   }
     * })
     * 
     */
    create<T extends extraCreateArgs>(args: SelectSubset<T, extraCreateArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extras.
     * @param {extraCreateManyArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extra = await prisma.extra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends extraCreateManyArgs>(args?: SelectSubset<T, extraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extra.
     * @param {extraDeleteArgs} args - Arguments to delete one Extra.
     * @example
     * // Delete one Extra
     * const Extra = await prisma.extra.delete({
     *   where: {
     *     // ... filter to delete one Extra
     *   }
     * })
     * 
     */
    delete<T extends extraDeleteArgs>(args: SelectSubset<T, extraDeleteArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extra.
     * @param {extraUpdateArgs} args - Arguments to update one Extra.
     * @example
     * // Update one Extra
     * const extra = await prisma.extra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends extraUpdateArgs>(args: SelectSubset<T, extraUpdateArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extras.
     * @param {extraDeleteManyArgs} args - Arguments to filter Extras to delete.
     * @example
     * // Delete a few Extras
     * const { count } = await prisma.extra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends extraDeleteManyArgs>(args?: SelectSubset<T, extraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extras
     * const extra = await prisma.extra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends extraUpdateManyArgs>(args: SelectSubset<T, extraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extra.
     * @param {extraUpsertArgs} args - Arguments to update or create a Extra.
     * @example
     * // Update or create a Extra
     * const extra = await prisma.extra.upsert({
     *   create: {
     *     // ... data to create a Extra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extra we want to update
     *   }
     * })
     */
    upsert<T extends extraUpsertArgs>(args: SelectSubset<T, extraUpsertArgs<ExtArgs>>): Prisma__extraClient<$Result.GetResult<Prisma.$extraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraCountArgs} args - Arguments to filter Extras to count.
     * @example
     * // Count the number of Extras
     * const count = await prisma.extra.count({
     *   where: {
     *     // ... the filter for the Extras we want to count
     *   }
     * })
    **/
    count<T extends extraCountArgs>(
      args?: Subset<T, extraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtraAggregateArgs>(args: Subset<T, ExtraAggregateArgs>): Prisma.PrismaPromise<GetExtraAggregateType<T>>

    /**
     * Group by Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends extraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: extraGroupByArgs['orderBy'] }
        : { orderBy?: extraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, extraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the extra model
   */
  readonly fields: extraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for extra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__extraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_extra_pedido<T extends extra$detalle_extra_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, extra$detalle_extra_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_extra_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the extra model
   */
  interface extraFieldRefs {
    readonly id_extra: FieldRef<"extra", 'Int'>
    readonly nombre: FieldRef<"extra", 'String'>
    readonly precio: FieldRef<"extra", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * extra findUnique
   */
  export type extraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter, which extra to fetch.
     */
    where: extraWhereUniqueInput
  }

  /**
   * extra findUniqueOrThrow
   */
  export type extraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter, which extra to fetch.
     */
    where: extraWhereUniqueInput
  }

  /**
   * extra findFirst
   */
  export type extraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter, which extra to fetch.
     */
    where?: extraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extraOrderByWithRelationInput | extraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extras.
     */
    cursor?: extraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * extra findFirstOrThrow
   */
  export type extraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter, which extra to fetch.
     */
    where?: extraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extraOrderByWithRelationInput | extraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extras.
     */
    cursor?: extraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * extra findMany
   */
  export type extraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where?: extraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extraOrderByWithRelationInput | extraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing extras.
     */
    cursor?: extraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * extra create
   */
  export type extraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * The data needed to create a extra.
     */
    data: XOR<extraCreateInput, extraUncheckedCreateInput>
  }

  /**
   * extra createMany
   */
  export type extraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many extras.
     */
    data: extraCreateManyInput | extraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * extra update
   */
  export type extraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * The data needed to update a extra.
     */
    data: XOR<extraUpdateInput, extraUncheckedUpdateInput>
    /**
     * Choose, which extra to update.
     */
    where: extraWhereUniqueInput
  }

  /**
   * extra updateMany
   */
  export type extraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update extras.
     */
    data: XOR<extraUpdateManyMutationInput, extraUncheckedUpdateManyInput>
    /**
     * Filter which extras to update
     */
    where?: extraWhereInput
    /**
     * Limit how many extras to update.
     */
    limit?: number
  }

  /**
   * extra upsert
   */
  export type extraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * The filter to search for the extra to update in case it exists.
     */
    where: extraWhereUniqueInput
    /**
     * In case the extra found by the `where` argument doesn't exist, create a new extra with this data.
     */
    create: XOR<extraCreateInput, extraUncheckedCreateInput>
    /**
     * In case the extra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<extraUpdateInput, extraUncheckedUpdateInput>
  }

  /**
   * extra delete
   */
  export type extraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
    /**
     * Filter which extra to delete.
     */
    where: extraWhereUniqueInput
  }

  /**
   * extra deleteMany
   */
  export type extraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extras to delete
     */
    where?: extraWhereInput
    /**
     * Limit how many extras to delete.
     */
    limit?: number
  }

  /**
   * extra.detalle_extra_pedido
   */
  export type extra$detalle_extra_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_extra_pedido
     */
    select?: detalle_extra_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_extra_pedido
     */
    omit?: detalle_extra_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_extra_pedidoInclude<ExtArgs> | null
    where?: detalle_extra_pedidoWhereInput
    orderBy?: detalle_extra_pedidoOrderByWithRelationInput | detalle_extra_pedidoOrderByWithRelationInput[]
    cursor?: detalle_extra_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_extra_pedidoScalarFieldEnum | Detalle_extra_pedidoScalarFieldEnum[]
  }

  /**
   * extra without action
   */
  export type extraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extra
     */
    select?: extraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extra
     */
    omit?: extraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extraInclude<ExtArgs> | null
  }


  /**
   * Model notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id_notificacion: number | null
    id_pedido: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id_notificacion: number | null
    id_pedido: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id_notificacion: number | null
    id_pedido: number | null
    mensaje: string | null
    status: $Enums.notificacion_status | null
    fecha: Date | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id_notificacion: number | null
    id_pedido: number | null
    mensaje: string | null
    status: $Enums.notificacion_status | null
    fecha: Date | null
  }

  export type NotificacionCountAggregateOutputType = {
    id_notificacion: number
    id_pedido: number
    mensaje: number
    status: number
    fecha: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id_notificacion?: true
    id_pedido?: true
  }

  export type NotificacionSumAggregateInputType = {
    id_notificacion?: true
    id_pedido?: true
  }

  export type NotificacionMinAggregateInputType = {
    id_notificacion?: true
    id_pedido?: true
    mensaje?: true
    status?: true
    fecha?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id_notificacion?: true
    id_pedido?: true
    mensaje?: true
    status?: true
    fecha?: true
  }

  export type NotificacionCountAggregateInputType = {
    id_notificacion?: true
    id_pedido?: true
    mensaje?: true
    status?: true
    fecha?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacion to aggregate.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type notificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithAggregationInput | notificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: notificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id_notificacion: number
    id_pedido: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha: Date
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends notificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type notificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_pedido?: boolean
    mensaje?: boolean
    status?: boolean
    fecha?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>



  export type notificacionSelectScalar = {
    id_notificacion?: boolean
    id_pedido?: boolean
    mensaje?: boolean
    status?: boolean
    fecha?: boolean
  }

  export type notificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notificacion" | "id_pedido" | "mensaje" | "status" | "fecha", ExtArgs["result"]["notificacion"]>
  export type notificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $notificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notificacion"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notificacion: number
      id_pedido: number
      mensaje: string
      status: $Enums.notificacion_status
      fecha: Date
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type notificacionGetPayload<S extends boolean | null | undefined | notificacionDefaultArgs> = $Result.GetResult<Prisma.$notificacionPayload, S>

  type notificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface notificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notificacion'], meta: { name: 'notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {notificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificacionFindUniqueArgs>(args: SelectSubset<T, notificacionFindUniqueArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificacionFindFirstArgs>(args?: SelectSubset<T, notificacionFindFirstArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.findMany({ select: { id_notificacion: true } })
     * 
     */
    findMany<T extends notificacionFindManyArgs>(args?: SelectSubset<T, notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacion.
     * @param {notificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends notificacionCreateArgs>(args: SelectSubset<T, notificacionCreateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacions.
     * @param {notificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificacionCreateManyArgs>(args?: SelectSubset<T, notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacion.
     * @param {notificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends notificacionDeleteArgs>(args: SelectSubset<T, notificacionDeleteArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacion.
     * @param {notificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificacionUpdateArgs>(args: SelectSubset<T, notificacionUpdateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {notificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificacionDeleteManyArgs>(args?: SelectSubset<T, notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificacionUpdateManyArgs>(args: SelectSubset<T, notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacion.
     * @param {notificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends notificacionUpsertArgs>(args: SelectSubset<T, notificacionUpsertArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends notificacionCountArgs>(
      args?: Subset<T, notificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificacionGroupByArgs['orderBy'] }
        : { orderBy?: notificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notificacion model
   */
  readonly fields: notificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notificacion model
   */
  interface notificacionFieldRefs {
    readonly id_notificacion: FieldRef<"notificacion", 'Int'>
    readonly id_pedido: FieldRef<"notificacion", 'Int'>
    readonly mensaje: FieldRef<"notificacion", 'String'>
    readonly status: FieldRef<"notificacion", 'notificacion_status'>
    readonly fecha: FieldRef<"notificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notificacion findUnique
   */
  export type notificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findUniqueOrThrow
   */
  export type notificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findFirst
   */
  export type notificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findFirstOrThrow
   */
  export type notificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findMany
   */
  export type notificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacions to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion create
   */
  export type notificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a notificacion.
     */
    data: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
  }

  /**
   * notificacion createMany
   */
  export type notificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notificacions.
     */
    data: notificacionCreateManyInput | notificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notificacion update
   */
  export type notificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a notificacion.
     */
    data: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
    /**
     * Choose, which notificacion to update.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion updateMany
   */
  export type notificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notificacions.
     */
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyInput>
    /**
     * Filter which notificacions to update
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to update.
     */
    limit?: number
  }

  /**
   * notificacion upsert
   */
  export type notificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the notificacion to update in case it exists.
     */
    where: notificacionWhereUniqueInput
    /**
     * In case the notificacion found by the `where` argument doesn't exist, create a new notificacion with this data.
     */
    create: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
    /**
     * In case the notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
  }

  /**
   * notificacion delete
   */
  export type notificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter which notificacion to delete.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion deleteMany
   */
  export type notificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacions to delete
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to delete.
     */
    limit?: number
  }

  /**
   * notificacion without action
   */
  export type notificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
  }


  /**
   * Model pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id_pago: number | null
    id_pedido: number | null
    monto_pagado: number | null
  }

  export type PagoSumAggregateOutputType = {
    id_pago: number | null
    id_pedido: number | null
    monto_pagado: number | null
  }

  export type PagoMinAggregateOutputType = {
    id_pago: number | null
    id_pedido: number | null
    metodo_pago: $Enums.pago_metodo_pago | null
    monto_pagado: number | null
    fecha_pago: Date | null
    status: $Enums.pago_status | null
  }

  export type PagoMaxAggregateOutputType = {
    id_pago: number | null
    id_pedido: number | null
    metodo_pago: $Enums.pago_metodo_pago | null
    monto_pagado: number | null
    fecha_pago: Date | null
    status: $Enums.pago_status | null
  }

  export type PagoCountAggregateOutputType = {
    id_pago: number
    id_pedido: number
    metodo_pago: number
    monto_pagado: number
    fecha_pago: number
    status: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id_pago?: true
    id_pedido?: true
    monto_pagado?: true
  }

  export type PagoSumAggregateInputType = {
    id_pago?: true
    id_pedido?: true
    monto_pagado?: true
  }

  export type PagoMinAggregateInputType = {
    id_pago?: true
    id_pedido?: true
    metodo_pago?: true
    monto_pagado?: true
    fecha_pago?: true
    status?: true
  }

  export type PagoMaxAggregateInputType = {
    id_pago?: true
    id_pedido?: true
    metodo_pago?: true
    monto_pagado?: true
    fecha_pago?: true
    status?: true
  }

  export type PagoCountAggregateInputType = {
    id_pago?: true
    id_pedido?: true
    metodo_pago?: true
    monto_pagado?: true
    fecha_pago?: true
    status?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pago to aggregate.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagoWhereInput
    orderBy?: pagoOrderByWithAggregationInput | pagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id_pago: number
    id_pedido: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago: Date
    status: $Enums.pago_status
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_pedido?: boolean
    metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_pago?: boolean
    status?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>



  export type pagoSelectScalar = {
    id_pago?: boolean
    id_pedido?: boolean
    metodo_pago?: boolean
    monto_pagado?: boolean
    fecha_pago?: boolean
    status?: boolean
  }

  export type pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pago" | "id_pedido" | "metodo_pago" | "monto_pagado" | "fecha_pago" | "status", ExtArgs["result"]["pago"]>
  export type pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pago"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pago: number
      id_pedido: number
      metodo_pago: $Enums.pago_metodo_pago
      monto_pagado: number
      fecha_pago: Date
      status: $Enums.pago_status
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type pagoGetPayload<S extends boolean | null | undefined | pagoDefaultArgs> = $Result.GetResult<Prisma.$pagoPayload, S>

  type pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pago'], meta: { name: 'pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {pagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagoFindUniqueArgs>(args: SelectSubset<T, pagoFindUniqueArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagoFindFirstArgs>(args?: SelectSubset<T, pagoFindFirstArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id_pago`
     * const pagoWithId_pagoOnly = await prisma.pago.findMany({ select: { id_pago: true } })
     * 
     */
    findMany<T extends pagoFindManyArgs>(args?: SelectSubset<T, pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {pagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends pagoCreateArgs>(args: SelectSubset<T, pagoCreateArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagoCreateManyArgs>(args?: SelectSubset<T, pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago.
     * @param {pagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends pagoDeleteArgs>(args: SelectSubset<T, pagoDeleteArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {pagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagoUpdateArgs>(args: SelectSubset<T, pagoUpdateArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagoDeleteManyArgs>(args?: SelectSubset<T, pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagoUpdateManyArgs>(args: SelectSubset<T, pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {pagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends pagoUpsertArgs>(args: SelectSubset<T, pagoUpsertArgs<ExtArgs>>): Prisma__pagoClient<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagoCountArgs>(
      args?: Subset<T, pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagoGroupByArgs['orderBy'] }
        : { orderBy?: pagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pago model
   */
  readonly fields: pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pago model
   */
  interface pagoFieldRefs {
    readonly id_pago: FieldRef<"pago", 'Int'>
    readonly id_pedido: FieldRef<"pago", 'Int'>
    readonly metodo_pago: FieldRef<"pago", 'pago_metodo_pago'>
    readonly monto_pagado: FieldRef<"pago", 'Float'>
    readonly fecha_pago: FieldRef<"pago", 'DateTime'>
    readonly status: FieldRef<"pago", 'pago_status'>
  }
    

  // Custom InputTypes
  /**
   * pago findUnique
   */
  export type pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago findUniqueOrThrow
   */
  export type pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago findFirst
   */
  export type pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago findFirstOrThrow
   */
  export type pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pago to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago findMany
   */
  export type pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pago create
   */
  export type pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a pago.
     */
    data: XOR<pagoCreateInput, pagoUncheckedCreateInput>
  }

  /**
   * pago createMany
   */
  export type pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagoCreateManyInput | pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pago update
   */
  export type pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a pago.
     */
    data: XOR<pagoUpdateInput, pagoUncheckedUpdateInput>
    /**
     * Choose, which pago to update.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago updateMany
   */
  export type pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagoWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pago upsert
   */
  export type pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the pago to update in case it exists.
     */
    where: pagoWhereUniqueInput
    /**
     * In case the pago found by the `where` argument doesn't exist, create a new pago with this data.
     */
    create: XOR<pagoCreateInput, pagoUncheckedCreateInput>
    /**
     * In case the pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagoUpdateInput, pagoUncheckedUpdateInput>
  }

  /**
   * pago delete
   */
  export type pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    /**
     * Filter which pago to delete.
     */
    where: pagoWhereUniqueInput
  }

  /**
   * pago deleteMany
   */
  export type pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagoWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pago without action
   */
  export type pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id_pedido: number | null
    id_usuario: number | null
    total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id_pedido: number | null
    id_usuario: number | null
    total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id_pedido: number | null
    id_usuario: number | null
    fecha: Date | null
    status: $Enums.pedido_status | null
    codigo_conf: string | null
    total: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id_pedido: number | null
    id_usuario: number | null
    fecha: Date | null
    status: $Enums.pedido_status | null
    codigo_conf: string | null
    total: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id_pedido: number
    id_usuario: number
    fecha: number
    status: number
    codigo_conf: number
    total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id_pedido?: true
    id_usuario?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    id_pedido?: true
    id_usuario?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id_pedido?: true
    id_usuario?: true
    fecha?: true
    status?: true
    codigo_conf?: true
    total?: true
  }

  export type PedidoMaxAggregateInputType = {
    id_pedido?: true
    id_usuario?: true
    fecha?: true
    status?: true
    codigo_conf?: true
    total?: true
  }

  export type PedidoCountAggregateInputType = {
    id_pedido?: true
    id_usuario?: true
    fecha?: true
    status?: true
    codigo_conf?: true
    total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id_pedido: number
    id_usuario: number
    fecha: Date
    status: $Enums.pedido_status
    codigo_conf: string
    total: number | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    id_usuario?: boolean
    fecha?: boolean
    status?: boolean
    codigo_conf?: boolean
    total?: boolean
    detalle_pedido?: boolean | pedido$detalle_pedidoArgs<ExtArgs>
    notificacion?: boolean | pedido$notificacionArgs<ExtArgs>
    pago?: boolean | pedido$pagoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type pedidoSelectScalar = {
    id_pedido?: boolean
    id_usuario?: boolean
    fecha?: boolean
    status?: boolean
    codigo_conf?: boolean
    total?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "id_usuario" | "fecha" | "status" | "codigo_conf" | "total", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_pedido?: boolean | pedido$detalle_pedidoArgs<ExtArgs>
    notificacion?: boolean | pedido$notificacionArgs<ExtArgs>
    pago?: boolean | pedido$pagoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      detalle_pedido: Prisma.$detalle_pedidoPayload<ExtArgs>[]
      notificacion: Prisma.$notificacionPayload<ExtArgs>[]
      pago: Prisma.$pagoPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      id_usuario: number
      fecha: Date
      status: $Enums.pedido_status
      codigo_conf: string
      total: number | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const pedidoWithId_pedidoOnly = await prisma.pedido.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_pedido<T extends pedido$detalle_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$detalle_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacion<T extends pedido$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, pedido$notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pago<T extends pedido$pagoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$pagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id_pedido: FieldRef<"pedido", 'Int'>
    readonly id_usuario: FieldRef<"pedido", 'Int'>
    readonly fecha: FieldRef<"pedido", 'DateTime'>
    readonly status: FieldRef<"pedido", 'pedido_status'>
    readonly codigo_conf: FieldRef<"pedido", 'String'>
    readonly total: FieldRef<"pedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.detalle_pedido
   */
  export type pedido$detalle_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    where?: detalle_pedidoWhereInput
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    cursor?: detalle_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_pedidoScalarFieldEnum | Detalle_pedidoScalarFieldEnum[]
  }

  /**
   * pedido.notificacion
   */
  export type pedido$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    cursor?: notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * pedido.pago
   */
  export type pedido$pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pago
     */
    omit?: pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagoInclude<ExtArgs> | null
    where?: pagoWhereInput
    orderBy?: pagoOrderByWithRelationInput | pagoOrderByWithRelationInput[]
    cursor?: pagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id_producto: number | null
    precio: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id_producto: number | null
    precio: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id_producto: number | null
    nombre: string | null
    tipo_prod: $Enums.producto_tipo_prod | null
    u_med: $Enums.producto_u_med | null
    precio: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id_producto: number | null
    nombre: string | null
    tipo_prod: $Enums.producto_tipo_prod | null
    u_med: $Enums.producto_u_med | null
    precio: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id_producto: number
    nombre: number
    tipo_prod: number
    u_med: number
    precio: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id_producto?: true
    precio?: true
  }

  export type ProductoSumAggregateInputType = {
    id_producto?: true
    precio?: true
  }

  export type ProductoMinAggregateInputType = {
    id_producto?: true
    nombre?: true
    tipo_prod?: true
    u_med?: true
    precio?: true
  }

  export type ProductoMaxAggregateInputType = {
    id_producto?: true
    nombre?: true
    tipo_prod?: true
    u_med?: true
    precio?: true
  }

  export type ProductoCountAggregateInputType = {
    id_producto?: true
    nombre?: true
    tipo_prod?: true
    u_med?: true
    precio?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto to aggregate.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productoWhereInput
    orderBy?: productoOrderByWithAggregationInput | productoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre?: boolean
    tipo_prod?: boolean
    u_med?: boolean
    precio?: boolean
    detalle_pedido?: boolean | producto$detalle_pedidoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type productoSelectScalar = {
    id_producto?: boolean
    nombre?: boolean
    tipo_prod?: boolean
    u_med?: boolean
    precio?: boolean
  }

  export type productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "nombre" | "tipo_prod" | "u_med" | "precio", ExtArgs["result"]["producto"]>
  export type productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_pedido?: boolean | producto$detalle_pedidoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "producto"
    objects: {
      detalle_pedido: Prisma.$detalle_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      nombre: string
      tipo_prod: $Enums.producto_tipo_prod
      u_med: $Enums.producto_u_med
      precio: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type productoGetPayload<S extends boolean | null | undefined | productoDefaultArgs> = $Result.GetResult<Prisma.$productoPayload, S>

  type productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['producto'], meta: { name: 'producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {productoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productoFindUniqueArgs>(args: SelectSubset<T, productoFindUniqueArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(args: SelectSubset<T, productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productoFindFirstArgs>(args?: SelectSubset<T, productoFindFirstArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(args?: SelectSubset<T, productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends productoFindManyArgs>(args?: SelectSubset<T, productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {productoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends productoCreateArgs>(args: SelectSubset<T, productoCreateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productoCreateManyArgs>(args?: SelectSubset<T, productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {productoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends productoDeleteArgs>(args: SelectSubset<T, productoDeleteArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {productoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productoUpdateArgs>(args: SelectSubset<T, productoUpdateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productoDeleteManyArgs>(args?: SelectSubset<T, productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productoUpdateManyArgs>(args: SelectSubset<T, productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {productoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends productoUpsertArgs>(args: SelectSubset<T, productoUpsertArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productoCountArgs>(
      args?: Subset<T, productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productoGroupByArgs['orderBy'] }
        : { orderBy?: productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the producto model
   */
  readonly fields: productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_pedido<T extends producto$detalle_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, producto$detalle_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the producto model
   */
  interface productoFieldRefs {
    readonly id_producto: FieldRef<"producto", 'Int'>
    readonly nombre: FieldRef<"producto", 'String'>
    readonly tipo_prod: FieldRef<"producto", 'producto_tipo_prod'>
    readonly u_med: FieldRef<"producto", 'producto_u_med'>
    readonly precio: FieldRef<"producto", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * producto findUnique
   */
  export type productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findUniqueOrThrow
   */
  export type productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findFirst
   */
  export type productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findFirstOrThrow
   */
  export type productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findMany
   */
  export type productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto create
   */
  export type productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to create a producto.
     */
    data: XOR<productoCreateInput, productoUncheckedCreateInput>
  }

  /**
   * producto createMany
   */
  export type productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * producto update
   */
  export type productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to update a producto.
     */
    data: XOR<productoUpdateInput, productoUncheckedUpdateInput>
    /**
     * Choose, which producto to update.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto updateMany
   */
  export type productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * producto upsert
   */
  export type productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The filter to search for the producto to update in case it exists.
     */
    where: productoWhereUniqueInput
    /**
     * In case the producto found by the `where` argument doesn't exist, create a new producto with this data.
     */
    create: XOR<productoCreateInput, productoUncheckedCreateInput>
    /**
     * In case the producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productoUpdateInput, productoUncheckedUpdateInput>
  }

  /**
   * producto delete
   */
  export type productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter which producto to delete.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto deleteMany
   */
  export type productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * producto.detalle_pedido
   */
  export type producto$detalle_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedido
     */
    select?: detalle_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedido
     */
    omit?: detalle_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidoInclude<ExtArgs> | null
    where?: detalle_pedidoWhereInput
    orderBy?: detalle_pedidoOrderByWithRelationInput | detalle_pedidoOrderByWithRelationInput[]
    cursor?: detalle_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_pedidoScalarFieldEnum | Detalle_pedidoScalarFieldEnum[]
  }

  /**
   * producto without action
   */
  export type productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    numero_tel: string | null
    usuario: string | null
    contra: string | null
    tipo_usuario: $Enums.usuario_tipo_usuario | null
    fecha_registro: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    numero_tel: string | null
    usuario: string | null
    contra: string | null
    tipo_usuario: $Enums.usuario_tipo_usuario | null
    fecha_registro: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    email: number
    numero_tel: number
    usuario: number
    contra: number
    tipo_usuario: number
    fecha_registro: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    numero_tel?: true
    usuario?: true
    contra?: true
    tipo_usuario?: true
    fecha_registro?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    numero_tel?: true
    usuario?: true
    contra?: true
    tipo_usuario?: true
    fecha_registro?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    numero_tel?: true
    usuario?: true
    contra?: true
    tipo_usuario?: true
    fecha_registro?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    email: string | null
    numero_tel: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    numero_tel?: boolean
    usuario?: boolean
    contra?: boolean
    tipo_usuario?: boolean
    fecha_registro?: boolean
    pedido?: boolean | usuario$pedidoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    numero_tel?: boolean
    usuario?: boolean
    contra?: boolean
    tipo_usuario?: boolean
    fecha_registro?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "email" | "numero_tel" | "usuario" | "contra" | "tipo_usuario" | "fecha_registro", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | usuario$pedidoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      email: string | null
      numero_tel: string | null
      usuario: string
      contra: string
      tipo_usuario: $Enums.usuario_tipo_usuario
      fecha_registro: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends usuario$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly apellido: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly numero_tel: FieldRef<"usuario", 'String'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly contra: FieldRef<"usuario", 'String'>
    readonly tipo_usuario: FieldRef<"usuario", 'usuario_tipo_usuario'>
    readonly fecha_registro: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.pedido
   */
  export type usuario$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Detalle_extra_pedidoScalarFieldEnum: {
    id_detalle: 'id_detalle',
    id_extra: 'id_extra',
    cantidad: 'cantidad',
    precio_extra: 'precio_extra'
  };

  export type Detalle_extra_pedidoScalarFieldEnum = (typeof Detalle_extra_pedidoScalarFieldEnum)[keyof typeof Detalle_extra_pedidoScalarFieldEnum]


  export const Detalle_pedidoScalarFieldEnum: {
    id_detalle: 'id_detalle',
    id_pedido: 'id_pedido',
    id_producto: 'id_producto',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    subtotal: 'subtotal'
  };

  export type Detalle_pedidoScalarFieldEnum = (typeof Detalle_pedidoScalarFieldEnum)[keyof typeof Detalle_pedidoScalarFieldEnum]


  export const ExtraScalarFieldEnum: {
    id_extra: 'id_extra',
    nombre: 'nombre',
    precio: 'precio'
  };

  export type ExtraScalarFieldEnum = (typeof ExtraScalarFieldEnum)[keyof typeof ExtraScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id_notificacion: 'id_notificacion',
    id_pedido: 'id_pedido',
    mensaje: 'mensaje',
    status: 'status',
    fecha: 'fecha'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id_pago: 'id_pago',
    id_pedido: 'id_pedido',
    metodo_pago: 'metodo_pago',
    monto_pagado: 'monto_pagado',
    fecha_pago: 'fecha_pago',
    status: 'status'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    id_usuario: 'id_usuario',
    fecha: 'fecha',
    status: 'status',
    codigo_conf: 'codigo_conf',
    total: 'total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id_producto: 'id_producto',
    nombre: 'nombre',
    tipo_prod: 'tipo_prod',
    u_med: 'u_med',
    precio: 'precio'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
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

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const extraOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type extraOrderByRelevanceFieldEnum = (typeof extraOrderByRelevanceFieldEnum)[keyof typeof extraOrderByRelevanceFieldEnum]


  export const notificacionOrderByRelevanceFieldEnum: {
    mensaje: 'mensaje'
  };

  export type notificacionOrderByRelevanceFieldEnum = (typeof notificacionOrderByRelevanceFieldEnum)[keyof typeof notificacionOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const pedidoOrderByRelevanceFieldEnum: {
    codigo_conf: 'codigo_conf'
  };

  export type pedidoOrderByRelevanceFieldEnum = (typeof pedidoOrderByRelevanceFieldEnum)[keyof typeof pedidoOrderByRelevanceFieldEnum]


  export const productoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type productoOrderByRelevanceFieldEnum = (typeof productoOrderByRelevanceFieldEnum)[keyof typeof productoOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    numero_tel: 'numero_tel',
    usuario: 'usuario',
    contra: 'contra'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'notificacion_status'
   */
  export type Enumnotificacion_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notificacion_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'pago_metodo_pago'
   */
  export type Enumpago_metodo_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pago_metodo_pago'>
    


  /**
   * Reference to a field of type 'pago_status'
   */
  export type Enumpago_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pago_status'>
    


  /**
   * Reference to a field of type 'pedido_status'
   */
  export type Enumpedido_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pedido_status'>
    


  /**
   * Reference to a field of type 'producto_tipo_prod'
   */
  export type Enumproducto_tipo_prodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'producto_tipo_prod'>
    


  /**
   * Reference to a field of type 'producto_u_med'
   */
  export type Enumproducto_u_medFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'producto_u_med'>
    


  /**
   * Reference to a field of type 'usuario_tipo_usuario'
   */
  export type Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuario_tipo_usuario'>
    
  /**
   * Deep Input Types
   */


  export type detalle_extra_pedidoWhereInput = {
    AND?: detalle_extra_pedidoWhereInput | detalle_extra_pedidoWhereInput[]
    OR?: detalle_extra_pedidoWhereInput[]
    NOT?: detalle_extra_pedidoWhereInput | detalle_extra_pedidoWhereInput[]
    id_detalle?: IntFilter<"detalle_extra_pedido"> | number
    id_extra?: IntFilter<"detalle_extra_pedido"> | number
    cantidad?: IntFilter<"detalle_extra_pedido"> | number
    precio_extra?: FloatFilter<"detalle_extra_pedido"> | number
    detalle_pedido?: XOR<Detalle_pedidoScalarRelationFilter, detalle_pedidoWhereInput>
    extra?: XOR<ExtraScalarRelationFilter, extraWhereInput>
  }

  export type detalle_extra_pedidoOrderByWithRelationInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
    detalle_pedido?: detalle_pedidoOrderByWithRelationInput
    extra?: extraOrderByWithRelationInput
  }

  export type detalle_extra_pedidoWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number
    AND?: detalle_extra_pedidoWhereInput | detalle_extra_pedidoWhereInput[]
    OR?: detalle_extra_pedidoWhereInput[]
    NOT?: detalle_extra_pedidoWhereInput | detalle_extra_pedidoWhereInput[]
    id_extra?: IntFilter<"detalle_extra_pedido"> | number
    cantidad?: IntFilter<"detalle_extra_pedido"> | number
    precio_extra?: FloatFilter<"detalle_extra_pedido"> | number
    detalle_pedido?: XOR<Detalle_pedidoScalarRelationFilter, detalle_pedidoWhereInput>
    extra?: XOR<ExtraScalarRelationFilter, extraWhereInput>
  }, "id_detalle">

  export type detalle_extra_pedidoOrderByWithAggregationInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
    _count?: detalle_extra_pedidoCountOrderByAggregateInput
    _avg?: detalle_extra_pedidoAvgOrderByAggregateInput
    _max?: detalle_extra_pedidoMaxOrderByAggregateInput
    _min?: detalle_extra_pedidoMinOrderByAggregateInput
    _sum?: detalle_extra_pedidoSumOrderByAggregateInput
  }

  export type detalle_extra_pedidoScalarWhereWithAggregatesInput = {
    AND?: detalle_extra_pedidoScalarWhereWithAggregatesInput | detalle_extra_pedidoScalarWhereWithAggregatesInput[]
    OR?: detalle_extra_pedidoScalarWhereWithAggregatesInput[]
    NOT?: detalle_extra_pedidoScalarWhereWithAggregatesInput | detalle_extra_pedidoScalarWhereWithAggregatesInput[]
    id_detalle?: IntWithAggregatesFilter<"detalle_extra_pedido"> | number
    id_extra?: IntWithAggregatesFilter<"detalle_extra_pedido"> | number
    cantidad?: IntWithAggregatesFilter<"detalle_extra_pedido"> | number
    precio_extra?: FloatWithAggregatesFilter<"detalle_extra_pedido"> | number
  }

  export type detalle_pedidoWhereInput = {
    AND?: detalle_pedidoWhereInput | detalle_pedidoWhereInput[]
    OR?: detalle_pedidoWhereInput[]
    NOT?: detalle_pedidoWhereInput | detalle_pedidoWhereInput[]
    id_detalle?: IntFilter<"detalle_pedido"> | number
    id_pedido?: IntFilter<"detalle_pedido"> | number
    id_producto?: IntFilter<"detalle_pedido"> | number
    cantidad?: IntFilter<"detalle_pedido"> | number
    precio_unitario?: FloatFilter<"detalle_pedido"> | number
    subtotal?: FloatFilter<"detalle_pedido"> | number
    detalle_extra_pedido?: XOR<Detalle_extra_pedidoNullableScalarRelationFilter, detalle_extra_pedidoWhereInput> | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }

  export type detalle_pedidoOrderByWithRelationInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    detalle_extra_pedido?: detalle_extra_pedidoOrderByWithRelationInput
    pedido?: pedidoOrderByWithRelationInput
    producto?: productoOrderByWithRelationInput
  }

  export type detalle_pedidoWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number
    AND?: detalle_pedidoWhereInput | detalle_pedidoWhereInput[]
    OR?: detalle_pedidoWhereInput[]
    NOT?: detalle_pedidoWhereInput | detalle_pedidoWhereInput[]
    id_pedido?: IntFilter<"detalle_pedido"> | number
    id_producto?: IntFilter<"detalle_pedido"> | number
    cantidad?: IntFilter<"detalle_pedido"> | number
    precio_unitario?: FloatFilter<"detalle_pedido"> | number
    subtotal?: FloatFilter<"detalle_pedido"> | number
    detalle_extra_pedido?: XOR<Detalle_extra_pedidoNullableScalarRelationFilter, detalle_extra_pedidoWhereInput> | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }, "id_detalle">

  export type detalle_pedidoOrderByWithAggregationInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    _count?: detalle_pedidoCountOrderByAggregateInput
    _avg?: detalle_pedidoAvgOrderByAggregateInput
    _max?: detalle_pedidoMaxOrderByAggregateInput
    _min?: detalle_pedidoMinOrderByAggregateInput
    _sum?: detalle_pedidoSumOrderByAggregateInput
  }

  export type detalle_pedidoScalarWhereWithAggregatesInput = {
    AND?: detalle_pedidoScalarWhereWithAggregatesInput | detalle_pedidoScalarWhereWithAggregatesInput[]
    OR?: detalle_pedidoScalarWhereWithAggregatesInput[]
    NOT?: detalle_pedidoScalarWhereWithAggregatesInput | detalle_pedidoScalarWhereWithAggregatesInput[]
    id_detalle?: IntWithAggregatesFilter<"detalle_pedido"> | number
    id_pedido?: IntWithAggregatesFilter<"detalle_pedido"> | number
    id_producto?: IntWithAggregatesFilter<"detalle_pedido"> | number
    cantidad?: IntWithAggregatesFilter<"detalle_pedido"> | number
    precio_unitario?: FloatWithAggregatesFilter<"detalle_pedido"> | number
    subtotal?: FloatWithAggregatesFilter<"detalle_pedido"> | number
  }

  export type extraWhereInput = {
    AND?: extraWhereInput | extraWhereInput[]
    OR?: extraWhereInput[]
    NOT?: extraWhereInput | extraWhereInput[]
    id_extra?: IntFilter<"extra"> | number
    nombre?: StringFilter<"extra"> | string
    precio?: FloatFilter<"extra"> | number
    detalle_extra_pedido?: Detalle_extra_pedidoListRelationFilter
  }

  export type extraOrderByWithRelationInput = {
    id_extra?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    detalle_extra_pedido?: detalle_extra_pedidoOrderByRelationAggregateInput
    _relevance?: extraOrderByRelevanceInput
  }

  export type extraWhereUniqueInput = Prisma.AtLeast<{
    id_extra?: number
    AND?: extraWhereInput | extraWhereInput[]
    OR?: extraWhereInput[]
    NOT?: extraWhereInput | extraWhereInput[]
    nombre?: StringFilter<"extra"> | string
    precio?: FloatFilter<"extra"> | number
    detalle_extra_pedido?: Detalle_extra_pedidoListRelationFilter
  }, "id_extra">

  export type extraOrderByWithAggregationInput = {
    id_extra?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    _count?: extraCountOrderByAggregateInput
    _avg?: extraAvgOrderByAggregateInput
    _max?: extraMaxOrderByAggregateInput
    _min?: extraMinOrderByAggregateInput
    _sum?: extraSumOrderByAggregateInput
  }

  export type extraScalarWhereWithAggregatesInput = {
    AND?: extraScalarWhereWithAggregatesInput | extraScalarWhereWithAggregatesInput[]
    OR?: extraScalarWhereWithAggregatesInput[]
    NOT?: extraScalarWhereWithAggregatesInput | extraScalarWhereWithAggregatesInput[]
    id_extra?: IntWithAggregatesFilter<"extra"> | number
    nombre?: StringWithAggregatesFilter<"extra"> | string
    precio?: FloatWithAggregatesFilter<"extra"> | number
  }

  export type notificacionWhereInput = {
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    id_pedido?: IntFilter<"notificacion"> | number
    mensaje?: StringFilter<"notificacion"> | string
    status?: Enumnotificacion_statusFilter<"notificacion"> | $Enums.notificacion_status
    fecha?: DateTimeFilter<"notificacion"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type notificacionOrderByWithRelationInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
    mensaje?: SortOrder
    status?: SortOrder
    fecha?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    _relevance?: notificacionOrderByRelevanceInput
  }

  export type notificacionWhereUniqueInput = Prisma.AtLeast<{
    id_notificacion?: number
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    id_pedido?: IntFilter<"notificacion"> | number
    mensaje?: StringFilter<"notificacion"> | string
    status?: Enumnotificacion_statusFilter<"notificacion"> | $Enums.notificacion_status
    fecha?: DateTimeFilter<"notificacion"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_notificacion">

  export type notificacionOrderByWithAggregationInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
    mensaje?: SortOrder
    status?: SortOrder
    fecha?: SortOrder
    _count?: notificacionCountOrderByAggregateInput
    _avg?: notificacionAvgOrderByAggregateInput
    _max?: notificacionMaxOrderByAggregateInput
    _min?: notificacionMinOrderByAggregateInput
    _sum?: notificacionSumOrderByAggregateInput
  }

  export type notificacionScalarWhereWithAggregatesInput = {
    AND?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    OR?: notificacionScalarWhereWithAggregatesInput[]
    NOT?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    id_notificacion?: IntWithAggregatesFilter<"notificacion"> | number
    id_pedido?: IntWithAggregatesFilter<"notificacion"> | number
    mensaje?: StringWithAggregatesFilter<"notificacion"> | string
    status?: Enumnotificacion_statusWithAggregatesFilter<"notificacion"> | $Enums.notificacion_status
    fecha?: DateTimeWithAggregatesFilter<"notificacion"> | Date | string
  }

  export type pagoWhereInput = {
    AND?: pagoWhereInput | pagoWhereInput[]
    OR?: pagoWhereInput[]
    NOT?: pagoWhereInput | pagoWhereInput[]
    id_pago?: IntFilter<"pago"> | number
    id_pedido?: IntFilter<"pago"> | number
    metodo_pago?: Enumpago_metodo_pagoFilter<"pago"> | $Enums.pago_metodo_pago
    monto_pagado?: FloatFilter<"pago"> | number
    fecha_pago?: DateTimeFilter<"pago"> | Date | string
    status?: Enumpago_statusFilter<"pago"> | $Enums.pago_status
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type pagoOrderByWithRelationInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_pago?: SortOrder
    status?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
  }

  export type pagoWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number
    AND?: pagoWhereInput | pagoWhereInput[]
    OR?: pagoWhereInput[]
    NOT?: pagoWhereInput | pagoWhereInput[]
    id_pedido?: IntFilter<"pago"> | number
    metodo_pago?: Enumpago_metodo_pagoFilter<"pago"> | $Enums.pago_metodo_pago
    monto_pagado?: FloatFilter<"pago"> | number
    fecha_pago?: DateTimeFilter<"pago"> | Date | string
    status?: Enumpago_statusFilter<"pago"> | $Enums.pago_status
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "id_pago">

  export type pagoOrderByWithAggregationInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_pago?: SortOrder
    status?: SortOrder
    _count?: pagoCountOrderByAggregateInput
    _avg?: pagoAvgOrderByAggregateInput
    _max?: pagoMaxOrderByAggregateInput
    _min?: pagoMinOrderByAggregateInput
    _sum?: pagoSumOrderByAggregateInput
  }

  export type pagoScalarWhereWithAggregatesInput = {
    AND?: pagoScalarWhereWithAggregatesInput | pagoScalarWhereWithAggregatesInput[]
    OR?: pagoScalarWhereWithAggregatesInput[]
    NOT?: pagoScalarWhereWithAggregatesInput | pagoScalarWhereWithAggregatesInput[]
    id_pago?: IntWithAggregatesFilter<"pago"> | number
    id_pedido?: IntWithAggregatesFilter<"pago"> | number
    metodo_pago?: Enumpago_metodo_pagoWithAggregatesFilter<"pago"> | $Enums.pago_metodo_pago
    monto_pagado?: FloatWithAggregatesFilter<"pago"> | number
    fecha_pago?: DateTimeWithAggregatesFilter<"pago"> | Date | string
    status?: Enumpago_statusWithAggregatesFilter<"pago"> | $Enums.pago_status
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id_pedido?: IntFilter<"pedido"> | number
    id_usuario?: IntFilter<"pedido"> | number
    fecha?: DateTimeFilter<"pedido"> | Date | string
    status?: Enumpedido_statusFilter<"pedido"> | $Enums.pedido_status
    codigo_conf?: StringFilter<"pedido"> | string
    total?: FloatNullableFilter<"pedido"> | number | null
    detalle_pedido?: Detalle_pedidoListRelationFilter
    notificacion?: NotificacionListRelationFilter
    pago?: PagoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type pedidoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    fecha?: SortOrder
    status?: SortOrder
    codigo_conf?: SortOrder
    total?: SortOrderInput | SortOrder
    detalle_pedido?: detalle_pedidoOrderByRelationAggregateInput
    notificacion?: notificacionOrderByRelationAggregateInput
    pago?: pagoOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: pedidoOrderByRelevanceInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id_usuario?: IntFilter<"pedido"> | number
    fecha?: DateTimeFilter<"pedido"> | Date | string
    status?: Enumpedido_statusFilter<"pedido"> | $Enums.pedido_status
    codigo_conf?: StringFilter<"pedido"> | string
    total?: FloatNullableFilter<"pedido"> | number | null
    detalle_pedido?: Detalle_pedidoListRelationFilter
    notificacion?: NotificacionListRelationFilter
    pago?: PagoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_pedido">

  export type pedidoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    fecha?: SortOrder
    status?: SortOrder
    codigo_conf?: SortOrder
    total?: SortOrderInput | SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"pedido"> | number
    id_usuario?: IntWithAggregatesFilter<"pedido"> | number
    fecha?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    status?: Enumpedido_statusWithAggregatesFilter<"pedido"> | $Enums.pedido_status
    codigo_conf?: StringWithAggregatesFilter<"pedido"> | string
    total?: FloatNullableWithAggregatesFilter<"pedido"> | number | null
  }

  export type productoWhereInput = {
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    id_producto?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    tipo_prod?: Enumproducto_tipo_prodFilter<"producto"> | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFilter<"producto"> | $Enums.producto_u_med
    precio?: FloatFilter<"producto"> | number
    detalle_pedido?: Detalle_pedidoListRelationFilter
  }

  export type productoOrderByWithRelationInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    tipo_prod?: SortOrder
    u_med?: SortOrder
    precio?: SortOrder
    detalle_pedido?: detalle_pedidoOrderByRelationAggregateInput
    _relevance?: productoOrderByRelevanceInput
  }

  export type productoWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    nombre?: StringFilter<"producto"> | string
    tipo_prod?: Enumproducto_tipo_prodFilter<"producto"> | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFilter<"producto"> | $Enums.producto_u_med
    precio?: FloatFilter<"producto"> | number
    detalle_pedido?: Detalle_pedidoListRelationFilter
  }, "id_producto">

  export type productoOrderByWithAggregationInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    tipo_prod?: SortOrder
    u_med?: SortOrder
    precio?: SortOrder
    _count?: productoCountOrderByAggregateInput
    _avg?: productoAvgOrderByAggregateInput
    _max?: productoMaxOrderByAggregateInput
    _min?: productoMinOrderByAggregateInput
    _sum?: productoSumOrderByAggregateInput
  }

  export type productoScalarWhereWithAggregatesInput = {
    AND?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    OR?: productoScalarWhereWithAggregatesInput[]
    NOT?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"producto"> | number
    nombre?: StringWithAggregatesFilter<"producto"> | string
    tipo_prod?: Enumproducto_tipo_prodWithAggregatesFilter<"producto"> | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medWithAggregatesFilter<"producto"> | $Enums.producto_u_med
    precio?: FloatWithAggregatesFilter<"producto"> | number
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    apellido?: StringFilter<"usuario"> | string
    email?: StringNullableFilter<"usuario"> | string | null
    numero_tel?: StringNullableFilter<"usuario"> | string | null
    usuario?: StringFilter<"usuario"> | string
    contra?: StringFilter<"usuario"> | string
    tipo_usuario?: Enumusuario_tipo_usuarioFilter<"usuario"> | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFilter<"usuario"> | Date | string
    pedido?: PedidoListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    numero_tel?: SortOrderInput | SortOrder
    usuario?: SortOrder
    contra?: SortOrder
    tipo_usuario?: SortOrder
    fecha_registro?: SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    usuario?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    apellido?: StringFilter<"usuario"> | string
    numero_tel?: StringNullableFilter<"usuario"> | string | null
    contra?: StringFilter<"usuario"> | string
    tipo_usuario?: Enumusuario_tipo_usuarioFilter<"usuario"> | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFilter<"usuario"> | Date | string
    pedido?: PedidoListRelationFilter
  }, "id_usuario" | "email" | "usuario">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrderInput | SortOrder
    numero_tel?: SortOrderInput | SortOrder
    usuario?: SortOrder
    contra?: SortOrder
    tipo_usuario?: SortOrder
    fecha_registro?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    apellido?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    numero_tel?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    usuario?: StringWithAggregatesFilter<"usuario"> | string
    contra?: StringWithAggregatesFilter<"usuario"> | string
    tipo_usuario?: Enumusuario_tipo_usuarioWithAggregatesFilter<"usuario"> | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
  }

  export type detalle_extra_pedidoCreateInput = {
    cantidad: number
    precio_extra: number
    detalle_pedido: detalle_pedidoCreateNestedOneWithoutDetalle_extra_pedidoInput
    extra: extraCreateNestedOneWithoutDetalle_extra_pedidoInput
  }

  export type detalle_extra_pedidoUncheckedCreateInput = {
    id_detalle: number
    id_extra: number
    cantidad: number
    precio_extra: number
  }

  export type detalle_extra_pedidoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
    detalle_pedido?: detalle_pedidoUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput
    extra?: extraUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput
  }

  export type detalle_extra_pedidoUncheckedUpdateInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_extra?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_extra_pedidoCreateManyInput = {
    id_detalle: number
    id_extra: number
    cantidad: number
    precio_extra: number
  }

  export type detalle_extra_pedidoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_extra_pedidoUncheckedUpdateManyInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_extra?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_pedidoCreateInput = {
    id_detalle: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoCreateNestedOneWithoutDetalle_pedidoInput
    pedido: pedidoCreateNestedOneWithoutDetalle_pedidoInput
    producto: productoCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoUncheckedCreateInput = {
    id_detalle: number
    id_pedido: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoUpdateInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUpdateOneWithoutDetalle_pedidoNestedInput
    pedido?: pedidoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
    producto?: productoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedUpdateOneWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoCreateManyInput = {
    id_detalle: number
    id_pedido: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
  }

  export type detalle_pedidoUpdateManyMutationInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_pedidoUncheckedUpdateManyInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type extraCreateInput = {
    id_extra: number
    nombre: string
    precio: number
    detalle_extra_pedido?: detalle_extra_pedidoCreateNestedManyWithoutExtraInput
  }

  export type extraUncheckedCreateInput = {
    id_extra: number
    nombre: string
    precio: number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedCreateNestedManyWithoutExtraInput
  }

  export type extraUpdateInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUpdateManyWithoutExtraNestedInput
  }

  export type extraUncheckedUpdateInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedUpdateManyWithoutExtraNestedInput
  }

  export type extraCreateManyInput = {
    id_extra: number
    nombre: string
    precio: number
  }

  export type extraUpdateManyMutationInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type extraUncheckedUpdateManyInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type notificacionCreateInput = {
    id_notificacion: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
    pedido: pedidoCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateInput = {
    id_notificacion: number
    id_pedido: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
  }

  export type notificacionUpdateInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionCreateManyInput = {
    id_notificacion: number
    id_pedido: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
  }

  export type notificacionUpdateManyMutationInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionUncheckedUpdateManyInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoCreateInput = {
    id_pago: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
    pedido: pedidoCreateNestedOneWithoutPagoInput
  }

  export type pagoUncheckedCreateInput = {
    id_pago: number
    id_pedido: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
  }

  export type pagoUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
    pedido?: pedidoUpdateOneRequiredWithoutPagoNestedInput
  }

  export type pagoUncheckedUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type pagoCreateManyInput = {
    id_pago: number
    id_pedido: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
  }

  export type pagoUpdateManyMutationInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type pagoUncheckedUpdateManyInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type pedidoCreateInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionCreateNestedManyWithoutPedidoInput
    pago?: pagoCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id_pedido: number
    id_usuario: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPedidoInput
    pago?: pagoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUpdateManyWithoutPedidoNestedInput
    pago?: pagoUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutPedidoNestedInput
    pago?: pagoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id_pedido: number
    id_usuario: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
  }

  export type pedidoUpdateManyMutationInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type pedidoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productoCreateInput = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
    detalle_pedido?: detalle_pedidoCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateInput = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
    detalle_pedido?: detalle_pedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
    detalle_pedido?: detalle_pedidoUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
    detalle_pedido?: detalle_pedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoCreateManyInput = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
  }

  export type productoUpdateManyMutationInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type usuarioCreateInput = {
    id_usuario: number
    nombre: string
    apellido: string
    email?: string | null
    numero_tel?: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro?: Date | string
    pedido?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario: number
    nombre: string
    apellido: string
    email?: string | null
    numero_tel?: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro?: Date | string
    pedido?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario: number
    nombre: string
    apellido: string
    email?: string | null
    numero_tel?: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro?: Date | string
  }

  export type usuarioUpdateManyMutationInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Detalle_pedidoScalarRelationFilter = {
    is?: detalle_pedidoWhereInput
    isNot?: detalle_pedidoWhereInput
  }

  export type ExtraScalarRelationFilter = {
    is?: extraWhereInput
    isNot?: extraWhereInput
  }

  export type detalle_extra_pedidoCountOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
  }

  export type detalle_extra_pedidoAvgOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
  }

  export type detalle_extra_pedidoMaxOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
  }

  export type detalle_extra_pedidoMinOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
  }

  export type detalle_extra_pedidoSumOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_extra?: SortOrder
    cantidad?: SortOrder
    precio_extra?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Detalle_extra_pedidoNullableScalarRelationFilter = {
    is?: detalle_extra_pedidoWhereInput | null
    isNot?: detalle_extra_pedidoWhereInput | null
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: productoWhereInput
    isNot?: productoWhereInput
  }

  export type detalle_pedidoCountOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidoAvgOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidoMaxOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidoMinOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidoSumOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Detalle_extra_pedidoListRelationFilter = {
    every?: detalle_extra_pedidoWhereInput
    some?: detalle_extra_pedidoWhereInput
    none?: detalle_extra_pedidoWhereInput
  }

  export type detalle_extra_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type extraOrderByRelevanceInput = {
    fields: extraOrderByRelevanceFieldEnum | extraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type extraCountOrderByAggregateInput = {
    id_extra?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type extraAvgOrderByAggregateInput = {
    id_extra?: SortOrder
    precio?: SortOrder
  }

  export type extraMaxOrderByAggregateInput = {
    id_extra?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type extraMinOrderByAggregateInput = {
    id_extra?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type extraSumOrderByAggregateInput = {
    id_extra?: SortOrder
    precio?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumnotificacion_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.notificacion_status | Enumnotificacion_statusFieldRefInput<$PrismaModel>
    in?: $Enums.notificacion_status[]
    notIn?: $Enums.notificacion_status[]
    not?: NestedEnumnotificacion_statusFilter<$PrismaModel> | $Enums.notificacion_status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type notificacionOrderByRelevanceInput = {
    fields: notificacionOrderByRelevanceFieldEnum | notificacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificacionCountOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
    mensaje?: SortOrder
    status?: SortOrder
    fecha?: SortOrder
  }

  export type notificacionAvgOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
  }

  export type notificacionMaxOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
    mensaje?: SortOrder
    status?: SortOrder
    fecha?: SortOrder
  }

  export type notificacionMinOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
    mensaje?: SortOrder
    status?: SortOrder
    fecha?: SortOrder
  }

  export type notificacionSumOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_pedido?: SortOrder
  }

  export type Enumnotificacion_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notificacion_status | Enumnotificacion_statusFieldRefInput<$PrismaModel>
    in?: $Enums.notificacion_status[]
    notIn?: $Enums.notificacion_status[]
    not?: NestedEnumnotificacion_statusWithAggregatesFilter<$PrismaModel> | $Enums.notificacion_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotificacion_statusFilter<$PrismaModel>
    _max?: NestedEnumnotificacion_statusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumpago_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_metodo_pago | Enumpago_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pago_metodo_pago[]
    notIn?: $Enums.pago_metodo_pago[]
    not?: NestedEnumpago_metodo_pagoFilter<$PrismaModel> | $Enums.pago_metodo_pago
  }

  export type Enumpago_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_status | Enumpago_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pago_status[]
    notIn?: $Enums.pago_status[]
    not?: NestedEnumpago_statusFilter<$PrismaModel> | $Enums.pago_status
  }

  export type pagoCountOrderByAggregateInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_pago?: SortOrder
    status?: SortOrder
  }

  export type pagoAvgOrderByAggregateInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    monto_pagado?: SortOrder
  }

  export type pagoMaxOrderByAggregateInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_pago?: SortOrder
    status?: SortOrder
  }

  export type pagoMinOrderByAggregateInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    metodo_pago?: SortOrder
    monto_pagado?: SortOrder
    fecha_pago?: SortOrder
    status?: SortOrder
  }

  export type pagoSumOrderByAggregateInput = {
    id_pago?: SortOrder
    id_pedido?: SortOrder
    monto_pagado?: SortOrder
  }

  export type Enumpago_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_metodo_pago | Enumpago_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pago_metodo_pago[]
    notIn?: $Enums.pago_metodo_pago[]
    not?: NestedEnumpago_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pago_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpago_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpago_metodo_pagoFilter<$PrismaModel>
  }

  export type Enumpago_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_status | Enumpago_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pago_status[]
    notIn?: $Enums.pago_status[]
    not?: NestedEnumpago_statusWithAggregatesFilter<$PrismaModel> | $Enums.pago_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpago_statusFilter<$PrismaModel>
    _max?: NestedEnumpago_statusFilter<$PrismaModel>
  }

  export type Enumpedido_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_status | Enumpedido_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_status[]
    notIn?: $Enums.pedido_status[]
    not?: NestedEnumpedido_statusFilter<$PrismaModel> | $Enums.pedido_status
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Detalle_pedidoListRelationFilter = {
    every?: detalle_pedidoWhereInput
    some?: detalle_pedidoWhereInput
    none?: detalle_pedidoWhereInput
  }

  export type NotificacionListRelationFilter = {
    every?: notificacionWhereInput
    some?: notificacionWhereInput
    none?: notificacionWhereInput
  }

  export type PagoListRelationFilter = {
    every?: pagoWhereInput
    some?: pagoWhereInput
    none?: pagoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detalle_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoOrderByRelevanceInput = {
    fields: pedidoOrderByRelevanceFieldEnum | pedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pedidoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    fecha?: SortOrder
    status?: SortOrder
    codigo_conf?: SortOrder
    total?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    total?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    fecha?: SortOrder
    status?: SortOrder
    codigo_conf?: SortOrder
    total?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    fecha?: SortOrder
    status?: SortOrder
    codigo_conf?: SortOrder
    total?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_usuario?: SortOrder
    total?: SortOrder
  }

  export type Enumpedido_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_status | Enumpedido_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_status[]
    notIn?: $Enums.pedido_status[]
    not?: NestedEnumpedido_statusWithAggregatesFilter<$PrismaModel> | $Enums.pedido_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedido_statusFilter<$PrismaModel>
    _max?: NestedEnumpedido_statusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Enumproducto_tipo_prodFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_tipo_prod | Enumproducto_tipo_prodFieldRefInput<$PrismaModel>
    in?: $Enums.producto_tipo_prod[]
    notIn?: $Enums.producto_tipo_prod[]
    not?: NestedEnumproducto_tipo_prodFilter<$PrismaModel> | $Enums.producto_tipo_prod
  }

  export type Enumproducto_u_medFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_u_med | Enumproducto_u_medFieldRefInput<$PrismaModel>
    in?: $Enums.producto_u_med[]
    notIn?: $Enums.producto_u_med[]
    not?: NestedEnumproducto_u_medFilter<$PrismaModel> | $Enums.producto_u_med
  }

  export type productoOrderByRelevanceInput = {
    fields: productoOrderByRelevanceFieldEnum | productoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productoCountOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    tipo_prod?: SortOrder
    u_med?: SortOrder
    precio?: SortOrder
  }

  export type productoAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    precio?: SortOrder
  }

  export type productoMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    tipo_prod?: SortOrder
    u_med?: SortOrder
    precio?: SortOrder
  }

  export type productoMinOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    tipo_prod?: SortOrder
    u_med?: SortOrder
    precio?: SortOrder
  }

  export type productoSumOrderByAggregateInput = {
    id_producto?: SortOrder
    precio?: SortOrder
  }

  export type Enumproducto_tipo_prodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_tipo_prod | Enumproducto_tipo_prodFieldRefInput<$PrismaModel>
    in?: $Enums.producto_tipo_prod[]
    notIn?: $Enums.producto_tipo_prod[]
    not?: NestedEnumproducto_tipo_prodWithAggregatesFilter<$PrismaModel> | $Enums.producto_tipo_prod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducto_tipo_prodFilter<$PrismaModel>
    _max?: NestedEnumproducto_tipo_prodFilter<$PrismaModel>
  }

  export type Enumproducto_u_medWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_u_med | Enumproducto_u_medFieldRefInput<$PrismaModel>
    in?: $Enums.producto_u_med[]
    notIn?: $Enums.producto_u_med[]
    not?: NestedEnumproducto_u_medWithAggregatesFilter<$PrismaModel> | $Enums.producto_u_med
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducto_u_medFilter<$PrismaModel>
    _max?: NestedEnumproducto_u_medFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumusuario_tipo_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo_usuario[]
    notIn?: $Enums.usuario_tipo_usuario[]
    not?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel> | $Enums.usuario_tipo_usuario
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    numero_tel?: SortOrder
    usuario?: SortOrder
    contra?: SortOrder
    tipo_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    numero_tel?: SortOrder
    usuario?: SortOrder
    contra?: SortOrder
    tipo_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    numero_tel?: SortOrder
    usuario?: SortOrder
    contra?: SortOrder
    tipo_usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumusuario_tipo_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo_usuario[]
    notIn?: $Enums.usuario_tipo_usuario[]
    not?: NestedEnumusuario_tipo_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel>
  }

  export type detalle_pedidoCreateNestedOneWithoutDetalle_extra_pedidoInput = {
    create?: XOR<detalle_pedidoCreateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedCreateWithoutDetalle_extra_pedidoInput>
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutDetalle_extra_pedidoInput
    connect?: detalle_pedidoWhereUniqueInput
  }

  export type extraCreateNestedOneWithoutDetalle_extra_pedidoInput = {
    create?: XOR<extraCreateWithoutDetalle_extra_pedidoInput, extraUncheckedCreateWithoutDetalle_extra_pedidoInput>
    connectOrCreate?: extraCreateOrConnectWithoutDetalle_extra_pedidoInput
    connect?: extraWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type detalle_pedidoUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput = {
    create?: XOR<detalle_pedidoCreateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedCreateWithoutDetalle_extra_pedidoInput>
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutDetalle_extra_pedidoInput
    upsert?: detalle_pedidoUpsertWithoutDetalle_extra_pedidoInput
    connect?: detalle_pedidoWhereUniqueInput
    update?: XOR<XOR<detalle_pedidoUpdateToOneWithWhereWithoutDetalle_extra_pedidoInput, detalle_pedidoUpdateWithoutDetalle_extra_pedidoInput>, detalle_pedidoUncheckedUpdateWithoutDetalle_extra_pedidoInput>
  }

  export type extraUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput = {
    create?: XOR<extraCreateWithoutDetalle_extra_pedidoInput, extraUncheckedCreateWithoutDetalle_extra_pedidoInput>
    connectOrCreate?: extraCreateOrConnectWithoutDetalle_extra_pedidoInput
    upsert?: extraUpsertWithoutDetalle_extra_pedidoInput
    connect?: extraWhereUniqueInput
    update?: XOR<XOR<extraUpdateToOneWithWhereWithoutDetalle_extra_pedidoInput, extraUpdateWithoutDetalle_extra_pedidoInput>, extraUncheckedUpdateWithoutDetalle_extra_pedidoInput>
  }

  export type detalle_extra_pedidoCreateNestedOneWithoutDetalle_pedidoInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutDetalle_pedidoInput
    connect?: detalle_extra_pedidoWhereUniqueInput
  }

  export type pedidoCreateNestedOneWithoutDetalle_pedidoInput = {
    create?: XOR<pedidoCreateWithoutDetalle_pedidoInput, pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDetalle_pedidoInput
    connect?: pedidoWhereUniqueInput
  }

  export type productoCreateNestedOneWithoutDetalle_pedidoInput = {
    create?: XOR<productoCreateWithoutDetalle_pedidoInput, productoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: productoCreateOrConnectWithoutDetalle_pedidoInput
    connect?: productoWhereUniqueInput
  }

  export type detalle_extra_pedidoUncheckedCreateNestedOneWithoutDetalle_pedidoInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutDetalle_pedidoInput
    connect?: detalle_extra_pedidoWhereUniqueInput
  }

  export type detalle_extra_pedidoUpdateOneWithoutDetalle_pedidoNestedInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutDetalle_pedidoInput
    upsert?: detalle_extra_pedidoUpsertWithoutDetalle_pedidoInput
    disconnect?: detalle_extra_pedidoWhereInput | boolean
    delete?: detalle_extra_pedidoWhereInput | boolean
    connect?: detalle_extra_pedidoWhereUniqueInput
    update?: XOR<XOR<detalle_extra_pedidoUpdateToOneWithWhereWithoutDetalle_pedidoInput, detalle_extra_pedidoUpdateWithoutDetalle_pedidoInput>, detalle_extra_pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type pedidoUpdateOneRequiredWithoutDetalle_pedidoNestedInput = {
    create?: XOR<pedidoCreateWithoutDetalle_pedidoInput, pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutDetalle_pedidoInput
    upsert?: pedidoUpsertWithoutDetalle_pedidoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutDetalle_pedidoInput, pedidoUpdateWithoutDetalle_pedidoInput>, pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type productoUpdateOneRequiredWithoutDetalle_pedidoNestedInput = {
    create?: XOR<productoCreateWithoutDetalle_pedidoInput, productoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: productoCreateOrConnectWithoutDetalle_pedidoInput
    upsert?: productoUpsertWithoutDetalle_pedidoInput
    connect?: productoWhereUniqueInput
    update?: XOR<XOR<productoUpdateToOneWithWhereWithoutDetalle_pedidoInput, productoUpdateWithoutDetalle_pedidoInput>, productoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type detalle_extra_pedidoUncheckedUpdateOneWithoutDetalle_pedidoNestedInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutDetalle_pedidoInput
    upsert?: detalle_extra_pedidoUpsertWithoutDetalle_pedidoInput
    disconnect?: detalle_extra_pedidoWhereInput | boolean
    delete?: detalle_extra_pedidoWhereInput | boolean
    connect?: detalle_extra_pedidoWhereUniqueInput
    update?: XOR<XOR<detalle_extra_pedidoUpdateToOneWithWhereWithoutDetalle_pedidoInput, detalle_extra_pedidoUpdateWithoutDetalle_pedidoInput>, detalle_extra_pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type detalle_extra_pedidoCreateNestedManyWithoutExtraInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput> | detalle_extra_pedidoCreateWithoutExtraInput[] | detalle_extra_pedidoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutExtraInput | detalle_extra_pedidoCreateOrConnectWithoutExtraInput[]
    createMany?: detalle_extra_pedidoCreateManyExtraInputEnvelope
    connect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
  }

  export type detalle_extra_pedidoUncheckedCreateNestedManyWithoutExtraInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput> | detalle_extra_pedidoCreateWithoutExtraInput[] | detalle_extra_pedidoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutExtraInput | detalle_extra_pedidoCreateOrConnectWithoutExtraInput[]
    createMany?: detalle_extra_pedidoCreateManyExtraInputEnvelope
    connect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type detalle_extra_pedidoUpdateManyWithoutExtraNestedInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput> | detalle_extra_pedidoCreateWithoutExtraInput[] | detalle_extra_pedidoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutExtraInput | detalle_extra_pedidoCreateOrConnectWithoutExtraInput[]
    upsert?: detalle_extra_pedidoUpsertWithWhereUniqueWithoutExtraInput | detalle_extra_pedidoUpsertWithWhereUniqueWithoutExtraInput[]
    createMany?: detalle_extra_pedidoCreateManyExtraInputEnvelope
    set?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    disconnect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    delete?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    connect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    update?: detalle_extra_pedidoUpdateWithWhereUniqueWithoutExtraInput | detalle_extra_pedidoUpdateWithWhereUniqueWithoutExtraInput[]
    updateMany?: detalle_extra_pedidoUpdateManyWithWhereWithoutExtraInput | detalle_extra_pedidoUpdateManyWithWhereWithoutExtraInput[]
    deleteMany?: detalle_extra_pedidoScalarWhereInput | detalle_extra_pedidoScalarWhereInput[]
  }

  export type detalle_extra_pedidoUncheckedUpdateManyWithoutExtraNestedInput = {
    create?: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput> | detalle_extra_pedidoCreateWithoutExtraInput[] | detalle_extra_pedidoUncheckedCreateWithoutExtraInput[]
    connectOrCreate?: detalle_extra_pedidoCreateOrConnectWithoutExtraInput | detalle_extra_pedidoCreateOrConnectWithoutExtraInput[]
    upsert?: detalle_extra_pedidoUpsertWithWhereUniqueWithoutExtraInput | detalle_extra_pedidoUpsertWithWhereUniqueWithoutExtraInput[]
    createMany?: detalle_extra_pedidoCreateManyExtraInputEnvelope
    set?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    disconnect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    delete?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    connect?: detalle_extra_pedidoWhereUniqueInput | detalle_extra_pedidoWhereUniqueInput[]
    update?: detalle_extra_pedidoUpdateWithWhereUniqueWithoutExtraInput | detalle_extra_pedidoUpdateWithWhereUniqueWithoutExtraInput[]
    updateMany?: detalle_extra_pedidoUpdateManyWithWhereWithoutExtraInput | detalle_extra_pedidoUpdateManyWithWhereWithoutExtraInput[]
    deleteMany?: detalle_extra_pedidoScalarWhereInput | detalle_extra_pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutNotificacionInput = {
    create?: XOR<pedidoCreateWithoutNotificacionInput, pedidoUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutNotificacionInput
    connect?: pedidoWhereUniqueInput
  }

  export type Enumnotificacion_statusFieldUpdateOperationsInput = {
    set?: $Enums.notificacion_status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pedidoUpdateOneRequiredWithoutNotificacionNestedInput = {
    create?: XOR<pedidoCreateWithoutNotificacionInput, pedidoUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutNotificacionInput
    upsert?: pedidoUpsertWithoutNotificacionInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutNotificacionInput, pedidoUpdateWithoutNotificacionInput>, pedidoUncheckedUpdateWithoutNotificacionInput>
  }

  export type pedidoCreateNestedOneWithoutPagoInput = {
    create?: XOR<pedidoCreateWithoutPagoInput, pedidoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPagoInput
    connect?: pedidoWhereUniqueInput
  }

  export type Enumpago_metodo_pagoFieldUpdateOperationsInput = {
    set?: $Enums.pago_metodo_pago
  }

  export type Enumpago_statusFieldUpdateOperationsInput = {
    set?: $Enums.pago_status
  }

  export type pedidoUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<pedidoCreateWithoutPagoInput, pedidoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPagoInput
    upsert?: pedidoUpsertWithoutPagoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutPagoInput, pedidoUpdateWithoutPagoInput>, pedidoUncheckedUpdateWithoutPagoInput>
  }

  export type detalle_pedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput> | detalle_pedidoCreateWithoutPedidoInput[] | detalle_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutPedidoInput | detalle_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: detalle_pedidoCreateManyPedidoInputEnvelope
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
  }

  export type notificacionCreateNestedManyWithoutPedidoInput = {
    create?: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput> | notificacionCreateWithoutPedidoInput[] | notificacionUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPedidoInput | notificacionCreateOrConnectWithoutPedidoInput[]
    createMany?: notificacionCreateManyPedidoInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type pagoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput> | pagoCreateWithoutPedidoInput[] | pagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutPedidoInput | pagoCreateOrConnectWithoutPedidoInput[]
    createMany?: pagoCreateManyPedidoInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutPedidoInput = {
    create?: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidoInput
    connect?: usuarioWhereUniqueInput
  }

  export type detalle_pedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput> | detalle_pedidoCreateWithoutPedidoInput[] | detalle_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutPedidoInput | detalle_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: detalle_pedidoCreateManyPedidoInputEnvelope
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
  }

  export type notificacionUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput> | notificacionCreateWithoutPedidoInput[] | notificacionUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPedidoInput | notificacionCreateOrConnectWithoutPedidoInput[]
    createMany?: notificacionCreateManyPedidoInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type pagoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput> | pagoCreateWithoutPedidoInput[] | pagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutPedidoInput | pagoCreateOrConnectWithoutPedidoInput[]
    createMany?: pagoCreateManyPedidoInputEnvelope
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
  }

  export type Enumpedido_statusFieldUpdateOperationsInput = {
    set?: $Enums.pedido_status
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type detalle_pedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput> | detalle_pedidoCreateWithoutPedidoInput[] | detalle_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutPedidoInput | detalle_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: detalle_pedidoUpsertWithWhereUniqueWithoutPedidoInput | detalle_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: detalle_pedidoCreateManyPedidoInputEnvelope
    set?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    disconnect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    delete?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    update?: detalle_pedidoUpdateWithWhereUniqueWithoutPedidoInput | detalle_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: detalle_pedidoUpdateManyWithWhereWithoutPedidoInput | detalle_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
  }

  export type notificacionUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput> | notificacionCreateWithoutPedidoInput[] | notificacionUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPedidoInput | notificacionCreateOrConnectWithoutPedidoInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutPedidoInput | notificacionUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: notificacionCreateManyPedidoInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutPedidoInput | notificacionUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutPedidoInput | notificacionUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type pagoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput> | pagoCreateWithoutPedidoInput[] | pagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutPedidoInput | pagoCreateOrConnectWithoutPedidoInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutPedidoInput | pagoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pagoCreateManyPedidoInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutPedidoInput | pagoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutPedidoInput | pagoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type usuarioUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidoInput
    upsert?: usuarioUpsertWithoutPedidoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPedidoInput, usuarioUpdateWithoutPedidoInput>, usuarioUncheckedUpdateWithoutPedidoInput>
  }

  export type detalle_pedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput> | detalle_pedidoCreateWithoutPedidoInput[] | detalle_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutPedidoInput | detalle_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: detalle_pedidoUpsertWithWhereUniqueWithoutPedidoInput | detalle_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: detalle_pedidoCreateManyPedidoInputEnvelope
    set?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    disconnect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    delete?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    update?: detalle_pedidoUpdateWithWhereUniqueWithoutPedidoInput | detalle_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: detalle_pedidoUpdateManyWithWhereWithoutPedidoInput | detalle_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
  }

  export type notificacionUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput> | notificacionCreateWithoutPedidoInput[] | notificacionUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPedidoInput | notificacionCreateOrConnectWithoutPedidoInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutPedidoInput | notificacionUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: notificacionCreateManyPedidoInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutPedidoInput | notificacionUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutPedidoInput | notificacionUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type pagoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput> | pagoCreateWithoutPedidoInput[] | pagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pagoCreateOrConnectWithoutPedidoInput | pagoCreateOrConnectWithoutPedidoInput[]
    upsert?: pagoUpsertWithWhereUniqueWithoutPedidoInput | pagoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pagoCreateManyPedidoInputEnvelope
    set?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    disconnect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    delete?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    connect?: pagoWhereUniqueInput | pagoWhereUniqueInput[]
    update?: pagoUpdateWithWhereUniqueWithoutPedidoInput | pagoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pagoUpdateManyWithWhereWithoutPedidoInput | pagoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pagoScalarWhereInput | pagoScalarWhereInput[]
  }

  export type detalle_pedidoCreateNestedManyWithoutProductoInput = {
    create?: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput> | detalle_pedidoCreateWithoutProductoInput[] | detalle_pedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutProductoInput | detalle_pedidoCreateOrConnectWithoutProductoInput[]
    createMany?: detalle_pedidoCreateManyProductoInputEnvelope
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
  }

  export type detalle_pedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput> | detalle_pedidoCreateWithoutProductoInput[] | detalle_pedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutProductoInput | detalle_pedidoCreateOrConnectWithoutProductoInput[]
    createMany?: detalle_pedidoCreateManyProductoInputEnvelope
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
  }

  export type Enumproducto_tipo_prodFieldUpdateOperationsInput = {
    set?: $Enums.producto_tipo_prod
  }

  export type Enumproducto_u_medFieldUpdateOperationsInput = {
    set?: $Enums.producto_u_med
  }

  export type detalle_pedidoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput> | detalle_pedidoCreateWithoutProductoInput[] | detalle_pedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutProductoInput | detalle_pedidoCreateOrConnectWithoutProductoInput[]
    upsert?: detalle_pedidoUpsertWithWhereUniqueWithoutProductoInput | detalle_pedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: detalle_pedidoCreateManyProductoInputEnvelope
    set?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    disconnect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    delete?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    update?: detalle_pedidoUpdateWithWhereUniqueWithoutProductoInput | detalle_pedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: detalle_pedidoUpdateManyWithWhereWithoutProductoInput | detalle_pedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
  }

  export type detalle_pedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput> | detalle_pedidoCreateWithoutProductoInput[] | detalle_pedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: detalle_pedidoCreateOrConnectWithoutProductoInput | detalle_pedidoCreateOrConnectWithoutProductoInput[]
    upsert?: detalle_pedidoUpsertWithWhereUniqueWithoutProductoInput | detalle_pedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: detalle_pedidoCreateManyProductoInputEnvelope
    set?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    disconnect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    delete?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    connect?: detalle_pedidoWhereUniqueInput | detalle_pedidoWhereUniqueInput[]
    update?: detalle_pedidoUpdateWithWhereUniqueWithoutProductoInput | detalle_pedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: detalle_pedidoUpdateManyWithWhereWithoutProductoInput | detalle_pedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumusuario_tipo_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.usuario_tipo_usuario
  }

  export type pedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumnotificacion_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.notificacion_status | Enumnotificacion_statusFieldRefInput<$PrismaModel>
    in?: $Enums.notificacion_status[]
    notIn?: $Enums.notificacion_status[]
    not?: NestedEnumnotificacion_statusFilter<$PrismaModel> | $Enums.notificacion_status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumnotificacion_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notificacion_status | Enumnotificacion_statusFieldRefInput<$PrismaModel>
    in?: $Enums.notificacion_status[]
    notIn?: $Enums.notificacion_status[]
    not?: NestedEnumnotificacion_statusWithAggregatesFilter<$PrismaModel> | $Enums.notificacion_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotificacion_statusFilter<$PrismaModel>
    _max?: NestedEnumnotificacion_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumpago_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_metodo_pago | Enumpago_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pago_metodo_pago[]
    notIn?: $Enums.pago_metodo_pago[]
    not?: NestedEnumpago_metodo_pagoFilter<$PrismaModel> | $Enums.pago_metodo_pago
  }

  export type NestedEnumpago_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_status | Enumpago_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pago_status[]
    notIn?: $Enums.pago_status[]
    not?: NestedEnumpago_statusFilter<$PrismaModel> | $Enums.pago_status
  }

  export type NestedEnumpago_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_metodo_pago | Enumpago_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pago_metodo_pago[]
    notIn?: $Enums.pago_metodo_pago[]
    not?: NestedEnumpago_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pago_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpago_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpago_metodo_pagoFilter<$PrismaModel>
  }

  export type NestedEnumpago_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_status | Enumpago_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pago_status[]
    notIn?: $Enums.pago_status[]
    not?: NestedEnumpago_statusWithAggregatesFilter<$PrismaModel> | $Enums.pago_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpago_statusFilter<$PrismaModel>
    _max?: NestedEnumpago_statusFilter<$PrismaModel>
  }

  export type NestedEnumpedido_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_status | Enumpedido_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_status[]
    notIn?: $Enums.pedido_status[]
    not?: NestedEnumpedido_statusFilter<$PrismaModel> | $Enums.pedido_status
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumpedido_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedido_status | Enumpedido_statusFieldRefInput<$PrismaModel>
    in?: $Enums.pedido_status[]
    notIn?: $Enums.pedido_status[]
    not?: NestedEnumpedido_statusWithAggregatesFilter<$PrismaModel> | $Enums.pedido_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedido_statusFilter<$PrismaModel>
    _max?: NestedEnumpedido_statusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumproducto_tipo_prodFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_tipo_prod | Enumproducto_tipo_prodFieldRefInput<$PrismaModel>
    in?: $Enums.producto_tipo_prod[]
    notIn?: $Enums.producto_tipo_prod[]
    not?: NestedEnumproducto_tipo_prodFilter<$PrismaModel> | $Enums.producto_tipo_prod
  }

  export type NestedEnumproducto_u_medFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_u_med | Enumproducto_u_medFieldRefInput<$PrismaModel>
    in?: $Enums.producto_u_med[]
    notIn?: $Enums.producto_u_med[]
    not?: NestedEnumproducto_u_medFilter<$PrismaModel> | $Enums.producto_u_med
  }

  export type NestedEnumproducto_tipo_prodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_tipo_prod | Enumproducto_tipo_prodFieldRefInput<$PrismaModel>
    in?: $Enums.producto_tipo_prod[]
    notIn?: $Enums.producto_tipo_prod[]
    not?: NestedEnumproducto_tipo_prodWithAggregatesFilter<$PrismaModel> | $Enums.producto_tipo_prod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducto_tipo_prodFilter<$PrismaModel>
    _max?: NestedEnumproducto_tipo_prodFilter<$PrismaModel>
  }

  export type NestedEnumproducto_u_medWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.producto_u_med | Enumproducto_u_medFieldRefInput<$PrismaModel>
    in?: $Enums.producto_u_med[]
    notIn?: $Enums.producto_u_med[]
    not?: NestedEnumproducto_u_medWithAggregatesFilter<$PrismaModel> | $Enums.producto_u_med
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducto_u_medFilter<$PrismaModel>
    _max?: NestedEnumproducto_u_medFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumusuario_tipo_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo_usuario[]
    notIn?: $Enums.usuario_tipo_usuario[]
    not?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel> | $Enums.usuario_tipo_usuario
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumusuario_tipo_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuario_tipo_usuario | Enumusuario_tipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuario_tipo_usuario[]
    notIn?: $Enums.usuario_tipo_usuario[]
    not?: NestedEnumusuario_tipo_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.usuario_tipo_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel>
    _max?: NestedEnumusuario_tipo_usuarioFilter<$PrismaModel>
  }

  export type detalle_pedidoCreateWithoutDetalle_extra_pedidoInput = {
    id_detalle: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    pedido: pedidoCreateNestedOneWithoutDetalle_pedidoInput
    producto: productoCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoUncheckedCreateWithoutDetalle_extra_pedidoInput = {
    id_detalle: number
    id_pedido: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
  }

  export type detalle_pedidoCreateOrConnectWithoutDetalle_extra_pedidoInput = {
    where: detalle_pedidoWhereUniqueInput
    create: XOR<detalle_pedidoCreateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedCreateWithoutDetalle_extra_pedidoInput>
  }

  export type extraCreateWithoutDetalle_extra_pedidoInput = {
    id_extra: number
    nombre: string
    precio: number
  }

  export type extraUncheckedCreateWithoutDetalle_extra_pedidoInput = {
    id_extra: number
    nombre: string
    precio: number
  }

  export type extraCreateOrConnectWithoutDetalle_extra_pedidoInput = {
    where: extraWhereUniqueInput
    create: XOR<extraCreateWithoutDetalle_extra_pedidoInput, extraUncheckedCreateWithoutDetalle_extra_pedidoInput>
  }

  export type detalle_pedidoUpsertWithoutDetalle_extra_pedidoInput = {
    update: XOR<detalle_pedidoUpdateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedUpdateWithoutDetalle_extra_pedidoInput>
    create: XOR<detalle_pedidoCreateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedCreateWithoutDetalle_extra_pedidoInput>
    where?: detalle_pedidoWhereInput
  }

  export type detalle_pedidoUpdateToOneWithWhereWithoutDetalle_extra_pedidoInput = {
    where?: detalle_pedidoWhereInput
    data: XOR<detalle_pedidoUpdateWithoutDetalle_extra_pedidoInput, detalle_pedidoUncheckedUpdateWithoutDetalle_extra_pedidoInput>
  }

  export type detalle_pedidoUpdateWithoutDetalle_extra_pedidoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedido?: pedidoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
    producto?: productoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateWithoutDetalle_extra_pedidoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type extraUpsertWithoutDetalle_extra_pedidoInput = {
    update: XOR<extraUpdateWithoutDetalle_extra_pedidoInput, extraUncheckedUpdateWithoutDetalle_extra_pedidoInput>
    create: XOR<extraCreateWithoutDetalle_extra_pedidoInput, extraUncheckedCreateWithoutDetalle_extra_pedidoInput>
    where?: extraWhereInput
  }

  export type extraUpdateToOneWithWhereWithoutDetalle_extra_pedidoInput = {
    where?: extraWhereInput
    data: XOR<extraUpdateWithoutDetalle_extra_pedidoInput, extraUncheckedUpdateWithoutDetalle_extra_pedidoInput>
  }

  export type extraUpdateWithoutDetalle_extra_pedidoInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type extraUncheckedUpdateWithoutDetalle_extra_pedidoInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_extra_pedidoCreateWithoutDetalle_pedidoInput = {
    cantidad: number
    precio_extra: number
    extra: extraCreateNestedOneWithoutDetalle_extra_pedidoInput
  }

  export type detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput = {
    id_extra: number
    cantidad: number
    precio_extra: number
  }

  export type detalle_extra_pedidoCreateOrConnectWithoutDetalle_pedidoInput = {
    where: detalle_extra_pedidoWhereUniqueInput
    create: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
  }

  export type pedidoCreateWithoutDetalle_pedidoInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    notificacion?: notificacionCreateNestedManyWithoutPedidoInput
    pago?: pagoCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutDetalle_pedidoInput = {
    id_pedido: number
    id_usuario: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPedidoInput
    pago?: pagoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutDetalle_pedidoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutDetalle_pedidoInput, pedidoUncheckedCreateWithoutDetalle_pedidoInput>
  }

  export type productoCreateWithoutDetalle_pedidoInput = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
  }

  export type productoUncheckedCreateWithoutDetalle_pedidoInput = {
    id_producto: number
    nombre: string
    tipo_prod: $Enums.producto_tipo_prod
    u_med: $Enums.producto_u_med
    precio: number
  }

  export type productoCreateOrConnectWithoutDetalle_pedidoInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutDetalle_pedidoInput, productoUncheckedCreateWithoutDetalle_pedidoInput>
  }

  export type detalle_extra_pedidoUpsertWithoutDetalle_pedidoInput = {
    update: XOR<detalle_extra_pedidoUpdateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
    create: XOR<detalle_extra_pedidoCreateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    where?: detalle_extra_pedidoWhereInput
  }

  export type detalle_extra_pedidoUpdateToOneWithWhereWithoutDetalle_pedidoInput = {
    where?: detalle_extra_pedidoWhereInput
    data: XOR<detalle_extra_pedidoUpdateWithoutDetalle_pedidoInput, detalle_extra_pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type detalle_extra_pedidoUpdateWithoutDetalle_pedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
    extra?: extraUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput
  }

  export type detalle_extra_pedidoUncheckedUpdateWithoutDetalle_pedidoInput = {
    id_extra?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type pedidoUpsertWithoutDetalle_pedidoInput = {
    update: XOR<pedidoUpdateWithoutDetalle_pedidoInput, pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
    create: XOR<pedidoCreateWithoutDetalle_pedidoInput, pedidoUncheckedCreateWithoutDetalle_pedidoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutDetalle_pedidoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutDetalle_pedidoInput, pedidoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type pedidoUpdateWithoutDetalle_pedidoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    notificacion?: notificacionUpdateManyWithoutPedidoNestedInput
    pago?: pagoUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutDetalle_pedidoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    notificacion?: notificacionUncheckedUpdateManyWithoutPedidoNestedInput
    pago?: pagoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type productoUpsertWithoutDetalle_pedidoInput = {
    update: XOR<productoUpdateWithoutDetalle_pedidoInput, productoUncheckedUpdateWithoutDetalle_pedidoInput>
    create: XOR<productoCreateWithoutDetalle_pedidoInput, productoUncheckedCreateWithoutDetalle_pedidoInput>
    where?: productoWhereInput
  }

  export type productoUpdateToOneWithWhereWithoutDetalle_pedidoInput = {
    where?: productoWhereInput
    data: XOR<productoUpdateWithoutDetalle_pedidoInput, productoUncheckedUpdateWithoutDetalle_pedidoInput>
  }

  export type productoUpdateWithoutDetalle_pedidoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateWithoutDetalle_pedidoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_prod?: Enumproducto_tipo_prodFieldUpdateOperationsInput | $Enums.producto_tipo_prod
    u_med?: Enumproducto_u_medFieldUpdateOperationsInput | $Enums.producto_u_med
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_extra_pedidoCreateWithoutExtraInput = {
    cantidad: number
    precio_extra: number
    detalle_pedido: detalle_pedidoCreateNestedOneWithoutDetalle_extra_pedidoInput
  }

  export type detalle_extra_pedidoUncheckedCreateWithoutExtraInput = {
    id_detalle: number
    cantidad: number
    precio_extra: number
  }

  export type detalle_extra_pedidoCreateOrConnectWithoutExtraInput = {
    where: detalle_extra_pedidoWhereUniqueInput
    create: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput>
  }

  export type detalle_extra_pedidoCreateManyExtraInputEnvelope = {
    data: detalle_extra_pedidoCreateManyExtraInput | detalle_extra_pedidoCreateManyExtraInput[]
    skipDuplicates?: boolean
  }

  export type detalle_extra_pedidoUpsertWithWhereUniqueWithoutExtraInput = {
    where: detalle_extra_pedidoWhereUniqueInput
    update: XOR<detalle_extra_pedidoUpdateWithoutExtraInput, detalle_extra_pedidoUncheckedUpdateWithoutExtraInput>
    create: XOR<detalle_extra_pedidoCreateWithoutExtraInput, detalle_extra_pedidoUncheckedCreateWithoutExtraInput>
  }

  export type detalle_extra_pedidoUpdateWithWhereUniqueWithoutExtraInput = {
    where: detalle_extra_pedidoWhereUniqueInput
    data: XOR<detalle_extra_pedidoUpdateWithoutExtraInput, detalle_extra_pedidoUncheckedUpdateWithoutExtraInput>
  }

  export type detalle_extra_pedidoUpdateManyWithWhereWithoutExtraInput = {
    where: detalle_extra_pedidoScalarWhereInput
    data: XOR<detalle_extra_pedidoUpdateManyMutationInput, detalle_extra_pedidoUncheckedUpdateManyWithoutExtraInput>
  }

  export type detalle_extra_pedidoScalarWhereInput = {
    AND?: detalle_extra_pedidoScalarWhereInput | detalle_extra_pedidoScalarWhereInput[]
    OR?: detalle_extra_pedidoScalarWhereInput[]
    NOT?: detalle_extra_pedidoScalarWhereInput | detalle_extra_pedidoScalarWhereInput[]
    id_detalle?: IntFilter<"detalle_extra_pedido"> | number
    id_extra?: IntFilter<"detalle_extra_pedido"> | number
    cantidad?: IntFilter<"detalle_extra_pedido"> | number
    precio_extra?: FloatFilter<"detalle_extra_pedido"> | number
  }

  export type pedidoCreateWithoutNotificacionInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoCreateNestedManyWithoutPedidoInput
    pago?: pagoCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutNotificacionInput = {
    id_pedido: number
    id_usuario: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    pago?: pagoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutNotificacionInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutNotificacionInput, pedidoUncheckedCreateWithoutNotificacionInput>
  }

  export type pedidoUpsertWithoutNotificacionInput = {
    update: XOR<pedidoUpdateWithoutNotificacionInput, pedidoUncheckedUpdateWithoutNotificacionInput>
    create: XOR<pedidoCreateWithoutNotificacionInput, pedidoUncheckedCreateWithoutNotificacionInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutNotificacionInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutNotificacionInput, pedidoUncheckedUpdateWithoutNotificacionInput>
  }

  export type pedidoUpdateWithoutNotificacionInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUpdateManyWithoutPedidoNestedInput
    pago?: pagoUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutNotificacionInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pago?: pagoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateWithoutPagoInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionCreateNestedManyWithoutPedidoInput
    usuario: usuarioCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutPagoInput = {
    id_pedido: number
    id_usuario: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutPagoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutPagoInput, pedidoUncheckedCreateWithoutPagoInput>
  }

  export type pedidoUpsertWithoutPagoInput = {
    update: XOR<pedidoUpdateWithoutPagoInput, pedidoUncheckedUpdateWithoutPagoInput>
    create: XOR<pedidoCreateWithoutPagoInput, pedidoUncheckedCreateWithoutPagoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutPagoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutPagoInput, pedidoUncheckedUpdateWithoutPagoInput>
  }

  export type pedidoUpdateWithoutPagoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUpdateManyWithoutPedidoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutPagoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type detalle_pedidoCreateWithoutPedidoInput = {
    id_detalle: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoCreateNestedOneWithoutDetalle_pedidoInput
    producto: productoCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoUncheckedCreateWithoutPedidoInput = {
    id_detalle: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoCreateOrConnectWithoutPedidoInput = {
    where: detalle_pedidoWhereUniqueInput
    create: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type detalle_pedidoCreateManyPedidoInputEnvelope = {
    data: detalle_pedidoCreateManyPedidoInput | detalle_pedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type notificacionCreateWithoutPedidoInput = {
    id_notificacion: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
  }

  export type notificacionUncheckedCreateWithoutPedidoInput = {
    id_notificacion: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
  }

  export type notificacionCreateOrConnectWithoutPedidoInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput>
  }

  export type notificacionCreateManyPedidoInputEnvelope = {
    data: notificacionCreateManyPedidoInput | notificacionCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type pagoCreateWithoutPedidoInput = {
    id_pago: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
  }

  export type pagoUncheckedCreateWithoutPedidoInput = {
    id_pago: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
  }

  export type pagoCreateOrConnectWithoutPedidoInput = {
    where: pagoWhereUniqueInput
    create: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput>
  }

  export type pagoCreateManyPedidoInputEnvelope = {
    data: pagoCreateManyPedidoInput | pagoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutPedidoInput = {
    id_usuario: number
    nombre: string
    apellido: string
    email?: string | null
    numero_tel?: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro?: Date | string
  }

  export type usuarioUncheckedCreateWithoutPedidoInput = {
    id_usuario: number
    nombre: string
    apellido: string
    email?: string | null
    numero_tel?: string | null
    usuario: string
    contra: string
    tipo_usuario: $Enums.usuario_tipo_usuario
    fecha_registro?: Date | string
  }

  export type usuarioCreateOrConnectWithoutPedidoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
  }

  export type detalle_pedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: detalle_pedidoWhereUniqueInput
    update: XOR<detalle_pedidoUpdateWithoutPedidoInput, detalle_pedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<detalle_pedidoCreateWithoutPedidoInput, detalle_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type detalle_pedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: detalle_pedidoWhereUniqueInput
    data: XOR<detalle_pedidoUpdateWithoutPedidoInput, detalle_pedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type detalle_pedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: detalle_pedidoScalarWhereInput
    data: XOR<detalle_pedidoUpdateManyMutationInput, detalle_pedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type detalle_pedidoScalarWhereInput = {
    AND?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
    OR?: detalle_pedidoScalarWhereInput[]
    NOT?: detalle_pedidoScalarWhereInput | detalle_pedidoScalarWhereInput[]
    id_detalle?: IntFilter<"detalle_pedido"> | number
    id_pedido?: IntFilter<"detalle_pedido"> | number
    id_producto?: IntFilter<"detalle_pedido"> | number
    cantidad?: IntFilter<"detalle_pedido"> | number
    precio_unitario?: FloatFilter<"detalle_pedido"> | number
    subtotal?: FloatFilter<"detalle_pedido"> | number
  }

  export type notificacionUpsertWithWhereUniqueWithoutPedidoInput = {
    where: notificacionWhereUniqueInput
    update: XOR<notificacionUpdateWithoutPedidoInput, notificacionUncheckedUpdateWithoutPedidoInput>
    create: XOR<notificacionCreateWithoutPedidoInput, notificacionUncheckedCreateWithoutPedidoInput>
  }

  export type notificacionUpdateWithWhereUniqueWithoutPedidoInput = {
    where: notificacionWhereUniqueInput
    data: XOR<notificacionUpdateWithoutPedidoInput, notificacionUncheckedUpdateWithoutPedidoInput>
  }

  export type notificacionUpdateManyWithWhereWithoutPedidoInput = {
    where: notificacionScalarWhereInput
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyWithoutPedidoInput>
  }

  export type notificacionScalarWhereInput = {
    AND?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    OR?: notificacionScalarWhereInput[]
    NOT?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    id_pedido?: IntFilter<"notificacion"> | number
    mensaje?: StringFilter<"notificacion"> | string
    status?: Enumnotificacion_statusFilter<"notificacion"> | $Enums.notificacion_status
    fecha?: DateTimeFilter<"notificacion"> | Date | string
  }

  export type pagoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pagoWhereUniqueInput
    update: XOR<pagoUpdateWithoutPedidoInput, pagoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pagoCreateWithoutPedidoInput, pagoUncheckedCreateWithoutPedidoInput>
  }

  export type pagoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pagoWhereUniqueInput
    data: XOR<pagoUpdateWithoutPedidoInput, pagoUncheckedUpdateWithoutPedidoInput>
  }

  export type pagoUpdateManyWithWhereWithoutPedidoInput = {
    where: pagoScalarWhereInput
    data: XOR<pagoUpdateManyMutationInput, pagoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pagoScalarWhereInput = {
    AND?: pagoScalarWhereInput | pagoScalarWhereInput[]
    OR?: pagoScalarWhereInput[]
    NOT?: pagoScalarWhereInput | pagoScalarWhereInput[]
    id_pago?: IntFilter<"pago"> | number
    id_pedido?: IntFilter<"pago"> | number
    metodo_pago?: Enumpago_metodo_pagoFilter<"pago"> | $Enums.pago_metodo_pago
    monto_pagado?: FloatFilter<"pago"> | number
    fecha_pago?: DateTimeFilter<"pago"> | Date | string
    status?: Enumpago_statusFilter<"pago"> | $Enums.pago_status
  }

  export type usuarioUpsertWithoutPedidoInput = {
    update: XOR<usuarioUpdateWithoutPedidoInput, usuarioUncheckedUpdateWithoutPedidoInput>
    create: XOR<usuarioCreateWithoutPedidoInput, usuarioUncheckedCreateWithoutPedidoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPedidoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPedidoInput, usuarioUncheckedUpdateWithoutPedidoInput>
  }

  export type usuarioUpdateWithoutPedidoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateWithoutPedidoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    numero_tel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    contra?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: Enumusuario_tipo_usuarioFieldUpdateOperationsInput | $Enums.usuario_tipo_usuario
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalle_pedidoCreateWithoutProductoInput = {
    id_detalle: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoCreateNestedOneWithoutDetalle_pedidoInput
    pedido: pedidoCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoUncheckedCreateWithoutProductoInput = {
    id_detalle: number
    id_pedido: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedCreateNestedOneWithoutDetalle_pedidoInput
  }

  export type detalle_pedidoCreateOrConnectWithoutProductoInput = {
    where: detalle_pedidoWhereUniqueInput
    create: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput>
  }

  export type detalle_pedidoCreateManyProductoInputEnvelope = {
    data: detalle_pedidoCreateManyProductoInput | detalle_pedidoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type detalle_pedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: detalle_pedidoWhereUniqueInput
    update: XOR<detalle_pedidoUpdateWithoutProductoInput, detalle_pedidoUncheckedUpdateWithoutProductoInput>
    create: XOR<detalle_pedidoCreateWithoutProductoInput, detalle_pedidoUncheckedCreateWithoutProductoInput>
  }

  export type detalle_pedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: detalle_pedidoWhereUniqueInput
    data: XOR<detalle_pedidoUpdateWithoutProductoInput, detalle_pedidoUncheckedUpdateWithoutProductoInput>
  }

  export type detalle_pedidoUpdateManyWithWhereWithoutProductoInput = {
    where: detalle_pedidoScalarWhereInput
    data: XOR<detalle_pedidoUpdateManyMutationInput, detalle_pedidoUncheckedUpdateManyWithoutProductoInput>
  }

  export type pedidoCreateWithoutUsuarioInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionCreateNestedManyWithoutPedidoInput
    pago?: pagoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutUsuarioInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
    detalle_pedido?: detalle_pedidoUncheckedCreateNestedManyWithoutPedidoInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPedidoInput
    pago?: pagoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoCreateManyUsuarioInputEnvelope = {
    data: pedidoCreateManyUsuarioInput | pedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type pedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type pedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id_pedido?: IntFilter<"pedido"> | number
    id_usuario?: IntFilter<"pedido"> | number
    fecha?: DateTimeFilter<"pedido"> | Date | string
    status?: Enumpedido_statusFilter<"pedido"> | $Enums.pedido_status
    codigo_conf?: StringFilter<"pedido"> | string
    total?: FloatNullableFilter<"pedido"> | number | null
  }

  export type detalle_extra_pedidoCreateManyExtraInput = {
    id_detalle: number
    cantidad: number
    precio_extra: number
  }

  export type detalle_extra_pedidoUpdateWithoutExtraInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
    detalle_pedido?: detalle_pedidoUpdateOneRequiredWithoutDetalle_extra_pedidoNestedInput
  }

  export type detalle_extra_pedidoUncheckedUpdateWithoutExtraInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_extra_pedidoUncheckedUpdateManyWithoutExtraInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_extra?: FloatFieldUpdateOperationsInput | number
  }

  export type detalle_pedidoCreateManyPedidoInput = {
    id_detalle: number
    id_producto: number
    cantidad: number
    precio_unitario: number
    subtotal: number
  }

  export type notificacionCreateManyPedidoInput = {
    id_notificacion: number
    mensaje: string
    status: $Enums.notificacion_status
    fecha?: Date | string
  }

  export type pagoCreateManyPedidoInput = {
    id_pago: number
    metodo_pago: $Enums.pago_metodo_pago
    monto_pagado: number
    fecha_pago?: Date | string
    status: $Enums.pago_status
  }

  export type detalle_pedidoUpdateWithoutPedidoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUpdateOneWithoutDetalle_pedidoNestedInput
    producto?: productoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateWithoutPedidoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedUpdateOneWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateManyWithoutPedidoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type notificacionUpdateWithoutPedidoInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionUncheckedUpdateWithoutPedidoInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionUncheckedUpdateManyWithoutPedidoInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    status?: Enumnotificacion_statusFieldUpdateOperationsInput | $Enums.notificacion_status
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagoUpdateWithoutPedidoInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type pagoUncheckedUpdateWithoutPedidoInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type pagoUncheckedUpdateManyWithoutPedidoInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    metodo_pago?: Enumpago_metodo_pagoFieldUpdateOperationsInput | $Enums.pago_metodo_pago
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpago_statusFieldUpdateOperationsInput | $Enums.pago_status
  }

  export type detalle_pedidoCreateManyProductoInput = {
    id_detalle: number
    id_pedido: number
    cantidad: number
    precio_unitario: number
    subtotal: number
  }

  export type detalle_pedidoUpdateWithoutProductoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUpdateOneWithoutDetalle_pedidoNestedInput
    pedido?: pedidoUpdateOneRequiredWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateWithoutProductoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    detalle_extra_pedido?: detalle_extra_pedidoUncheckedUpdateOneWithoutDetalle_pedidoNestedInput
  }

  export type detalle_pedidoUncheckedUpdateManyWithoutProductoInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type pedidoCreateManyUsuarioInput = {
    id_pedido: number
    fecha?: Date | string
    status: $Enums.pedido_status
    codigo_conf: string
    total?: number | null
  }

  export type pedidoUpdateWithoutUsuarioInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUpdateManyWithoutPedidoNestedInput
    pago?: pagoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutUsuarioInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalle_pedido?: detalle_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutPedidoNestedInput
    pago?: pagoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumpedido_statusFieldUpdateOperationsInput | $Enums.pedido_status
    codigo_conf?: StringFieldUpdateOperationsInput | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}