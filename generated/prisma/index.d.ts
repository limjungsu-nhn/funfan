
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model InviteCode
 * 
 */
export type InviteCode = $Result.DefaultSelection<Prisma.$InviteCodePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model WateringEvent
 * 
 */
export type WateringEvent = $Result.DefaultSelection<Prisma.$WateringEventPayload>
/**
 * Model AiContext
 * 
 */
export type AiContext = $Result.DefaultSelection<Prisma.$AiContextPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Persona: {
  TONTON: 'TONTON',
  HANA: 'HANA',
  FUKU: 'FUKU'
};

export type Persona = (typeof Persona)[keyof typeof Persona]


export const Genre: {
  FANTASY: 'FANTASY',
  ROMANCE: 'ROMANCE',
  ACTION: 'ACTION',
  DRAMA: 'DRAMA',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  SLICE_OF_LIFE: 'SLICE_OF_LIFE',
  OTHER: 'OTHER'
};

export type Genre = (typeof Genre)[keyof typeof Genre]


export const FlowerStage: {
  SEED: 'SEED',
  SPROUT: 'SPROUT',
  BUD: 'BUD',
  BLOOM: 'BLOOM',
  WREATH: 'WREATH'
};

export type FlowerStage = (typeof FlowerStage)[keyof typeof FlowerStage]


export const EmotionTag: {
  FUNNY: 'FUNNY',
  MOVING: 'MOVING',
  EXCITING: 'EXCITING',
  LOVING: 'LOVING'
};

export type EmotionTag = (typeof EmotionTag)[keyof typeof EmotionTag]

}

export type Persona = $Enums.Persona

export const Persona: typeof $Enums.Persona

export type Genre = $Enums.Genre

export const Genre: typeof $Enums.Genre

export type FlowerStage = $Enums.FlowerStage

export const FlowerStage: typeof $Enums.FlowerStage

export type EmotionTag = $Enums.EmotionTag

export const EmotionTag: typeof $Enums.EmotionTag

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inviteCode`: Exposes CRUD operations for the **InviteCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteCodes
    * const inviteCodes = await prisma.inviteCode.findMany()
    * ```
    */
  get inviteCode(): Prisma.InviteCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wateringEvent`: Exposes CRUD operations for the **WateringEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WateringEvents
    * const wateringEvents = await prisma.wateringEvent.findMany()
    * ```
    */
  get wateringEvent(): Prisma.WateringEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiContext`: Exposes CRUD operations for the **AiContext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiContexts
    * const aiContexts = await prisma.aiContext.findMany()
    * ```
    */
  get aiContext(): Prisma.AiContextDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    InviteCode: 'InviteCode',
    User: 'User',
    Work: 'Work',
    Episode: 'Episode',
    WateringEvent: 'WateringEvent',
    AiContext: 'AiContext'
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
      modelProps: "account" | "session" | "verificationToken" | "inviteCode" | "user" | "work" | "episode" | "wateringEvent" | "aiContext"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      InviteCode: {
        payload: Prisma.$InviteCodePayload<ExtArgs>
        fields: Prisma.InviteCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findFirst: {
            args: Prisma.InviteCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findMany: {
            args: Prisma.InviteCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          create: {
            args: Prisma.InviteCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          createMany: {
            args: Prisma.InviteCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          delete: {
            args: Prisma.InviteCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          update: {
            args: Prisma.InviteCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          deleteMany: {
            args: Prisma.InviteCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          upsert: {
            args: Prisma.InviteCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          aggregate: {
            args: Prisma.InviteCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInviteCode>
          }
          groupBy: {
            args: Prisma.InviteCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      WateringEvent: {
        payload: Prisma.$WateringEventPayload<ExtArgs>
        fields: Prisma.WateringEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WateringEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WateringEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          findFirst: {
            args: Prisma.WateringEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WateringEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          findMany: {
            args: Prisma.WateringEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>[]
          }
          create: {
            args: Prisma.WateringEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          createMany: {
            args: Prisma.WateringEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WateringEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>[]
          }
          delete: {
            args: Prisma.WateringEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          update: {
            args: Prisma.WateringEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          deleteMany: {
            args: Prisma.WateringEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WateringEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WateringEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>[]
          }
          upsert: {
            args: Prisma.WateringEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WateringEventPayload>
          }
          aggregate: {
            args: Prisma.WateringEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWateringEvent>
          }
          groupBy: {
            args: Prisma.WateringEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WateringEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WateringEventCountArgs<ExtArgs>
            result: $Utils.Optional<WateringEventCountAggregateOutputType> | number
          }
        }
      }
      AiContext: {
        payload: Prisma.$AiContextPayload<ExtArgs>
        fields: Prisma.AiContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          findFirst: {
            args: Prisma.AiContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          findMany: {
            args: Prisma.AiContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>[]
          }
          create: {
            args: Prisma.AiContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          createMany: {
            args: Prisma.AiContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>[]
          }
          delete: {
            args: Prisma.AiContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          update: {
            args: Prisma.AiContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          deleteMany: {
            args: Prisma.AiContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>[]
          }
          upsert: {
            args: Prisma.AiContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiContextPayload>
          }
          aggregate: {
            args: Prisma.AiContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiContext>
          }
          groupBy: {
            args: Prisma.AiContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiContextCountArgs<ExtArgs>
            result: $Utils.Optional<AiContextCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    inviteCode?: InviteCodeOmit
    user?: UserOmit
    work?: WorkOmit
    episode?: EpisodeOmit
    wateringEvent?: WateringEventOmit
    aiContext?: AiContextOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    works: number
    aiContexts: number
    waterings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    works?: boolean | UserCountOutputTypeCountWorksArgs
    aiContexts?: boolean | UserCountOutputTypeCountAiContextsArgs
    waterings?: boolean | UserCountOutputTypeCountWateringsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiContextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiContextWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WateringEventWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    episodes: number
    waterings: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | WorkCountOutputTypeCountEpisodesArgs
    waterings?: boolean | WorkCountOutputTypeCountWateringsArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WateringEventWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    waterings: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterings?: boolean | EpisodeCountOutputTypeCountWateringsArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountWateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WateringEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model InviteCode
   */

  export type AggregateInviteCode = {
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  export type InviteCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    usedAt: Date | null
    usedById: string | null
    createdAt: Date | null
  }

  export type InviteCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    usedAt: Date | null
    usedById: string | null
    createdAt: Date | null
  }

  export type InviteCodeCountAggregateOutputType = {
    id: number
    code: number
    usedAt: number
    usedById: number
    createdAt: number
    _all: number
  }


  export type InviteCodeMinAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    usedById?: true
    createdAt?: true
  }

  export type InviteCodeMaxAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    usedById?: true
    createdAt?: true
  }

  export type InviteCodeCountAggregateInputType = {
    id?: true
    code?: true
    usedAt?: true
    usedById?: true
    createdAt?: true
    _all?: true
  }

  export type InviteCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCode to aggregate.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteCodes
    **/
    _count?: true | InviteCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteCodeMaxAggregateInputType
  }

  export type GetInviteCodeAggregateType<T extends InviteCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteCode[P]>
      : GetScalarType<T[P], AggregateInviteCode[P]>
  }




  export type InviteCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithAggregationInput | InviteCodeOrderByWithAggregationInput[]
    by: InviteCodeScalarFieldEnum[] | InviteCodeScalarFieldEnum
    having?: InviteCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCodeCountAggregateInputType | true
    _min?: InviteCodeMinAggregateInputType
    _max?: InviteCodeMaxAggregateInputType
  }

  export type InviteCodeGroupByOutputType = {
    id: string
    code: string
    usedAt: Date | null
    usedById: string | null
    createdAt: Date
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  type GetInviteCodeGroupByPayload<T extends InviteCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
        }
      >
    >


  export type InviteCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    usedById?: boolean
    createdAt?: boolean
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    usedById?: boolean
    createdAt?: boolean
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedAt?: boolean
    usedById?: boolean
    createdAt?: boolean
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectScalar = {
    id?: boolean
    code?: boolean
    usedAt?: boolean
    usedById?: boolean
    createdAt?: boolean
  }

  export type InviteCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "usedAt" | "usedById" | "createdAt", ExtArgs["result"]["inviteCode"]>
  export type InviteCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }
  export type InviteCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }
  export type InviteCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedBy?: boolean | InviteCode$usedByArgs<ExtArgs>
  }

  export type $InviteCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteCode"
    objects: {
      usedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      usedAt: Date | null
      usedById: string | null
      createdAt: Date
    }, ExtArgs["result"]["inviteCode"]>
    composites: {}
  }

  type InviteCodeGetPayload<S extends boolean | null | undefined | InviteCodeDefaultArgs> = $Result.GetResult<Prisma.$InviteCodePayload, S>

  type InviteCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCodeCountAggregateInputType | true
    }

  export interface InviteCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteCode'], meta: { name: 'InviteCode' } }
    /**
     * Find zero or one InviteCode that matches the filter.
     * @param {InviteCodeFindUniqueArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteCodeFindUniqueArgs>(args: SelectSubset<T, InviteCodeFindUniqueArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InviteCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteCodeFindUniqueOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteCodeFindFirstArgs>(args?: SelectSubset<T, InviteCodeFindFirstArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InviteCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany()
     * 
     * // Get first 10 InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteCodeWithIdOnly = await prisma.inviteCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteCodeFindManyArgs>(args?: SelectSubset<T, InviteCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InviteCode.
     * @param {InviteCodeCreateArgs} args - Arguments to create a InviteCode.
     * @example
     * // Create one InviteCode
     * const InviteCode = await prisma.inviteCode.create({
     *   data: {
     *     // ... data to create a InviteCode
     *   }
     * })
     * 
     */
    create<T extends InviteCodeCreateArgs>(args: SelectSubset<T, InviteCodeCreateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InviteCodes.
     * @param {InviteCodeCreateManyArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCodeCreateManyArgs>(args?: SelectSubset<T, InviteCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InviteCodes and returns the data saved in the database.
     * @param {InviteCodeCreateManyAndReturnArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InviteCodes and only return the `id`
     * const inviteCodeWithIdOnly = await prisma.inviteCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InviteCode.
     * @param {InviteCodeDeleteArgs} args - Arguments to delete one InviteCode.
     * @example
     * // Delete one InviteCode
     * const InviteCode = await prisma.inviteCode.delete({
     *   where: {
     *     // ... filter to delete one InviteCode
     *   }
     * })
     * 
     */
    delete<T extends InviteCodeDeleteArgs>(args: SelectSubset<T, InviteCodeDeleteArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InviteCode.
     * @param {InviteCodeUpdateArgs} args - Arguments to update one InviteCode.
     * @example
     * // Update one InviteCode
     * const inviteCode = await prisma.inviteCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteCodeUpdateArgs>(args: SelectSubset<T, InviteCodeUpdateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InviteCodes.
     * @param {InviteCodeDeleteManyArgs} args - Arguments to filter InviteCodes to delete.
     * @example
     * // Delete a few InviteCodes
     * const { count } = await prisma.inviteCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteCodeDeleteManyArgs>(args?: SelectSubset<T, InviteCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteCodeUpdateManyArgs>(args: SelectSubset<T, InviteCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes and returns the data updated in the database.
     * @param {InviteCodeUpdateManyAndReturnArgs} args - Arguments to update many InviteCodes.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InviteCodes and only return the `id`
     * const inviteCodeWithIdOnly = await prisma.inviteCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InviteCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InviteCode.
     * @param {InviteCodeUpsertArgs} args - Arguments to update or create a InviteCode.
     * @example
     * // Update or create a InviteCode
     * const inviteCode = await prisma.inviteCode.upsert({
     *   create: {
     *     // ... data to create a InviteCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteCode we want to update
     *   }
     * })
     */
    upsert<T extends InviteCodeUpsertArgs>(args: SelectSubset<T, InviteCodeUpsertArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeCountArgs} args - Arguments to filter InviteCodes to count.
     * @example
     * // Count the number of InviteCodes
     * const count = await prisma.inviteCode.count({
     *   where: {
     *     // ... the filter for the InviteCodes we want to count
     *   }
     * })
    **/
    count<T extends InviteCodeCountArgs>(
      args?: Subset<T, InviteCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteCodeAggregateArgs>(args: Subset<T, InviteCodeAggregateArgs>): Prisma.PrismaPromise<GetInviteCodeAggregateType<T>>

    /**
     * Group by InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeGroupByArgs} args - Group by arguments.
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
      T extends InviteCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteCodeGroupByArgs['orderBy'] }
        : { orderBy?: InviteCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteCode model
   */
  readonly fields: InviteCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usedBy<T extends InviteCode$usedByArgs<ExtArgs> = {}>(args?: Subset<T, InviteCode$usedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InviteCode model
   */
  interface InviteCodeFieldRefs {
    readonly id: FieldRef<"InviteCode", 'String'>
    readonly code: FieldRef<"InviteCode", 'String'>
    readonly usedAt: FieldRef<"InviteCode", 'DateTime'>
    readonly usedById: FieldRef<"InviteCode", 'String'>
    readonly createdAt: FieldRef<"InviteCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteCode findUnique
   */
  export type InviteCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findUniqueOrThrow
   */
  export type InviteCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findFirst
   */
  export type InviteCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findFirstOrThrow
   */
  export type InviteCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findMany
   */
  export type InviteCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCodes to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode create
   */
  export type InviteCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a InviteCode.
     */
    data: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
  }

  /**
   * InviteCode createMany
   */
  export type InviteCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteCode createManyAndReturn
   */
  export type InviteCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode update
   */
  export type InviteCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a InviteCode.
     */
    data: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
    /**
     * Choose, which InviteCode to update.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode updateMany
   */
  export type InviteCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
  }

  /**
   * InviteCode updateManyAndReturn
   */
  export type InviteCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode upsert
   */
  export type InviteCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the InviteCode to update in case it exists.
     */
    where: InviteCodeWhereUniqueInput
    /**
     * In case the InviteCode found by the `where` argument doesn't exist, create a new InviteCode with this data.
     */
    create: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
    /**
     * In case the InviteCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
  }

  /**
   * InviteCode delete
   */
  export type InviteCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter which InviteCode to delete.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode deleteMany
   */
  export type InviteCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCodes to delete
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to delete.
     */
    limit?: number
  }

  /**
   * InviteCode.usedBy
   */
  export type InviteCode$usedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * InviteCode without action
   */
  export type InviteCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nickname: string | null
    genre: $Enums.Genre | null
    creativeStyle: string | null
    persona: $Enums.Persona | null
    onboardingDone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    nickname: string | null
    genre: $Enums.Genre | null
    creativeStyle: string | null
    persona: $Enums.Persona | null
    onboardingDone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    nickname: number
    genre: number
    creativeStyle: number
    persona: number
    onboardingDone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nickname?: true
    genre?: true
    creativeStyle?: true
    persona?: true
    onboardingDone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nickname?: true
    genre?: true
    creativeStyle?: true
    persona?: true
    onboardingDone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nickname?: true
    genre?: true
    creativeStyle?: true
    persona?: true
    onboardingDone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    nickname: string | null
    genre: $Enums.Genre | null
    creativeStyle: string | null
    persona: $Enums.Persona
    onboardingDone: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nickname?: boolean
    genre?: boolean
    creativeStyle?: boolean
    persona?: boolean
    onboardingDone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    inviteCode?: boolean | User$inviteCodeArgs<ExtArgs>
    works?: boolean | User$worksArgs<ExtArgs>
    aiContexts?: boolean | User$aiContextsArgs<ExtArgs>
    waterings?: boolean | User$wateringsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nickname?: boolean
    genre?: boolean
    creativeStyle?: boolean
    persona?: boolean
    onboardingDone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nickname?: boolean
    genre?: boolean
    creativeStyle?: boolean
    persona?: boolean
    onboardingDone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nickname?: boolean
    genre?: boolean
    creativeStyle?: boolean
    persona?: boolean
    onboardingDone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "nickname" | "genre" | "creativeStyle" | "persona" | "onboardingDone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    inviteCode?: boolean | User$inviteCodeArgs<ExtArgs>
    works?: boolean | User$worksArgs<ExtArgs>
    aiContexts?: boolean | User$aiContextsArgs<ExtArgs>
    waterings?: boolean | User$wateringsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      inviteCode: Prisma.$InviteCodePayload<ExtArgs> | null
      works: Prisma.$WorkPayload<ExtArgs>[]
      aiContexts: Prisma.$AiContextPayload<ExtArgs>[]
      waterings: Prisma.$WateringEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      nickname: string | null
      genre: $Enums.Genre | null
      creativeStyle: string | null
      persona: $Enums.Persona
      onboardingDone: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inviteCode<T extends User$inviteCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$inviteCodeArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    works<T extends User$worksArgs<ExtArgs> = {}>(args?: Subset<T, User$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiContexts<T extends User$aiContextsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiContextsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waterings<T extends User$wateringsArgs<ExtArgs> = {}>(args?: Subset<T, User$wateringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly genre: FieldRef<"User", 'Genre'>
    readonly creativeStyle: FieldRef<"User", 'String'>
    readonly persona: FieldRef<"User", 'Persona'>
    readonly onboardingDone: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.inviteCode
   */
  export type User$inviteCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    where?: InviteCodeWhereInput
  }

  /**
   * User.works
   */
  export type User$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * User.aiContexts
   */
  export type User$aiContextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    where?: AiContextWhereInput
    orderBy?: AiContextOrderByWithRelationInput | AiContextOrderByWithRelationInput[]
    cursor?: AiContextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiContextScalarFieldEnum | AiContextScalarFieldEnum[]
  }

  /**
   * User.waterings
   */
  export type User$wateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    where?: WateringEventWhereInput
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    cursor?: WateringEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    waterCount: number | null
  }

  export type WorkSumAggregateOutputType = {
    waterCount: number | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    coverImage: string | null
    isPublished: boolean | null
    isCompleted: boolean | null
    flowerStage: $Enums.FlowerStage | null
    waterCount: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    coverImage: string | null
    isPublished: boolean | null
    isCompleted: boolean | null
    flowerStage: $Enums.FlowerStage | null
    waterCount: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    title: number
    description: number
    coverImage: number
    isPublished: number
    isCompleted: number
    flowerStage: number
    waterCount: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    waterCount?: true
  }

  export type WorkSumAggregateInputType = {
    waterCount?: true
  }

  export type WorkMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    coverImage?: true
    isPublished?: true
    isCompleted?: true
    flowerStage?: true
    waterCount?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    coverImage?: true
    isPublished?: true
    isCompleted?: true
    flowerStage?: true
    waterCount?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    coverImage?: true
    isPublished?: true
    isCompleted?: true
    flowerStage?: true
    waterCount?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    title: string
    description: string | null
    coverImage: string | null
    isPublished: boolean
    isCompleted: boolean
    flowerStage: $Enums.FlowerStage
    waterCount: number
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: boolean
    waterCount?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    episodes?: boolean | Work$episodesArgs<ExtArgs>
    waterings?: boolean | Work$wateringsArgs<ExtArgs>
    aiContext?: boolean | Work$aiContextArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: boolean
    waterCount?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: boolean
    waterCount?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: boolean
    waterCount?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "coverImage" | "isPublished" | "isCompleted" | "flowerStage" | "waterCount" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    episodes?: boolean | Work$episodesArgs<ExtArgs>
    waterings?: boolean | Work$wateringsArgs<ExtArgs>
    aiContext?: boolean | Work$aiContextArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      waterings: Prisma.$WateringEventPayload<ExtArgs>[]
      aiContext: Prisma.$AiContextPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      coverImage: string | null
      isPublished: boolean
      isCompleted: boolean
      flowerStage: $Enums.FlowerStage
      waterCount: number
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episodes<T extends Work$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Work$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waterings<T extends Work$wateringsArgs<ExtArgs> = {}>(args?: Subset<T, Work$wateringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiContext<T extends Work$aiContextArgs<ExtArgs> = {}>(args?: Subset<T, Work$aiContextArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly title: FieldRef<"Work", 'String'>
    readonly description: FieldRef<"Work", 'String'>
    readonly coverImage: FieldRef<"Work", 'String'>
    readonly isPublished: FieldRef<"Work", 'Boolean'>
    readonly isCompleted: FieldRef<"Work", 'Boolean'>
    readonly flowerStage: FieldRef<"Work", 'FlowerStage'>
    readonly waterCount: FieldRef<"Work", 'Int'>
    readonly authorId: FieldRef<"Work", 'String'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
    readonly updatedAt: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.episodes
   */
  export type Work$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Work.waterings
   */
  export type Work$wateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    where?: WateringEventWhereInput
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    cursor?: WateringEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * Work.aiContext
   */
  export type Work$aiContextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    where?: AiContextWhereInput
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeNum: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    episodeNum: number | null
    isPublished: boolean | null
    workId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    episodeNum: number | null
    isPublished: boolean | null
    workId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    images: number
    episodeNum: number
    isPublished: number
    workId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeNum?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    episodeNum?: true
    isPublished?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    episodeNum?: true
    isPublished?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    images?: true
    episodeNum?: true
    isPublished?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    title: string
    content: string | null
    images: string[]
    episodeNum: number
    isPublished: boolean
    workId: string
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    episodeNum?: boolean
    isPublished?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    waterings?: boolean | Episode$wateringsArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    episodeNum?: boolean
    isPublished?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    episodeNum?: boolean
    isPublished?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    episodeNum?: boolean
    isPublished?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "images" | "episodeNum" | "isPublished" | "workId" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    waterings?: boolean | Episode$wateringsArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      waterings: Prisma.$WateringEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string | null
      images: string[]
      episodeNum: number
      isPublished: boolean
      workId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    waterings<T extends Episode$wateringsArgs<ExtArgs> = {}>(args?: Subset<T, Episode$wateringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly content: FieldRef<"Episode", 'String'>
    readonly images: FieldRef<"Episode", 'String[]'>
    readonly episodeNum: FieldRef<"Episode", 'Int'>
    readonly isPublished: FieldRef<"Episode", 'Boolean'>
    readonly workId: FieldRef<"Episode", 'String'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.waterings
   */
  export type Episode$wateringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    where?: WateringEventWhereInput
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    cursor?: WateringEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model WateringEvent
   */

  export type AggregateWateringEvent = {
    _count: WateringEventCountAggregateOutputType | null
    _min: WateringEventMinAggregateOutputType | null
    _max: WateringEventMaxAggregateOutputType | null
  }

  export type WateringEventMinAggregateOutputType = {
    id: string | null
    emotionTag: $Enums.EmotionTag | null
    comment: string | null
    workId: string | null
    episodeId: string | null
    readerId: string | null
    createdAt: Date | null
  }

  export type WateringEventMaxAggregateOutputType = {
    id: string | null
    emotionTag: $Enums.EmotionTag | null
    comment: string | null
    workId: string | null
    episodeId: string | null
    readerId: string | null
    createdAt: Date | null
  }

  export type WateringEventCountAggregateOutputType = {
    id: number
    emotionTag: number
    comment: number
    workId: number
    episodeId: number
    readerId: number
    createdAt: number
    _all: number
  }


  export type WateringEventMinAggregateInputType = {
    id?: true
    emotionTag?: true
    comment?: true
    workId?: true
    episodeId?: true
    readerId?: true
    createdAt?: true
  }

  export type WateringEventMaxAggregateInputType = {
    id?: true
    emotionTag?: true
    comment?: true
    workId?: true
    episodeId?: true
    readerId?: true
    createdAt?: true
  }

  export type WateringEventCountAggregateInputType = {
    id?: true
    emotionTag?: true
    comment?: true
    workId?: true
    episodeId?: true
    readerId?: true
    createdAt?: true
    _all?: true
  }

  export type WateringEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WateringEvent to aggregate.
     */
    where?: WateringEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WateringEvents to fetch.
     */
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WateringEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WateringEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WateringEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WateringEvents
    **/
    _count?: true | WateringEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WateringEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WateringEventMaxAggregateInputType
  }

  export type GetWateringEventAggregateType<T extends WateringEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWateringEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWateringEvent[P]>
      : GetScalarType<T[P], AggregateWateringEvent[P]>
  }




  export type WateringEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WateringEventWhereInput
    orderBy?: WateringEventOrderByWithAggregationInput | WateringEventOrderByWithAggregationInput[]
    by: WateringEventScalarFieldEnum[] | WateringEventScalarFieldEnum
    having?: WateringEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WateringEventCountAggregateInputType | true
    _min?: WateringEventMinAggregateInputType
    _max?: WateringEventMaxAggregateInputType
  }

  export type WateringEventGroupByOutputType = {
    id: string
    emotionTag: $Enums.EmotionTag | null
    comment: string | null
    workId: string
    episodeId: string
    readerId: string
    createdAt: Date
    _count: WateringEventCountAggregateOutputType | null
    _min: WateringEventMinAggregateOutputType | null
    _max: WateringEventMaxAggregateOutputType | null
  }

  type GetWateringEventGroupByPayload<T extends WateringEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WateringEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WateringEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WateringEventGroupByOutputType[P]>
            : GetScalarType<T[P], WateringEventGroupByOutputType[P]>
        }
      >
    >


  export type WateringEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emotionTag?: boolean
    comment?: boolean
    workId?: boolean
    episodeId?: boolean
    readerId?: boolean
    createdAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wateringEvent"]>

  export type WateringEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emotionTag?: boolean
    comment?: boolean
    workId?: boolean
    episodeId?: boolean
    readerId?: boolean
    createdAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wateringEvent"]>

  export type WateringEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emotionTag?: boolean
    comment?: boolean
    workId?: boolean
    episodeId?: boolean
    readerId?: boolean
    createdAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wateringEvent"]>

  export type WateringEventSelectScalar = {
    id?: boolean
    emotionTag?: boolean
    comment?: boolean
    workId?: boolean
    episodeId?: boolean
    readerId?: boolean
    createdAt?: boolean
  }

  export type WateringEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emotionTag" | "comment" | "workId" | "episodeId" | "readerId" | "createdAt", ExtArgs["result"]["wateringEvent"]>
  export type WateringEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WateringEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WateringEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    reader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WateringEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WateringEvent"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      episode: Prisma.$EpisodePayload<ExtArgs>
      reader: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emotionTag: $Enums.EmotionTag | null
      comment: string | null
      workId: string
      episodeId: string
      readerId: string
      createdAt: Date
    }, ExtArgs["result"]["wateringEvent"]>
    composites: {}
  }

  type WateringEventGetPayload<S extends boolean | null | undefined | WateringEventDefaultArgs> = $Result.GetResult<Prisma.$WateringEventPayload, S>

  type WateringEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WateringEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WateringEventCountAggregateInputType | true
    }

  export interface WateringEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WateringEvent'], meta: { name: 'WateringEvent' } }
    /**
     * Find zero or one WateringEvent that matches the filter.
     * @param {WateringEventFindUniqueArgs} args - Arguments to find a WateringEvent
     * @example
     * // Get one WateringEvent
     * const wateringEvent = await prisma.wateringEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WateringEventFindUniqueArgs>(args: SelectSubset<T, WateringEventFindUniqueArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WateringEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WateringEventFindUniqueOrThrowArgs} args - Arguments to find a WateringEvent
     * @example
     * // Get one WateringEvent
     * const wateringEvent = await prisma.wateringEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WateringEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WateringEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WateringEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventFindFirstArgs} args - Arguments to find a WateringEvent
     * @example
     * // Get one WateringEvent
     * const wateringEvent = await prisma.wateringEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WateringEventFindFirstArgs>(args?: SelectSubset<T, WateringEventFindFirstArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WateringEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventFindFirstOrThrowArgs} args - Arguments to find a WateringEvent
     * @example
     * // Get one WateringEvent
     * const wateringEvent = await prisma.wateringEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WateringEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WateringEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WateringEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WateringEvents
     * const wateringEvents = await prisma.wateringEvent.findMany()
     * 
     * // Get first 10 WateringEvents
     * const wateringEvents = await prisma.wateringEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wateringEventWithIdOnly = await prisma.wateringEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WateringEventFindManyArgs>(args?: SelectSubset<T, WateringEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WateringEvent.
     * @param {WateringEventCreateArgs} args - Arguments to create a WateringEvent.
     * @example
     * // Create one WateringEvent
     * const WateringEvent = await prisma.wateringEvent.create({
     *   data: {
     *     // ... data to create a WateringEvent
     *   }
     * })
     * 
     */
    create<T extends WateringEventCreateArgs>(args: SelectSubset<T, WateringEventCreateArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WateringEvents.
     * @param {WateringEventCreateManyArgs} args - Arguments to create many WateringEvents.
     * @example
     * // Create many WateringEvents
     * const wateringEvent = await prisma.wateringEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WateringEventCreateManyArgs>(args?: SelectSubset<T, WateringEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WateringEvents and returns the data saved in the database.
     * @param {WateringEventCreateManyAndReturnArgs} args - Arguments to create many WateringEvents.
     * @example
     * // Create many WateringEvents
     * const wateringEvent = await prisma.wateringEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WateringEvents and only return the `id`
     * const wateringEventWithIdOnly = await prisma.wateringEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WateringEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WateringEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WateringEvent.
     * @param {WateringEventDeleteArgs} args - Arguments to delete one WateringEvent.
     * @example
     * // Delete one WateringEvent
     * const WateringEvent = await prisma.wateringEvent.delete({
     *   where: {
     *     // ... filter to delete one WateringEvent
     *   }
     * })
     * 
     */
    delete<T extends WateringEventDeleteArgs>(args: SelectSubset<T, WateringEventDeleteArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WateringEvent.
     * @param {WateringEventUpdateArgs} args - Arguments to update one WateringEvent.
     * @example
     * // Update one WateringEvent
     * const wateringEvent = await prisma.wateringEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WateringEventUpdateArgs>(args: SelectSubset<T, WateringEventUpdateArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WateringEvents.
     * @param {WateringEventDeleteManyArgs} args - Arguments to filter WateringEvents to delete.
     * @example
     * // Delete a few WateringEvents
     * const { count } = await prisma.wateringEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WateringEventDeleteManyArgs>(args?: SelectSubset<T, WateringEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WateringEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WateringEvents
     * const wateringEvent = await prisma.wateringEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WateringEventUpdateManyArgs>(args: SelectSubset<T, WateringEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WateringEvents and returns the data updated in the database.
     * @param {WateringEventUpdateManyAndReturnArgs} args - Arguments to update many WateringEvents.
     * @example
     * // Update many WateringEvents
     * const wateringEvent = await prisma.wateringEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WateringEvents and only return the `id`
     * const wateringEventWithIdOnly = await prisma.wateringEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WateringEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WateringEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WateringEvent.
     * @param {WateringEventUpsertArgs} args - Arguments to update or create a WateringEvent.
     * @example
     * // Update or create a WateringEvent
     * const wateringEvent = await prisma.wateringEvent.upsert({
     *   create: {
     *     // ... data to create a WateringEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WateringEvent we want to update
     *   }
     * })
     */
    upsert<T extends WateringEventUpsertArgs>(args: SelectSubset<T, WateringEventUpsertArgs<ExtArgs>>): Prisma__WateringEventClient<$Result.GetResult<Prisma.$WateringEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WateringEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventCountArgs} args - Arguments to filter WateringEvents to count.
     * @example
     * // Count the number of WateringEvents
     * const count = await prisma.wateringEvent.count({
     *   where: {
     *     // ... the filter for the WateringEvents we want to count
     *   }
     * })
    **/
    count<T extends WateringEventCountArgs>(
      args?: Subset<T, WateringEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WateringEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WateringEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WateringEventAggregateArgs>(args: Subset<T, WateringEventAggregateArgs>): Prisma.PrismaPromise<GetWateringEventAggregateType<T>>

    /**
     * Group by WateringEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WateringEventGroupByArgs} args - Group by arguments.
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
      T extends WateringEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WateringEventGroupByArgs['orderBy'] }
        : { orderBy?: WateringEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WateringEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWateringEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WateringEvent model
   */
  readonly fields: WateringEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WateringEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WateringEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WateringEvent model
   */
  interface WateringEventFieldRefs {
    readonly id: FieldRef<"WateringEvent", 'String'>
    readonly emotionTag: FieldRef<"WateringEvent", 'EmotionTag'>
    readonly comment: FieldRef<"WateringEvent", 'String'>
    readonly workId: FieldRef<"WateringEvent", 'String'>
    readonly episodeId: FieldRef<"WateringEvent", 'String'>
    readonly readerId: FieldRef<"WateringEvent", 'String'>
    readonly createdAt: FieldRef<"WateringEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WateringEvent findUnique
   */
  export type WateringEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter, which WateringEvent to fetch.
     */
    where: WateringEventWhereUniqueInput
  }

  /**
   * WateringEvent findUniqueOrThrow
   */
  export type WateringEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter, which WateringEvent to fetch.
     */
    where: WateringEventWhereUniqueInput
  }

  /**
   * WateringEvent findFirst
   */
  export type WateringEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter, which WateringEvent to fetch.
     */
    where?: WateringEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WateringEvents to fetch.
     */
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WateringEvents.
     */
    cursor?: WateringEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WateringEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WateringEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WateringEvents.
     */
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * WateringEvent findFirstOrThrow
   */
  export type WateringEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter, which WateringEvent to fetch.
     */
    where?: WateringEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WateringEvents to fetch.
     */
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WateringEvents.
     */
    cursor?: WateringEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WateringEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WateringEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WateringEvents.
     */
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * WateringEvent findMany
   */
  export type WateringEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter, which WateringEvents to fetch.
     */
    where?: WateringEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WateringEvents to fetch.
     */
    orderBy?: WateringEventOrderByWithRelationInput | WateringEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WateringEvents.
     */
    cursor?: WateringEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WateringEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WateringEvents.
     */
    skip?: number
    distinct?: WateringEventScalarFieldEnum | WateringEventScalarFieldEnum[]
  }

  /**
   * WateringEvent create
   */
  export type WateringEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * The data needed to create a WateringEvent.
     */
    data: XOR<WateringEventCreateInput, WateringEventUncheckedCreateInput>
  }

  /**
   * WateringEvent createMany
   */
  export type WateringEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WateringEvents.
     */
    data: WateringEventCreateManyInput | WateringEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WateringEvent createManyAndReturn
   */
  export type WateringEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * The data used to create many WateringEvents.
     */
    data: WateringEventCreateManyInput | WateringEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WateringEvent update
   */
  export type WateringEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * The data needed to update a WateringEvent.
     */
    data: XOR<WateringEventUpdateInput, WateringEventUncheckedUpdateInput>
    /**
     * Choose, which WateringEvent to update.
     */
    where: WateringEventWhereUniqueInput
  }

  /**
   * WateringEvent updateMany
   */
  export type WateringEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WateringEvents.
     */
    data: XOR<WateringEventUpdateManyMutationInput, WateringEventUncheckedUpdateManyInput>
    /**
     * Filter which WateringEvents to update
     */
    where?: WateringEventWhereInput
    /**
     * Limit how many WateringEvents to update.
     */
    limit?: number
  }

  /**
   * WateringEvent updateManyAndReturn
   */
  export type WateringEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * The data used to update WateringEvents.
     */
    data: XOR<WateringEventUpdateManyMutationInput, WateringEventUncheckedUpdateManyInput>
    /**
     * Filter which WateringEvents to update
     */
    where?: WateringEventWhereInput
    /**
     * Limit how many WateringEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WateringEvent upsert
   */
  export type WateringEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * The filter to search for the WateringEvent to update in case it exists.
     */
    where: WateringEventWhereUniqueInput
    /**
     * In case the WateringEvent found by the `where` argument doesn't exist, create a new WateringEvent with this data.
     */
    create: XOR<WateringEventCreateInput, WateringEventUncheckedCreateInput>
    /**
     * In case the WateringEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WateringEventUpdateInput, WateringEventUncheckedUpdateInput>
  }

  /**
   * WateringEvent delete
   */
  export type WateringEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
    /**
     * Filter which WateringEvent to delete.
     */
    where: WateringEventWhereUniqueInput
  }

  /**
   * WateringEvent deleteMany
   */
  export type WateringEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WateringEvents to delete
     */
    where?: WateringEventWhereInput
    /**
     * Limit how many WateringEvents to delete.
     */
    limit?: number
  }

  /**
   * WateringEvent without action
   */
  export type WateringEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WateringEvent
     */
    select?: WateringEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WateringEvent
     */
    omit?: WateringEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WateringEventInclude<ExtArgs> | null
  }


  /**
   * Model AiContext
   */

  export type AggregateAiContext = {
    _count: AiContextCountAggregateOutputType | null
    _min: AiContextMinAggregateOutputType | null
    _max: AiContextMaxAggregateOutputType | null
  }

  export type AiContextMinAggregateOutputType = {
    id: string | null
    writingNotes: string | null
    workId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiContextMaxAggregateOutputType = {
    id: string | null
    writingNotes: string | null
    workId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiContextCountAggregateOutputType = {
    id: number
    characters: number
    storySettings: number
    writingNotes: number
    workId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiContextMinAggregateInputType = {
    id?: true
    writingNotes?: true
    workId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiContextMaxAggregateInputType = {
    id?: true
    writingNotes?: true
    workId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiContextCountAggregateInputType = {
    id?: true
    characters?: true
    storySettings?: true
    writingNotes?: true
    workId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiContext to aggregate.
     */
    where?: AiContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiContexts to fetch.
     */
    orderBy?: AiContextOrderByWithRelationInput | AiContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiContexts
    **/
    _count?: true | AiContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiContextMaxAggregateInputType
  }

  export type GetAiContextAggregateType<T extends AiContextAggregateArgs> = {
        [P in keyof T & keyof AggregateAiContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiContext[P]>
      : GetScalarType<T[P], AggregateAiContext[P]>
  }




  export type AiContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiContextWhereInput
    orderBy?: AiContextOrderByWithAggregationInput | AiContextOrderByWithAggregationInput[]
    by: AiContextScalarFieldEnum[] | AiContextScalarFieldEnum
    having?: AiContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiContextCountAggregateInputType | true
    _min?: AiContextMinAggregateInputType
    _max?: AiContextMaxAggregateInputType
  }

  export type AiContextGroupByOutputType = {
    id: string
    characters: JsonValue
    storySettings: JsonValue
    writingNotes: string | null
    workId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AiContextCountAggregateOutputType | null
    _min: AiContextMinAggregateOutputType | null
    _max: AiContextMaxAggregateOutputType | null
  }

  type GetAiContextGroupByPayload<T extends AiContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiContextGroupByOutputType[P]>
            : GetScalarType<T[P], AiContextGroupByOutputType[P]>
        }
      >
    >


  export type AiContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characters?: boolean
    storySettings?: boolean
    writingNotes?: boolean
    workId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiContext"]>

  export type AiContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characters?: boolean
    storySettings?: boolean
    writingNotes?: boolean
    workId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiContext"]>

  export type AiContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characters?: boolean
    storySettings?: boolean
    writingNotes?: boolean
    workId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiContext"]>

  export type AiContextSelectScalar = {
    id?: boolean
    characters?: boolean
    storySettings?: boolean
    writingNotes?: boolean
    workId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characters" | "storySettings" | "writingNotes" | "workId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["aiContext"]>
  export type AiContextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiContextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiContextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AiContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiContext"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      characters: Prisma.JsonValue
      storySettings: Prisma.JsonValue
      writingNotes: string | null
      workId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiContext"]>
    composites: {}
  }

  type AiContextGetPayload<S extends boolean | null | undefined | AiContextDefaultArgs> = $Result.GetResult<Prisma.$AiContextPayload, S>

  type AiContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiContextCountAggregateInputType | true
    }

  export interface AiContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiContext'], meta: { name: 'AiContext' } }
    /**
     * Find zero or one AiContext that matches the filter.
     * @param {AiContextFindUniqueArgs} args - Arguments to find a AiContext
     * @example
     * // Get one AiContext
     * const aiContext = await prisma.aiContext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiContextFindUniqueArgs>(args: SelectSubset<T, AiContextFindUniqueArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiContext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiContextFindUniqueOrThrowArgs} args - Arguments to find a AiContext
     * @example
     * // Get one AiContext
     * const aiContext = await prisma.aiContext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiContextFindUniqueOrThrowArgs>(args: SelectSubset<T, AiContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiContext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextFindFirstArgs} args - Arguments to find a AiContext
     * @example
     * // Get one AiContext
     * const aiContext = await prisma.aiContext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiContextFindFirstArgs>(args?: SelectSubset<T, AiContextFindFirstArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiContext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextFindFirstOrThrowArgs} args - Arguments to find a AiContext
     * @example
     * // Get one AiContext
     * const aiContext = await prisma.aiContext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiContextFindFirstOrThrowArgs>(args?: SelectSubset<T, AiContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiContexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiContexts
     * const aiContexts = await prisma.aiContext.findMany()
     * 
     * // Get first 10 AiContexts
     * const aiContexts = await prisma.aiContext.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiContextWithIdOnly = await prisma.aiContext.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiContextFindManyArgs>(args?: SelectSubset<T, AiContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiContext.
     * @param {AiContextCreateArgs} args - Arguments to create a AiContext.
     * @example
     * // Create one AiContext
     * const AiContext = await prisma.aiContext.create({
     *   data: {
     *     // ... data to create a AiContext
     *   }
     * })
     * 
     */
    create<T extends AiContextCreateArgs>(args: SelectSubset<T, AiContextCreateArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiContexts.
     * @param {AiContextCreateManyArgs} args - Arguments to create many AiContexts.
     * @example
     * // Create many AiContexts
     * const aiContext = await prisma.aiContext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiContextCreateManyArgs>(args?: SelectSubset<T, AiContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiContexts and returns the data saved in the database.
     * @param {AiContextCreateManyAndReturnArgs} args - Arguments to create many AiContexts.
     * @example
     * // Create many AiContexts
     * const aiContext = await prisma.aiContext.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiContexts and only return the `id`
     * const aiContextWithIdOnly = await prisma.aiContext.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiContextCreateManyAndReturnArgs>(args?: SelectSubset<T, AiContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiContext.
     * @param {AiContextDeleteArgs} args - Arguments to delete one AiContext.
     * @example
     * // Delete one AiContext
     * const AiContext = await prisma.aiContext.delete({
     *   where: {
     *     // ... filter to delete one AiContext
     *   }
     * })
     * 
     */
    delete<T extends AiContextDeleteArgs>(args: SelectSubset<T, AiContextDeleteArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiContext.
     * @param {AiContextUpdateArgs} args - Arguments to update one AiContext.
     * @example
     * // Update one AiContext
     * const aiContext = await prisma.aiContext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiContextUpdateArgs>(args: SelectSubset<T, AiContextUpdateArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiContexts.
     * @param {AiContextDeleteManyArgs} args - Arguments to filter AiContexts to delete.
     * @example
     * // Delete a few AiContexts
     * const { count } = await prisma.aiContext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiContextDeleteManyArgs>(args?: SelectSubset<T, AiContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiContexts
     * const aiContext = await prisma.aiContext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiContextUpdateManyArgs>(args: SelectSubset<T, AiContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiContexts and returns the data updated in the database.
     * @param {AiContextUpdateManyAndReturnArgs} args - Arguments to update many AiContexts.
     * @example
     * // Update many AiContexts
     * const aiContext = await prisma.aiContext.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiContexts and only return the `id`
     * const aiContextWithIdOnly = await prisma.aiContext.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiContextUpdateManyAndReturnArgs>(args: SelectSubset<T, AiContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiContext.
     * @param {AiContextUpsertArgs} args - Arguments to update or create a AiContext.
     * @example
     * // Update or create a AiContext
     * const aiContext = await prisma.aiContext.upsert({
     *   create: {
     *     // ... data to create a AiContext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiContext we want to update
     *   }
     * })
     */
    upsert<T extends AiContextUpsertArgs>(args: SelectSubset<T, AiContextUpsertArgs<ExtArgs>>): Prisma__AiContextClient<$Result.GetResult<Prisma.$AiContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextCountArgs} args - Arguments to filter AiContexts to count.
     * @example
     * // Count the number of AiContexts
     * const count = await prisma.aiContext.count({
     *   where: {
     *     // ... the filter for the AiContexts we want to count
     *   }
     * })
    **/
    count<T extends AiContextCountArgs>(
      args?: Subset<T, AiContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiContextAggregateArgs>(args: Subset<T, AiContextAggregateArgs>): Prisma.PrismaPromise<GetAiContextAggregateType<T>>

    /**
     * Group by AiContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiContextGroupByArgs} args - Group by arguments.
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
      T extends AiContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiContextGroupByArgs['orderBy'] }
        : { orderBy?: AiContextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiContext model
   */
  readonly fields: AiContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiContext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiContext model
   */
  interface AiContextFieldRefs {
    readonly id: FieldRef<"AiContext", 'String'>
    readonly characters: FieldRef<"AiContext", 'Json'>
    readonly storySettings: FieldRef<"AiContext", 'Json'>
    readonly writingNotes: FieldRef<"AiContext", 'String'>
    readonly workId: FieldRef<"AiContext", 'String'>
    readonly userId: FieldRef<"AiContext", 'String'>
    readonly createdAt: FieldRef<"AiContext", 'DateTime'>
    readonly updatedAt: FieldRef<"AiContext", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiContext findUnique
   */
  export type AiContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter, which AiContext to fetch.
     */
    where: AiContextWhereUniqueInput
  }

  /**
   * AiContext findUniqueOrThrow
   */
  export type AiContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter, which AiContext to fetch.
     */
    where: AiContextWhereUniqueInput
  }

  /**
   * AiContext findFirst
   */
  export type AiContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter, which AiContext to fetch.
     */
    where?: AiContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiContexts to fetch.
     */
    orderBy?: AiContextOrderByWithRelationInput | AiContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiContexts.
     */
    cursor?: AiContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiContexts.
     */
    distinct?: AiContextScalarFieldEnum | AiContextScalarFieldEnum[]
  }

  /**
   * AiContext findFirstOrThrow
   */
  export type AiContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter, which AiContext to fetch.
     */
    where?: AiContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiContexts to fetch.
     */
    orderBy?: AiContextOrderByWithRelationInput | AiContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiContexts.
     */
    cursor?: AiContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiContexts.
     */
    distinct?: AiContextScalarFieldEnum | AiContextScalarFieldEnum[]
  }

  /**
   * AiContext findMany
   */
  export type AiContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter, which AiContexts to fetch.
     */
    where?: AiContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiContexts to fetch.
     */
    orderBy?: AiContextOrderByWithRelationInput | AiContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiContexts.
     */
    cursor?: AiContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiContexts.
     */
    skip?: number
    distinct?: AiContextScalarFieldEnum | AiContextScalarFieldEnum[]
  }

  /**
   * AiContext create
   */
  export type AiContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * The data needed to create a AiContext.
     */
    data: XOR<AiContextCreateInput, AiContextUncheckedCreateInput>
  }

  /**
   * AiContext createMany
   */
  export type AiContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiContexts.
     */
    data: AiContextCreateManyInput | AiContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiContext createManyAndReturn
   */
  export type AiContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * The data used to create many AiContexts.
     */
    data: AiContextCreateManyInput | AiContextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiContext update
   */
  export type AiContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * The data needed to update a AiContext.
     */
    data: XOR<AiContextUpdateInput, AiContextUncheckedUpdateInput>
    /**
     * Choose, which AiContext to update.
     */
    where: AiContextWhereUniqueInput
  }

  /**
   * AiContext updateMany
   */
  export type AiContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiContexts.
     */
    data: XOR<AiContextUpdateManyMutationInput, AiContextUncheckedUpdateManyInput>
    /**
     * Filter which AiContexts to update
     */
    where?: AiContextWhereInput
    /**
     * Limit how many AiContexts to update.
     */
    limit?: number
  }

  /**
   * AiContext updateManyAndReturn
   */
  export type AiContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * The data used to update AiContexts.
     */
    data: XOR<AiContextUpdateManyMutationInput, AiContextUncheckedUpdateManyInput>
    /**
     * Filter which AiContexts to update
     */
    where?: AiContextWhereInput
    /**
     * Limit how many AiContexts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiContext upsert
   */
  export type AiContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * The filter to search for the AiContext to update in case it exists.
     */
    where: AiContextWhereUniqueInput
    /**
     * In case the AiContext found by the `where` argument doesn't exist, create a new AiContext with this data.
     */
    create: XOR<AiContextCreateInput, AiContextUncheckedCreateInput>
    /**
     * In case the AiContext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiContextUpdateInput, AiContextUncheckedUpdateInput>
  }

  /**
   * AiContext delete
   */
  export type AiContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
    /**
     * Filter which AiContext to delete.
     */
    where: AiContextWhereUniqueInput
  }

  /**
   * AiContext deleteMany
   */
  export type AiContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiContexts to delete
     */
    where?: AiContextWhereInput
    /**
     * Limit how many AiContexts to delete.
     */
    limit?: number
  }

  /**
   * AiContext without action
   */
  export type AiContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiContext
     */
    select?: AiContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiContext
     */
    omit?: AiContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiContextInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const InviteCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    usedAt: 'usedAt',
    usedById: 'usedById',
    createdAt: 'createdAt'
  };

  export type InviteCodeScalarFieldEnum = (typeof InviteCodeScalarFieldEnum)[keyof typeof InviteCodeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    nickname: 'nickname',
    genre: 'genre',
    creativeStyle: 'creativeStyle',
    persona: 'persona',
    onboardingDone: 'onboardingDone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    coverImage: 'coverImage',
    isPublished: 'isPublished',
    isCompleted: 'isCompleted',
    flowerStage: 'flowerStage',
    waterCount: 'waterCount',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    images: 'images',
    episodeNum: 'episodeNum',
    isPublished: 'isPublished',
    workId: 'workId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const WateringEventScalarFieldEnum: {
    id: 'id',
    emotionTag: 'emotionTag',
    comment: 'comment',
    workId: 'workId',
    episodeId: 'episodeId',
    readerId: 'readerId',
    createdAt: 'createdAt'
  };

  export type WateringEventScalarFieldEnum = (typeof WateringEventScalarFieldEnum)[keyof typeof WateringEventScalarFieldEnum]


  export const AiContextScalarFieldEnum: {
    id: 'id',
    characters: 'characters',
    storySettings: 'storySettings',
    writingNotes: 'writingNotes',
    workId: 'workId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiContextScalarFieldEnum = (typeof AiContextScalarFieldEnum)[keyof typeof AiContextScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre'>
    


  /**
   * Reference to a field of type 'Genre[]'
   */
  export type ListEnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre[]'>
    


  /**
   * Reference to a field of type 'Persona'
   */
  export type EnumPersonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Persona'>
    


  /**
   * Reference to a field of type 'Persona[]'
   */
  export type ListEnumPersonaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Persona[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FlowerStage'
   */
  export type EnumFlowerStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowerStage'>
    


  /**
   * Reference to a field of type 'FlowerStage[]'
   */
  export type ListEnumFlowerStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowerStage[]'>
    


  /**
   * Reference to a field of type 'EmotionTag'
   */
  export type EnumEmotionTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmotionTag'>
    


  /**
   * Reference to a field of type 'EmotionTag[]'
   */
  export type ListEnumEmotionTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmotionTag[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type InviteCodeWhereInput = {
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    id?: StringFilter<"InviteCode"> | string
    code?: StringFilter<"InviteCode"> | string
    usedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    usedById?: StringNullableFilter<"InviteCode"> | string | null
    createdAt?: DateTimeFilter<"InviteCode"> | Date | string
    usedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InviteCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    usedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    usedBy?: UserOrderByWithRelationInput
  }

  export type InviteCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    usedById?: string
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    usedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    createdAt?: DateTimeFilter<"InviteCode"> | Date | string
    usedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "code" | "usedById">

  export type InviteCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    usedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InviteCodeCountOrderByAggregateInput
    _max?: InviteCodeMaxOrderByAggregateInput
    _min?: InviteCodeMinOrderByAggregateInput
  }

  export type InviteCodeScalarWhereWithAggregatesInput = {
    AND?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    OR?: InviteCodeScalarWhereWithAggregatesInput[]
    NOT?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InviteCode"> | string
    code?: StringWithAggregatesFilter<"InviteCode"> | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"InviteCode"> | Date | string | null
    usedById?: StringNullableWithAggregatesFilter<"InviteCode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InviteCode"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    genre?: EnumGenreNullableFilter<"User"> | $Enums.Genre | null
    creativeStyle?: StringNullableFilter<"User"> | string | null
    persona?: EnumPersonaFilter<"User"> | $Enums.Persona
    onboardingDone?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    inviteCode?: XOR<InviteCodeNullableScalarRelationFilter, InviteCodeWhereInput> | null
    works?: WorkListRelationFilter
    aiContexts?: AiContextListRelationFilter
    waterings?: WateringEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    creativeStyle?: SortOrderInput | SortOrder
    persona?: SortOrder
    onboardingDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    inviteCode?: InviteCodeOrderByWithRelationInput
    works?: WorkOrderByRelationAggregateInput
    aiContexts?: AiContextOrderByRelationAggregateInput
    waterings?: WateringEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    genre?: EnumGenreNullableFilter<"User"> | $Enums.Genre | null
    creativeStyle?: StringNullableFilter<"User"> | string | null
    persona?: EnumPersonaFilter<"User"> | $Enums.Persona
    onboardingDone?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    inviteCode?: XOR<InviteCodeNullableScalarRelationFilter, InviteCodeWhereInput> | null
    works?: WorkListRelationFilter
    aiContexts?: AiContextListRelationFilter
    waterings?: WateringEventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    creativeStyle?: SortOrderInput | SortOrder
    persona?: SortOrder
    onboardingDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    genre?: EnumGenreNullableWithAggregatesFilter<"User"> | $Enums.Genre | null
    creativeStyle?: StringNullableWithAggregatesFilter<"User"> | string | null
    persona?: EnumPersonaWithAggregatesFilter<"User"> | $Enums.Persona
    onboardingDone?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    title?: StringFilter<"Work"> | string
    description?: StringNullableFilter<"Work"> | string | null
    coverImage?: StringNullableFilter<"Work"> | string | null
    isPublished?: BoolFilter<"Work"> | boolean
    isCompleted?: BoolFilter<"Work"> | boolean
    flowerStage?: EnumFlowerStageFilter<"Work"> | $Enums.FlowerStage
    waterCount?: IntFilter<"Work"> | number
    authorId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    episodes?: EpisodeListRelationFilter
    waterings?: WateringEventListRelationFilter
    aiContext?: XOR<AiContextNullableScalarRelationFilter, AiContextWhereInput> | null
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    isCompleted?: SortOrder
    flowerStage?: SortOrder
    waterCount?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    episodes?: EpisodeOrderByRelationAggregateInput
    waterings?: WateringEventOrderByRelationAggregateInput
    aiContext?: AiContextOrderByWithRelationInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    title?: StringFilter<"Work"> | string
    description?: StringNullableFilter<"Work"> | string | null
    coverImage?: StringNullableFilter<"Work"> | string | null
    isPublished?: BoolFilter<"Work"> | boolean
    isCompleted?: BoolFilter<"Work"> | boolean
    flowerStage?: EnumFlowerStageFilter<"Work"> | $Enums.FlowerStage
    waterCount?: IntFilter<"Work"> | number
    authorId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    episodes?: EpisodeListRelationFilter
    waterings?: WateringEventListRelationFilter
    aiContext?: XOR<AiContextNullableScalarRelationFilter, AiContextWhereInput> | null
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    isCompleted?: SortOrder
    flowerStage?: SortOrder
    waterCount?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    title?: StringWithAggregatesFilter<"Work"> | string
    description?: StringNullableWithAggregatesFilter<"Work"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Work"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Work"> | boolean
    isCompleted?: BoolWithAggregatesFilter<"Work"> | boolean
    flowerStage?: EnumFlowerStageWithAggregatesFilter<"Work"> | $Enums.FlowerStage
    waterCount?: IntWithAggregatesFilter<"Work"> | number
    authorId?: StringWithAggregatesFilter<"Work"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    content?: StringNullableFilter<"Episode"> | string | null
    images?: StringNullableListFilter<"Episode">
    episodeNum?: IntFilter<"Episode"> | number
    isPublished?: BoolFilter<"Episode"> | boolean
    workId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    waterings?: WateringEventListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    images?: SortOrder
    episodeNum?: SortOrder
    isPublished?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
    waterings?: WateringEventOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    title?: StringFilter<"Episode"> | string
    content?: StringNullableFilter<"Episode"> | string | null
    images?: StringNullableListFilter<"Episode">
    episodeNum?: IntFilter<"Episode"> | number
    isPublished?: BoolFilter<"Episode"> | boolean
    workId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    waterings?: WateringEventListRelationFilter
  }, "id">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    images?: SortOrder
    episodeNum?: SortOrder
    isPublished?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    title?: StringWithAggregatesFilter<"Episode"> | string
    content?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    images?: StringNullableListFilter<"Episode">
    episodeNum?: IntWithAggregatesFilter<"Episode"> | number
    isPublished?: BoolWithAggregatesFilter<"Episode"> | boolean
    workId?: StringWithAggregatesFilter<"Episode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type WateringEventWhereInput = {
    AND?: WateringEventWhereInput | WateringEventWhereInput[]
    OR?: WateringEventWhereInput[]
    NOT?: WateringEventWhereInput | WateringEventWhereInput[]
    id?: StringFilter<"WateringEvent"> | string
    emotionTag?: EnumEmotionTagNullableFilter<"WateringEvent"> | $Enums.EmotionTag | null
    comment?: StringNullableFilter<"WateringEvent"> | string | null
    workId?: StringFilter<"WateringEvent"> | string
    episodeId?: StringFilter<"WateringEvent"> | string
    readerId?: StringFilter<"WateringEvent"> | string
    createdAt?: DateTimeFilter<"WateringEvent"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    reader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WateringEventOrderByWithRelationInput = {
    id?: SortOrder
    emotionTag?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    workId?: SortOrder
    episodeId?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    work?: WorkOrderByWithRelationInput
    episode?: EpisodeOrderByWithRelationInput
    reader?: UserOrderByWithRelationInput
  }

  export type WateringEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    readerId_episodeId?: WateringEventReaderIdEpisodeIdCompoundUniqueInput
    AND?: WateringEventWhereInput | WateringEventWhereInput[]
    OR?: WateringEventWhereInput[]
    NOT?: WateringEventWhereInput | WateringEventWhereInput[]
    emotionTag?: EnumEmotionTagNullableFilter<"WateringEvent"> | $Enums.EmotionTag | null
    comment?: StringNullableFilter<"WateringEvent"> | string | null
    workId?: StringFilter<"WateringEvent"> | string
    episodeId?: StringFilter<"WateringEvent"> | string
    readerId?: StringFilter<"WateringEvent"> | string
    createdAt?: DateTimeFilter<"WateringEvent"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    reader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "readerId_episodeId">

  export type WateringEventOrderByWithAggregationInput = {
    id?: SortOrder
    emotionTag?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    workId?: SortOrder
    episodeId?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    _count?: WateringEventCountOrderByAggregateInput
    _max?: WateringEventMaxOrderByAggregateInput
    _min?: WateringEventMinOrderByAggregateInput
  }

  export type WateringEventScalarWhereWithAggregatesInput = {
    AND?: WateringEventScalarWhereWithAggregatesInput | WateringEventScalarWhereWithAggregatesInput[]
    OR?: WateringEventScalarWhereWithAggregatesInput[]
    NOT?: WateringEventScalarWhereWithAggregatesInput | WateringEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WateringEvent"> | string
    emotionTag?: EnumEmotionTagNullableWithAggregatesFilter<"WateringEvent"> | $Enums.EmotionTag | null
    comment?: StringNullableWithAggregatesFilter<"WateringEvent"> | string | null
    workId?: StringWithAggregatesFilter<"WateringEvent"> | string
    episodeId?: StringWithAggregatesFilter<"WateringEvent"> | string
    readerId?: StringWithAggregatesFilter<"WateringEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WateringEvent"> | Date | string
  }

  export type AiContextWhereInput = {
    AND?: AiContextWhereInput | AiContextWhereInput[]
    OR?: AiContextWhereInput[]
    NOT?: AiContextWhereInput | AiContextWhereInput[]
    id?: StringFilter<"AiContext"> | string
    characters?: JsonFilter<"AiContext">
    storySettings?: JsonFilter<"AiContext">
    writingNotes?: StringNullableFilter<"AiContext"> | string | null
    workId?: StringFilter<"AiContext"> | string
    userId?: StringFilter<"AiContext"> | string
    createdAt?: DateTimeFilter<"AiContext"> | Date | string
    updatedAt?: DateTimeFilter<"AiContext"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AiContextOrderByWithRelationInput = {
    id?: SortOrder
    characters?: SortOrder
    storySettings?: SortOrder
    writingNotes?: SortOrderInput | SortOrder
    workId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AiContextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workId?: string
    AND?: AiContextWhereInput | AiContextWhereInput[]
    OR?: AiContextWhereInput[]
    NOT?: AiContextWhereInput | AiContextWhereInput[]
    characters?: JsonFilter<"AiContext">
    storySettings?: JsonFilter<"AiContext">
    writingNotes?: StringNullableFilter<"AiContext"> | string | null
    userId?: StringFilter<"AiContext"> | string
    createdAt?: DateTimeFilter<"AiContext"> | Date | string
    updatedAt?: DateTimeFilter<"AiContext"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "workId">

  export type AiContextOrderByWithAggregationInput = {
    id?: SortOrder
    characters?: SortOrder
    storySettings?: SortOrder
    writingNotes?: SortOrderInput | SortOrder
    workId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiContextCountOrderByAggregateInput
    _max?: AiContextMaxOrderByAggregateInput
    _min?: AiContextMinOrderByAggregateInput
  }

  export type AiContextScalarWhereWithAggregatesInput = {
    AND?: AiContextScalarWhereWithAggregatesInput | AiContextScalarWhereWithAggregatesInput[]
    OR?: AiContextScalarWhereWithAggregatesInput[]
    NOT?: AiContextScalarWhereWithAggregatesInput | AiContextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiContext"> | string
    characters?: JsonWithAggregatesFilter<"AiContext">
    storySettings?: JsonWithAggregatesFilter<"AiContext">
    writingNotes?: StringNullableWithAggregatesFilter<"AiContext"> | string | null
    workId?: StringWithAggregatesFilter<"AiContext"> | string
    userId?: StringWithAggregatesFilter<"AiContext"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiContext"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiContext"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
    usedBy?: UserCreateNestedOneWithoutInviteCodeInput
  }

  export type InviteCodeUncheckedCreateInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    usedById?: string | null
    createdAt?: Date | string
  }

  export type InviteCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedBy?: UserUpdateOneWithoutInviteCodeNestedInput
  }

  export type InviteCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateManyInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    usedById?: string | null
    createdAt?: Date | string
  }

  export type InviteCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutWorksInput
    episodes?: EpisodeCreateNestedManyWithoutWorkInput
    waterings?: WateringEventCreateNestedManyWithoutWorkInput
    aiContext?: AiContextCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutWorkInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutWorkInput
    aiContext?: AiContextUncheckedCreateNestedOneWithoutWorkInput
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutWorksNestedInput
    episodes?: EpisodeUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUncheckedUpdateOneWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutEpisodesInput
    waterings?: WateringEventCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    workId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    waterings?: WateringEventUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutEpisodesNestedInput
    waterings?: WateringEventUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterings?: WateringEventUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    workId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventCreateInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    createdAt?: Date | string
    work: WorkCreateNestedOneWithoutWateringsInput
    episode: EpisodeCreateNestedOneWithoutWateringsInput
    reader: UserCreateNestedOneWithoutWateringsInput
  }

  export type WateringEventUncheckedCreateInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    episodeId: string
    readerId: string
    createdAt?: Date | string
  }

  export type WateringEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWateringsNestedInput
    episode?: EpisodeUpdateOneRequiredWithoutWateringsNestedInput
    reader?: UserUpdateOneRequiredWithoutWateringsNestedInput
  }

  export type WateringEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventCreateManyInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    episodeId: string
    readerId: string
    createdAt?: Date | string
  }

  export type WateringEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiContextCreateInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutAiContextInput
    user: UserCreateNestedOneWithoutAiContextsInput
  }

  export type AiContextUncheckedCreateInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    workId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiContextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutAiContextNestedInput
    user?: UserUpdateOneRequiredWithoutAiContextsNestedInput
  }

  export type AiContextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiContextCreateManyInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    workId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiContextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiContextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InviteCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    usedById?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    usedById?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedAt?: SortOrder
    usedById?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenreNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenreNullableFilter<$PrismaModel> | $Enums.Genre | null
  }

  export type EnumPersonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Persona | EnumPersonaFieldRefInput<$PrismaModel>
    in?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonaFilter<$PrismaModel> | $Enums.Persona
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type InviteCodeNullableScalarRelationFilter = {
    is?: InviteCodeWhereInput | null
    isNot?: InviteCodeWhereInput | null
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type AiContextListRelationFilter = {
    every?: AiContextWhereInput
    some?: AiContextWhereInput
    none?: AiContextWhereInput
  }

  export type WateringEventListRelationFilter = {
    every?: WateringEventWhereInput
    some?: WateringEventWhereInput
    none?: WateringEventWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiContextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WateringEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    genre?: SortOrder
    creativeStyle?: SortOrder
    persona?: SortOrder
    onboardingDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    genre?: SortOrder
    creativeStyle?: SortOrder
    persona?: SortOrder
    onboardingDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nickname?: SortOrder
    genre?: SortOrder
    creativeStyle?: SortOrder
    persona?: SortOrder
    onboardingDone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenreNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenreNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genre | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenreNullableFilter<$PrismaModel>
    _max?: NestedEnumGenreNullableFilter<$PrismaModel>
  }

  export type EnumPersonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Persona | EnumPersonaFieldRefInput<$PrismaModel>
    in?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonaWithAggregatesFilter<$PrismaModel> | $Enums.Persona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonaFilter<$PrismaModel>
    _max?: NestedEnumPersonaFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFlowerStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowerStage | EnumFlowerStageFieldRefInput<$PrismaModel>
    in?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowerStageFilter<$PrismaModel> | $Enums.FlowerStage
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type AiContextNullableScalarRelationFilter = {
    is?: AiContextWhereInput | null
    isNot?: AiContextWhereInput | null
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPublished?: SortOrder
    isCompleted?: SortOrder
    flowerStage?: SortOrder
    waterCount?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkAvgOrderByAggregateInput = {
    waterCount?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPublished?: SortOrder
    isCompleted?: SortOrder
    flowerStage?: SortOrder
    waterCount?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPublished?: SortOrder
    isCompleted?: SortOrder
    flowerStage?: SortOrder
    waterCount?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSumOrderByAggregateInput = {
    waterCount?: SortOrder
  }

  export type EnumFlowerStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowerStage | EnumFlowerStageFieldRefInput<$PrismaModel>
    in?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowerStageWithAggregatesFilter<$PrismaModel> | $Enums.FlowerStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowerStageFilter<$PrismaModel>
    _max?: NestedEnumFlowerStageFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    images?: SortOrder
    episodeNum?: SortOrder
    isPublished?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episodeNum?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    episodeNum?: SortOrder
    isPublished?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    episodeNum?: SortOrder
    isPublished?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episodeNum?: SortOrder
  }

  export type EnumEmotionTagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionTag | EnumEmotionTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionTagNullableFilter<$PrismaModel> | $Enums.EmotionTag | null
  }

  export type EpisodeScalarRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type WateringEventReaderIdEpisodeIdCompoundUniqueInput = {
    readerId: string
    episodeId: string
  }

  export type WateringEventCountOrderByAggregateInput = {
    id?: SortOrder
    emotionTag?: SortOrder
    comment?: SortOrder
    workId?: SortOrder
    episodeId?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WateringEventMaxOrderByAggregateInput = {
    id?: SortOrder
    emotionTag?: SortOrder
    comment?: SortOrder
    workId?: SortOrder
    episodeId?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WateringEventMinOrderByAggregateInput = {
    id?: SortOrder
    emotionTag?: SortOrder
    comment?: SortOrder
    workId?: SortOrder
    episodeId?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEmotionTagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionTag | EnumEmotionTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionTagNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmotionTag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmotionTagNullableFilter<$PrismaModel>
    _max?: NestedEnumEmotionTagNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AiContextCountOrderByAggregateInput = {
    id?: SortOrder
    characters?: SortOrder
    storySettings?: SortOrder
    writingNotes?: SortOrder
    workId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiContextMaxOrderByAggregateInput = {
    id?: SortOrder
    writingNotes?: SortOrder
    workId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiContextMinOrderByAggregateInput = {
    id?: SortOrder
    writingNotes?: SortOrder
    workId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutInviteCodeInput = {
    create?: XOR<UserCreateWithoutInviteCodeInput, UserUncheckedCreateWithoutInviteCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteCodeInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutInviteCodeNestedInput = {
    create?: XOR<UserCreateWithoutInviteCodeInput, UserUncheckedCreateWithoutInviteCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteCodeInput
    upsert?: UserUpsertWithoutInviteCodeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInviteCodeInput, UserUpdateWithoutInviteCodeInput>, UserUncheckedUpdateWithoutInviteCodeInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type InviteCodeCreateNestedOneWithoutUsedByInput = {
    create?: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
    connectOrCreate?: InviteCodeCreateOrConnectWithoutUsedByInput
    connect?: InviteCodeWhereUniqueInput
  }

  export type WorkCreateNestedManyWithoutAuthorInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type AiContextCreateNestedManyWithoutUserInput = {
    create?: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput> | AiContextCreateWithoutUserInput[] | AiContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiContextCreateOrConnectWithoutUserInput | AiContextCreateOrConnectWithoutUserInput[]
    createMany?: AiContextCreateManyUserInputEnvelope
    connect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
  }

  export type WateringEventCreateNestedManyWithoutReaderInput = {
    create?: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput> | WateringEventCreateWithoutReaderInput[] | WateringEventUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutReaderInput | WateringEventCreateOrConnectWithoutReaderInput[]
    createMany?: WateringEventCreateManyReaderInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type InviteCodeUncheckedCreateNestedOneWithoutUsedByInput = {
    create?: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
    connectOrCreate?: InviteCodeCreateOrConnectWithoutUsedByInput
    connect?: InviteCodeWhereUniqueInput
  }

  export type WorkUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type AiContextUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput> | AiContextCreateWithoutUserInput[] | AiContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiContextCreateOrConnectWithoutUserInput | AiContextCreateOrConnectWithoutUserInput[]
    createMany?: AiContextCreateManyUserInputEnvelope
    connect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
  }

  export type WateringEventUncheckedCreateNestedManyWithoutReaderInput = {
    create?: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput> | WateringEventCreateWithoutReaderInput[] | WateringEventUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutReaderInput | WateringEventCreateOrConnectWithoutReaderInput[]
    createMany?: WateringEventCreateManyReaderInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type NullableEnumGenreFieldUpdateOperationsInput = {
    set?: $Enums.Genre | null
  }

  export type EnumPersonaFieldUpdateOperationsInput = {
    set?: $Enums.Persona
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type InviteCodeUpdateOneWithoutUsedByNestedInput = {
    create?: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
    connectOrCreate?: InviteCodeCreateOrConnectWithoutUsedByInput
    upsert?: InviteCodeUpsertWithoutUsedByInput
    disconnect?: InviteCodeWhereInput | boolean
    delete?: InviteCodeWhereInput | boolean
    connect?: InviteCodeWhereUniqueInput
    update?: XOR<XOR<InviteCodeUpdateToOneWithWhereWithoutUsedByInput, InviteCodeUpdateWithoutUsedByInput>, InviteCodeUncheckedUpdateWithoutUsedByInput>
  }

  export type WorkUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutAuthorInput | WorkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutAuthorInput | WorkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutAuthorInput | WorkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type AiContextUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput> | AiContextCreateWithoutUserInput[] | AiContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiContextCreateOrConnectWithoutUserInput | AiContextCreateOrConnectWithoutUserInput[]
    upsert?: AiContextUpsertWithWhereUniqueWithoutUserInput | AiContextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiContextCreateManyUserInputEnvelope
    set?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    disconnect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    delete?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    connect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    update?: AiContextUpdateWithWhereUniqueWithoutUserInput | AiContextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiContextUpdateManyWithWhereWithoutUserInput | AiContextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiContextScalarWhereInput | AiContextScalarWhereInput[]
  }

  export type WateringEventUpdateManyWithoutReaderNestedInput = {
    create?: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput> | WateringEventCreateWithoutReaderInput[] | WateringEventUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutReaderInput | WateringEventCreateOrConnectWithoutReaderInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutReaderInput | WateringEventUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: WateringEventCreateManyReaderInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutReaderInput | WateringEventUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutReaderInput | WateringEventUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput = {
    create?: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
    connectOrCreate?: InviteCodeCreateOrConnectWithoutUsedByInput
    upsert?: InviteCodeUpsertWithoutUsedByInput
    disconnect?: InviteCodeWhereInput | boolean
    delete?: InviteCodeWhereInput | boolean
    connect?: InviteCodeWhereUniqueInput
    update?: XOR<XOR<InviteCodeUpdateToOneWithWhereWithoutUsedByInput, InviteCodeUpdateWithoutUsedByInput>, InviteCodeUncheckedUpdateWithoutUsedByInput>
  }

  export type WorkUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutAuthorInput | WorkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutAuthorInput | WorkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutAuthorInput | WorkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type AiContextUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput> | AiContextCreateWithoutUserInput[] | AiContextUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiContextCreateOrConnectWithoutUserInput | AiContextCreateOrConnectWithoutUserInput[]
    upsert?: AiContextUpsertWithWhereUniqueWithoutUserInput | AiContextUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiContextCreateManyUserInputEnvelope
    set?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    disconnect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    delete?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    connect?: AiContextWhereUniqueInput | AiContextWhereUniqueInput[]
    update?: AiContextUpdateWithWhereUniqueWithoutUserInput | AiContextUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiContextUpdateManyWithWhereWithoutUserInput | AiContextUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiContextScalarWhereInput | AiContextScalarWhereInput[]
  }

  export type WateringEventUncheckedUpdateManyWithoutReaderNestedInput = {
    create?: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput> | WateringEventCreateWithoutReaderInput[] | WateringEventUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutReaderInput | WateringEventCreateOrConnectWithoutReaderInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutReaderInput | WateringEventUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: WateringEventCreateManyReaderInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutReaderInput | WateringEventUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutReaderInput | WateringEventUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorksInput = {
    create?: XOR<UserCreateWithoutWorksInput, UserUncheckedCreateWithoutWorksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorksInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodeCreateNestedManyWithoutWorkInput = {
    create?: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput> | EpisodeCreateWithoutWorkInput[] | EpisodeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutWorkInput | EpisodeCreateOrConnectWithoutWorkInput[]
    createMany?: EpisodeCreateManyWorkInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WateringEventCreateNestedManyWithoutWorkInput = {
    create?: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput> | WateringEventCreateWithoutWorkInput[] | WateringEventUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutWorkInput | WateringEventCreateOrConnectWithoutWorkInput[]
    createMany?: WateringEventCreateManyWorkInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type AiContextCreateNestedOneWithoutWorkInput = {
    create?: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
    connectOrCreate?: AiContextCreateOrConnectWithoutWorkInput
    connect?: AiContextWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput> | EpisodeCreateWithoutWorkInput[] | EpisodeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutWorkInput | EpisodeCreateOrConnectWithoutWorkInput[]
    createMany?: EpisodeCreateManyWorkInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WateringEventUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput> | WateringEventCreateWithoutWorkInput[] | WateringEventUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutWorkInput | WateringEventCreateOrConnectWithoutWorkInput[]
    createMany?: WateringEventCreateManyWorkInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type AiContextUncheckedCreateNestedOneWithoutWorkInput = {
    create?: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
    connectOrCreate?: AiContextCreateOrConnectWithoutWorkInput
    connect?: AiContextWhereUniqueInput
  }

  export type EnumFlowerStageFieldUpdateOperationsInput = {
    set?: $Enums.FlowerStage
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<UserCreateWithoutWorksInput, UserUncheckedCreateWithoutWorksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorksInput
    upsert?: UserUpsertWithoutWorksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorksInput, UserUpdateWithoutWorksInput>, UserUncheckedUpdateWithoutWorksInput>
  }

  export type EpisodeUpdateManyWithoutWorkNestedInput = {
    create?: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput> | EpisodeCreateWithoutWorkInput[] | EpisodeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutWorkInput | EpisodeCreateOrConnectWithoutWorkInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutWorkInput | EpisodeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: EpisodeCreateManyWorkInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutWorkInput | EpisodeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutWorkInput | EpisodeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WateringEventUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput> | WateringEventCreateWithoutWorkInput[] | WateringEventUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutWorkInput | WateringEventCreateOrConnectWithoutWorkInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutWorkInput | WateringEventUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WateringEventCreateManyWorkInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutWorkInput | WateringEventUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutWorkInput | WateringEventUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type AiContextUpdateOneWithoutWorkNestedInput = {
    create?: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
    connectOrCreate?: AiContextCreateOrConnectWithoutWorkInput
    upsert?: AiContextUpsertWithoutWorkInput
    disconnect?: AiContextWhereInput | boolean
    delete?: AiContextWhereInput | boolean
    connect?: AiContextWhereUniqueInput
    update?: XOR<XOR<AiContextUpdateToOneWithWhereWithoutWorkInput, AiContextUpdateWithoutWorkInput>, AiContextUncheckedUpdateWithoutWorkInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput> | EpisodeCreateWithoutWorkInput[] | EpisodeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutWorkInput | EpisodeCreateOrConnectWithoutWorkInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutWorkInput | EpisodeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: EpisodeCreateManyWorkInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutWorkInput | EpisodeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutWorkInput | EpisodeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WateringEventUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput> | WateringEventCreateWithoutWorkInput[] | WateringEventUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutWorkInput | WateringEventCreateOrConnectWithoutWorkInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutWorkInput | WateringEventUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WateringEventCreateManyWorkInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutWorkInput | WateringEventUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutWorkInput | WateringEventUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type AiContextUncheckedUpdateOneWithoutWorkNestedInput = {
    create?: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
    connectOrCreate?: AiContextCreateOrConnectWithoutWorkInput
    upsert?: AiContextUpsertWithoutWorkInput
    disconnect?: AiContextWhereInput | boolean
    delete?: AiContextWhereInput | boolean
    connect?: AiContextWhereUniqueInput
    update?: XOR<XOR<AiContextUpdateToOneWithWhereWithoutWorkInput, AiContextUpdateWithoutWorkInput>, AiContextUncheckedUpdateWithoutWorkInput>
  }

  export type EpisodeCreateimagesInput = {
    set: string[]
  }

  export type WorkCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<WorkCreateWithoutEpisodesInput, WorkUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutEpisodesInput
    connect?: WorkWhereUniqueInput
  }

  export type WateringEventCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput> | WateringEventCreateWithoutEpisodeInput[] | WateringEventUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutEpisodeInput | WateringEventCreateOrConnectWithoutEpisodeInput[]
    createMany?: WateringEventCreateManyEpisodeInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type WateringEventUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput> | WateringEventCreateWithoutEpisodeInput[] | WateringEventUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutEpisodeInput | WateringEventCreateOrConnectWithoutEpisodeInput[]
    createMany?: WateringEventCreateManyEpisodeInputEnvelope
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
  }

  export type EpisodeUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorkUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<WorkCreateWithoutEpisodesInput, WorkUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutEpisodesInput
    upsert?: WorkUpsertWithoutEpisodesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutEpisodesInput, WorkUpdateWithoutEpisodesInput>, WorkUncheckedUpdateWithoutEpisodesInput>
  }

  export type WateringEventUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput> | WateringEventCreateWithoutEpisodeInput[] | WateringEventUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutEpisodeInput | WateringEventCreateOrConnectWithoutEpisodeInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutEpisodeInput | WateringEventUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WateringEventCreateManyEpisodeInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutEpisodeInput | WateringEventUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutEpisodeInput | WateringEventUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type WateringEventUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput> | WateringEventCreateWithoutEpisodeInput[] | WateringEventUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WateringEventCreateOrConnectWithoutEpisodeInput | WateringEventCreateOrConnectWithoutEpisodeInput[]
    upsert?: WateringEventUpsertWithWhereUniqueWithoutEpisodeInput | WateringEventUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WateringEventCreateManyEpisodeInputEnvelope
    set?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    disconnect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    delete?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    connect?: WateringEventWhereUniqueInput | WateringEventWhereUniqueInput[]
    update?: WateringEventUpdateWithWhereUniqueWithoutEpisodeInput | WateringEventUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WateringEventUpdateManyWithWhereWithoutEpisodeInput | WateringEventUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutWateringsInput = {
    create?: XOR<WorkCreateWithoutWateringsInput, WorkUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWateringsInput
    connect?: WorkWhereUniqueInput
  }

  export type EpisodeCreateNestedOneWithoutWateringsInput = {
    create?: XOR<EpisodeCreateWithoutWateringsInput, EpisodeUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWateringsInput
    connect?: EpisodeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWateringsInput = {
    create?: XOR<UserCreateWithoutWateringsInput, UserUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWateringsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumEmotionTagFieldUpdateOperationsInput = {
    set?: $Enums.EmotionTag | null
  }

  export type WorkUpdateOneRequiredWithoutWateringsNestedInput = {
    create?: XOR<WorkCreateWithoutWateringsInput, WorkUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWateringsInput
    upsert?: WorkUpsertWithoutWateringsInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutWateringsInput, WorkUpdateWithoutWateringsInput>, WorkUncheckedUpdateWithoutWateringsInput>
  }

  export type EpisodeUpdateOneRequiredWithoutWateringsNestedInput = {
    create?: XOR<EpisodeCreateWithoutWateringsInput, EpisodeUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWateringsInput
    upsert?: EpisodeUpsertWithoutWateringsInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutWateringsInput, EpisodeUpdateWithoutWateringsInput>, EpisodeUncheckedUpdateWithoutWateringsInput>
  }

  export type UserUpdateOneRequiredWithoutWateringsNestedInput = {
    create?: XOR<UserCreateWithoutWateringsInput, UserUncheckedCreateWithoutWateringsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWateringsInput
    upsert?: UserUpsertWithoutWateringsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWateringsInput, UserUpdateWithoutWateringsInput>, UserUncheckedUpdateWithoutWateringsInput>
  }

  export type WorkCreateNestedOneWithoutAiContextInput = {
    create?: XOR<WorkCreateWithoutAiContextInput, WorkUncheckedCreateWithoutAiContextInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAiContextInput
    connect?: WorkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAiContextsInput = {
    create?: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiContextsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutAiContextNestedInput = {
    create?: XOR<WorkCreateWithoutAiContextInput, WorkUncheckedCreateWithoutAiContextInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAiContextInput
    upsert?: WorkUpsertWithoutAiContextInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutAiContextInput, WorkUpdateWithoutAiContextInput>, WorkUncheckedUpdateWithoutAiContextInput>
  }

  export type UserUpdateOneRequiredWithoutAiContextsNestedInput = {
    create?: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiContextsInput
    upsert?: UserUpsertWithoutAiContextsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiContextsInput, UserUpdateWithoutAiContextsInput>, UserUncheckedUpdateWithoutAiContextsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenreNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenreNullableFilter<$PrismaModel> | $Enums.Genre | null
  }

  export type NestedEnumPersonaFilter<$PrismaModel = never> = {
    equals?: $Enums.Persona | EnumPersonaFieldRefInput<$PrismaModel>
    in?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonaFilter<$PrismaModel> | $Enums.Persona
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGenreNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenreNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genre | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenreNullableFilter<$PrismaModel>
    _max?: NestedEnumGenreNullableFilter<$PrismaModel>
  }

  export type NestedEnumPersonaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Persona | EnumPersonaFieldRefInput<$PrismaModel>
    in?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Persona[] | ListEnumPersonaFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonaWithAggregatesFilter<$PrismaModel> | $Enums.Persona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonaFilter<$PrismaModel>
    _max?: NestedEnumPersonaFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFlowerStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowerStage | EnumFlowerStageFieldRefInput<$PrismaModel>
    in?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowerStageFilter<$PrismaModel> | $Enums.FlowerStage
  }

  export type NestedEnumFlowerStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowerStage | EnumFlowerStageFieldRefInput<$PrismaModel>
    in?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlowerStage[] | ListEnumFlowerStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFlowerStageWithAggregatesFilter<$PrismaModel> | $Enums.FlowerStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowerStageFilter<$PrismaModel>
    _max?: NestedEnumFlowerStageFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEmotionTagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionTag | EnumEmotionTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionTagNullableFilter<$PrismaModel> | $Enums.EmotionTag | null
  }

  export type NestedEnumEmotionTagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmotionTag | EnumEmotionTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmotionTag[] | ListEnumEmotionTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmotionTagNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmotionTag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmotionTagNullableFilter<$PrismaModel>
    _max?: NestedEnumEmotionTagNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type UserCreateWithoutInviteCodeInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutInviteCodeInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutInviteCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviteCodeInput, UserUncheckedCreateWithoutInviteCodeInput>
  }

  export type UserUpsertWithoutInviteCodeInput = {
    update: XOR<UserUpdateWithoutInviteCodeInput, UserUncheckedUpdateWithoutInviteCodeInput>
    create: XOR<UserCreateWithoutInviteCodeInput, UserUncheckedCreateWithoutInviteCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInviteCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInviteCodeInput, UserUncheckedUpdateWithoutInviteCodeInput>
  }

  export type UserUpdateWithoutInviteCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutInviteCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InviteCodeCreateWithoutUsedByInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type InviteCodeUncheckedCreateWithoutUsedByInput = {
    id?: string
    code: string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type InviteCodeCreateOrConnectWithoutUsedByInput = {
    where: InviteCodeWhereUniqueInput
    create: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
  }

  export type WorkCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutWorkInput
    waterings?: WateringEventCreateNestedManyWithoutWorkInput
    aiContext?: AiContextCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutWorkInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutWorkInput
    aiContext?: AiContextUncheckedCreateNestedOneWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput>
  }

  export type WorkCreateManyAuthorInputEnvelope = {
    data: WorkCreateManyAuthorInput | WorkCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AiContextCreateWithoutUserInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutAiContextInput
  }

  export type AiContextUncheckedCreateWithoutUserInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    workId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiContextCreateOrConnectWithoutUserInput = {
    where: AiContextWhereUniqueInput
    create: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput>
  }

  export type AiContextCreateManyUserInputEnvelope = {
    data: AiContextCreateManyUserInput | AiContextCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WateringEventCreateWithoutReaderInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    createdAt?: Date | string
    work: WorkCreateNestedOneWithoutWateringsInput
    episode: EpisodeCreateNestedOneWithoutWateringsInput
  }

  export type WateringEventUncheckedCreateWithoutReaderInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    episodeId: string
    createdAt?: Date | string
  }

  export type WateringEventCreateOrConnectWithoutReaderInput = {
    where: WateringEventWhereUniqueInput
    create: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput>
  }

  export type WateringEventCreateManyReaderInputEnvelope = {
    data: WateringEventCreateManyReaderInput | WateringEventCreateManyReaderInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type InviteCodeUpsertWithoutUsedByInput = {
    update: XOR<InviteCodeUpdateWithoutUsedByInput, InviteCodeUncheckedUpdateWithoutUsedByInput>
    create: XOR<InviteCodeCreateWithoutUsedByInput, InviteCodeUncheckedCreateWithoutUsedByInput>
    where?: InviteCodeWhereInput
  }

  export type InviteCodeUpdateToOneWithWhereWithoutUsedByInput = {
    where?: InviteCodeWhereInput
    data: XOR<InviteCodeUpdateWithoutUsedByInput, InviteCodeUncheckedUpdateWithoutUsedByInput>
  }

  export type InviteCodeUpdateWithoutUsedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateWithoutUsedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUpsertWithWhereUniqueWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutAuthorInput, WorkUncheckedUpdateWithoutAuthorInput>
    create: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutAuthorInput, WorkUncheckedUpdateWithoutAuthorInput>
  }

  export type WorkUpdateManyWithWhereWithoutAuthorInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutAuthorInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: StringFilter<"Work"> | string
    title?: StringFilter<"Work"> | string
    description?: StringNullableFilter<"Work"> | string | null
    coverImage?: StringNullableFilter<"Work"> | string | null
    isPublished?: BoolFilter<"Work"> | boolean
    isCompleted?: BoolFilter<"Work"> | boolean
    flowerStage?: EnumFlowerStageFilter<"Work"> | $Enums.FlowerStage
    waterCount?: IntFilter<"Work"> | number
    authorId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
  }

  export type AiContextUpsertWithWhereUniqueWithoutUserInput = {
    where: AiContextWhereUniqueInput
    update: XOR<AiContextUpdateWithoutUserInput, AiContextUncheckedUpdateWithoutUserInput>
    create: XOR<AiContextCreateWithoutUserInput, AiContextUncheckedCreateWithoutUserInput>
  }

  export type AiContextUpdateWithWhereUniqueWithoutUserInput = {
    where: AiContextWhereUniqueInput
    data: XOR<AiContextUpdateWithoutUserInput, AiContextUncheckedUpdateWithoutUserInput>
  }

  export type AiContextUpdateManyWithWhereWithoutUserInput = {
    where: AiContextScalarWhereInput
    data: XOR<AiContextUpdateManyMutationInput, AiContextUncheckedUpdateManyWithoutUserInput>
  }

  export type AiContextScalarWhereInput = {
    AND?: AiContextScalarWhereInput | AiContextScalarWhereInput[]
    OR?: AiContextScalarWhereInput[]
    NOT?: AiContextScalarWhereInput | AiContextScalarWhereInput[]
    id?: StringFilter<"AiContext"> | string
    characters?: JsonFilter<"AiContext">
    storySettings?: JsonFilter<"AiContext">
    writingNotes?: StringNullableFilter<"AiContext"> | string | null
    workId?: StringFilter<"AiContext"> | string
    userId?: StringFilter<"AiContext"> | string
    createdAt?: DateTimeFilter<"AiContext"> | Date | string
    updatedAt?: DateTimeFilter<"AiContext"> | Date | string
  }

  export type WateringEventUpsertWithWhereUniqueWithoutReaderInput = {
    where: WateringEventWhereUniqueInput
    update: XOR<WateringEventUpdateWithoutReaderInput, WateringEventUncheckedUpdateWithoutReaderInput>
    create: XOR<WateringEventCreateWithoutReaderInput, WateringEventUncheckedCreateWithoutReaderInput>
  }

  export type WateringEventUpdateWithWhereUniqueWithoutReaderInput = {
    where: WateringEventWhereUniqueInput
    data: XOR<WateringEventUpdateWithoutReaderInput, WateringEventUncheckedUpdateWithoutReaderInput>
  }

  export type WateringEventUpdateManyWithWhereWithoutReaderInput = {
    where: WateringEventScalarWhereInput
    data: XOR<WateringEventUpdateManyMutationInput, WateringEventUncheckedUpdateManyWithoutReaderInput>
  }

  export type WateringEventScalarWhereInput = {
    AND?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
    OR?: WateringEventScalarWhereInput[]
    NOT?: WateringEventScalarWhereInput | WateringEventScalarWhereInput[]
    id?: StringFilter<"WateringEvent"> | string
    emotionTag?: EnumEmotionTagNullableFilter<"WateringEvent"> | $Enums.EmotionTag | null
    comment?: StringNullableFilter<"WateringEvent"> | string | null
    workId?: StringFilter<"WateringEvent"> | string
    episodeId?: StringFilter<"WateringEvent"> | string
    readerId?: StringFilter<"WateringEvent"> | string
    createdAt?: DateTimeFilter<"WateringEvent"> | Date | string
  }

  export type UserCreateWithoutWorksInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutWorksInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutWorksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorksInput, UserUncheckedCreateWithoutWorksInput>
  }

  export type EpisodeCreateWithoutWorkInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    waterings?: WateringEventCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutWorkInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    waterings?: WateringEventUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutWorkInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput>
  }

  export type EpisodeCreateManyWorkInputEnvelope = {
    data: EpisodeCreateManyWorkInput | EpisodeCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WateringEventCreateWithoutWorkInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    createdAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutWateringsInput
    reader: UserCreateNestedOneWithoutWateringsInput
  }

  export type WateringEventUncheckedCreateWithoutWorkInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    episodeId: string
    readerId: string
    createdAt?: Date | string
  }

  export type WateringEventCreateOrConnectWithoutWorkInput = {
    where: WateringEventWhereUniqueInput
    create: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput>
  }

  export type WateringEventCreateManyWorkInputEnvelope = {
    data: WateringEventCreateManyWorkInput | WateringEventCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type AiContextCreateWithoutWorkInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAiContextsInput
  }

  export type AiContextUncheckedCreateWithoutWorkInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiContextCreateOrConnectWithoutWorkInput = {
    where: AiContextWhereUniqueInput
    create: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
  }

  export type UserUpsertWithoutWorksInput = {
    update: XOR<UserUpdateWithoutWorksInput, UserUncheckedUpdateWithoutWorksInput>
    create: XOR<UserCreateWithoutWorksInput, UserUncheckedCreateWithoutWorksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorksInput, UserUncheckedUpdateWithoutWorksInput>
  }

  export type UserUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type EpisodeUpsertWithWhereUniqueWithoutWorkInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutWorkInput, EpisodeUncheckedUpdateWithoutWorkInput>
    create: XOR<EpisodeCreateWithoutWorkInput, EpisodeUncheckedCreateWithoutWorkInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutWorkInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutWorkInput, EpisodeUncheckedUpdateWithoutWorkInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutWorkInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutWorkInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    content?: StringNullableFilter<"Episode"> | string | null
    images?: StringNullableListFilter<"Episode">
    episodeNum?: IntFilter<"Episode"> | number
    isPublished?: BoolFilter<"Episode"> | boolean
    workId?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type WateringEventUpsertWithWhereUniqueWithoutWorkInput = {
    where: WateringEventWhereUniqueInput
    update: XOR<WateringEventUpdateWithoutWorkInput, WateringEventUncheckedUpdateWithoutWorkInput>
    create: XOR<WateringEventCreateWithoutWorkInput, WateringEventUncheckedCreateWithoutWorkInput>
  }

  export type WateringEventUpdateWithWhereUniqueWithoutWorkInput = {
    where: WateringEventWhereUniqueInput
    data: XOR<WateringEventUpdateWithoutWorkInput, WateringEventUncheckedUpdateWithoutWorkInput>
  }

  export type WateringEventUpdateManyWithWhereWithoutWorkInput = {
    where: WateringEventScalarWhereInput
    data: XOR<WateringEventUpdateManyMutationInput, WateringEventUncheckedUpdateManyWithoutWorkInput>
  }

  export type AiContextUpsertWithoutWorkInput = {
    update: XOR<AiContextUpdateWithoutWorkInput, AiContextUncheckedUpdateWithoutWorkInput>
    create: XOR<AiContextCreateWithoutWorkInput, AiContextUncheckedCreateWithoutWorkInput>
    where?: AiContextWhereInput
  }

  export type AiContextUpdateToOneWithWhereWithoutWorkInput = {
    where?: AiContextWhereInput
    data: XOR<AiContextUpdateWithoutWorkInput, AiContextUncheckedUpdateWithoutWorkInput>
  }

  export type AiContextUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiContextsNestedInput
  }

  export type AiContextUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateWithoutEpisodesInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutWorksInput
    waterings?: WateringEventCreateNestedManyWithoutWorkInput
    aiContext?: AiContextCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutEpisodesInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    waterings?: WateringEventUncheckedCreateNestedManyWithoutWorkInput
    aiContext?: AiContextUncheckedCreateNestedOneWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutEpisodesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutEpisodesInput, WorkUncheckedCreateWithoutEpisodesInput>
  }

  export type WateringEventCreateWithoutEpisodeInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    createdAt?: Date | string
    work: WorkCreateNestedOneWithoutWateringsInput
    reader: UserCreateNestedOneWithoutWateringsInput
  }

  export type WateringEventUncheckedCreateWithoutEpisodeInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    readerId: string
    createdAt?: Date | string
  }

  export type WateringEventCreateOrConnectWithoutEpisodeInput = {
    where: WateringEventWhereUniqueInput
    create: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput>
  }

  export type WateringEventCreateManyEpisodeInputEnvelope = {
    data: WateringEventCreateManyEpisodeInput | WateringEventCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type WorkUpsertWithoutEpisodesInput = {
    update: XOR<WorkUpdateWithoutEpisodesInput, WorkUncheckedUpdateWithoutEpisodesInput>
    create: XOR<WorkCreateWithoutEpisodesInput, WorkUncheckedCreateWithoutEpisodesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutEpisodesInput, WorkUncheckedUpdateWithoutEpisodesInput>
  }

  export type WorkUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutWorksNestedInput
    waterings?: WateringEventUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterings?: WateringEventUncheckedUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUncheckedUpdateOneWithoutWorkNestedInput
  }

  export type WateringEventUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: WateringEventWhereUniqueInput
    update: XOR<WateringEventUpdateWithoutEpisodeInput, WateringEventUncheckedUpdateWithoutEpisodeInput>
    create: XOR<WateringEventCreateWithoutEpisodeInput, WateringEventUncheckedCreateWithoutEpisodeInput>
  }

  export type WateringEventUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: WateringEventWhereUniqueInput
    data: XOR<WateringEventUpdateWithoutEpisodeInput, WateringEventUncheckedUpdateWithoutEpisodeInput>
  }

  export type WateringEventUpdateManyWithWhereWithoutEpisodeInput = {
    where: WateringEventScalarWhereInput
    data: XOR<WateringEventUpdateManyMutationInput, WateringEventUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type WorkCreateWithoutWateringsInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutWorksInput
    episodes?: EpisodeCreateNestedManyWithoutWorkInput
    aiContext?: AiContextCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWateringsInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutWorkInput
    aiContext?: AiContextUncheckedCreateNestedOneWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutWateringsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWateringsInput, WorkUncheckedCreateWithoutWateringsInput>
  }

  export type EpisodeCreateWithoutWateringsInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutWateringsInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    workId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutWateringsInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutWateringsInput, EpisodeUncheckedCreateWithoutWateringsInput>
  }

  export type UserCreateWithoutWateringsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWateringsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    aiContexts?: AiContextUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWateringsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWateringsInput, UserUncheckedCreateWithoutWateringsInput>
  }

  export type WorkUpsertWithoutWateringsInput = {
    update: XOR<WorkUpdateWithoutWateringsInput, WorkUncheckedUpdateWithoutWateringsInput>
    create: XOR<WorkCreateWithoutWateringsInput, WorkUncheckedCreateWithoutWateringsInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutWateringsInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutWateringsInput, WorkUncheckedUpdateWithoutWateringsInput>
  }

  export type WorkUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutWorksNestedInput
    episodes?: EpisodeUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUncheckedUpdateOneWithoutWorkNestedInput
  }

  export type EpisodeUpsertWithoutWateringsInput = {
    update: XOR<EpisodeUpdateWithoutWateringsInput, EpisodeUncheckedUpdateWithoutWateringsInput>
    create: XOR<EpisodeCreateWithoutWateringsInput, EpisodeUncheckedCreateWithoutWateringsInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutWateringsInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutWateringsInput, EpisodeUncheckedUpdateWithoutWateringsInput>
  }

  export type EpisodeUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutWateringsInput = {
    update: XOR<UserUpdateWithoutWateringsInput, UserUncheckedUpdateWithoutWateringsInput>
    create: XOR<UserCreateWithoutWateringsInput, UserUncheckedCreateWithoutWateringsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWateringsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWateringsInput, UserUncheckedUpdateWithoutWateringsInput>
  }

  export type UserUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWateringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    aiContexts?: AiContextUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkCreateWithoutAiContextInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutWorksInput
    episodes?: EpisodeCreateNestedManyWithoutWorkInput
    waterings?: WateringEventCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAiContextInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutWorkInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAiContextInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAiContextInput, WorkUncheckedCreateWithoutAiContextInput>
  }

  export type UserCreateWithoutAiContextsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeCreateNestedOneWithoutUsedByInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    waterings?: WateringEventCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutAiContextsInput = {
    id?: string
    email: string
    passwordHash: string
    nickname?: string | null
    genre?: $Enums.Genre | null
    creativeStyle?: string | null
    persona?: $Enums.Persona
    onboardingDone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    inviteCode?: InviteCodeUncheckedCreateNestedOneWithoutUsedByInput
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    waterings?: WateringEventUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutAiContextsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
  }

  export type WorkUpsertWithoutAiContextInput = {
    update: XOR<WorkUpdateWithoutAiContextInput, WorkUncheckedUpdateWithoutAiContextInput>
    create: XOR<WorkCreateWithoutAiContextInput, WorkUncheckedCreateWithoutAiContextInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutAiContextInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutAiContextInput, WorkUncheckedUpdateWithoutAiContextInput>
  }

  export type WorkUpdateWithoutAiContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutWorksNestedInput
    episodes?: EpisodeUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAiContextInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type UserUpsertWithoutAiContextsInput = {
    update: XOR<UserUpdateWithoutAiContextsInput, UserUncheckedUpdateWithoutAiContextsInput>
    create: XOR<UserCreateWithoutAiContextsInput, UserUncheckedCreateWithoutAiContextsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiContextsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiContextsInput, UserUncheckedUpdateWithoutAiContextsInput>
  }

  export type UserUpdateWithoutAiContextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUpdateOneWithoutUsedByNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    waterings?: WateringEventUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutAiContextsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableEnumGenreFieldUpdateOperationsInput | $Enums.Genre | null
    creativeStyle?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: EnumPersonaFieldUpdateOperationsInput | $Enums.Persona
    onboardingDone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    inviteCode?: InviteCodeUncheckedUpdateOneWithoutUsedByNestedInput
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type WorkCreateManyAuthorInput = {
    id?: string
    title: string
    description?: string | null
    coverImage?: string | null
    isPublished?: boolean
    isCompleted?: boolean
    flowerStage?: $Enums.FlowerStage
    waterCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiContextCreateManyUserInput = {
    id?: string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: string | null
    workId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WateringEventCreateManyReaderInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    episodeId: string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutWorkNestedInput
    waterings?: WateringEventUncheckedUpdateManyWithoutWorkNestedInput
    aiContext?: AiContextUncheckedUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    flowerStage?: EnumFlowerStageFieldUpdateOperationsInput | $Enums.FlowerStage
    waterCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiContextUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutAiContextNestedInput
  }

  export type AiContextUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiContextUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    characters?: JsonNullValueInput | InputJsonValue
    storySettings?: JsonNullValueInput | InputJsonValue
    writingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUpdateWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWateringsNestedInput
    episode?: EpisodeUpdateOneRequiredWithoutWateringsNestedInput
  }

  export type WateringEventUncheckedUpdateWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUncheckedUpdateManyWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyWorkInput = {
    id?: string
    title: string
    content?: string | null
    images?: EpisodeCreateimagesInput | string[]
    episodeNum: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WateringEventCreateManyWorkInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    episodeId: string
    readerId: string
    createdAt?: Date | string
  }

  export type EpisodeUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterings?: WateringEventUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterings?: WateringEventUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EpisodeUpdateimagesInput | string[]
    episodeNum?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutWateringsNestedInput
    reader?: UserUpdateOneRequiredWithoutWateringsNestedInput
  }

  export type WateringEventUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    episodeId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    episodeId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventCreateManyEpisodeInput = {
    id?: string
    emotionTag?: $Enums.EmotionTag | null
    comment?: string | null
    workId: string
    readerId: string
    createdAt?: Date | string
  }

  export type WateringEventUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWateringsNestedInput
    reader?: UserUpdateOneRequiredWithoutWateringsNestedInput
  }

  export type WateringEventUncheckedUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WateringEventUncheckedUpdateManyWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotionTag?: NullableEnumEmotionTagFieldUpdateOperationsInput | $Enums.EmotionTag | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    readerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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