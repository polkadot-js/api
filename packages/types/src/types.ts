// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SignOptions } from '@polkadot/keyring/types';
import { FunctionMetadataLatest } from './interfaces/metadata';
import { Address, Balance, Call, EcdsaSignature, Ed25519Signature, Index, Sr25519Signature } from './interfaces/runtime';

import BN from 'bn.js';

import { InterfaceRegistry } from './interfaceRegistry';
import { Signer } from '@polkadot/api/types';

export * from './codec/types';

// helper to xtract keys from an array
export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type BareOpts = boolean | Record<string, boolean>;

export type InterfaceTypes = keyof InterfaceRegistry;

export interface CallBase {
  callIndex: Uint8Array;
  meta: FunctionMetadataLatest;
  method: string;
  section: string;
  toJSON: () => any;
}

export interface CallFunction extends CallBase {
  (...args: any[]): Call;
}

export type Calls = Record<string, CallFunction>;

export type ModulesWithCalls = Record<string, Calls>;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IKeyringPair {
  address: string;
  publicKey: Uint8Array;
  sign: (data: Uint8Array, options?: SignOptions) => Uint8Array;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CodecArgArray extends Array<CodecArg> {}
export type CodecArg = Codec | BN | boolean | string | Uint8Array | boolean | number | string | undefined | CodecArgArray | CodecArgObject;

export type Callback<T> = (result: T) => void | Promise<void>;

interface CodecArgObject {
  [index: string]: CodecArg;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

export type AnyNumber = BN | Uint8Array | number | string;

export type AnyString = string | string;

export type AnyU8a = Uint8Array | number[] | string;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnyJsonObject extends Record<string, AnyJson> {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnyJsonArray extends Array<AnyJson> {}
export type AnyJson = string | number | boolean | null | undefined | AnyJsonObject | AnyJsonArray;

/**
 * @name Codec
 * @description
 * The base Codec interface. All types implement the interface provided here. Additionally
 * implementors can add their own specific interfaces and helpers with getters and functions.
 * The Codec Base is however required for operating as an encoding/decoding layer
 */
export interface Codec {
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  readonly encodedLength: number;

  /**
   * @description Returns a hash of the value
   */
  readonly hash: IHash;

  /**
   * @description Checks if the value is an empty value
   */
  readonly isEmpty: boolean;

  /**
   * @description The registry associated with this object
   */
  readonly registry: Registry;

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean;

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex (isLe?: boolean): string;

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): AnyJson;

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string;

  /**
   * @description Returns the string representation of the value
   */
  toString (): string;

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: BareOpts): Uint8Array;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IU8a extends Uint8Array, Codec {
  bitLength (): number;
  toJSON (): any;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix,@typescript-eslint/no-empty-interface
export interface IHash extends IU8a { }

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ICompact<T> extends Codec {
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a';

export interface Constructor<T = Codec> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new(registry: Registry, ...value: any[]): T;
}

export type ConstructorDef<T = Codec> = Record<string, Constructor<T>>;

export type RegistryTypes = Record<string, Constructor | string | Record<string, string> | { _enum: string[] | Record<string, string | null> } | { _set: Record<string, number> }>;

export interface RuntimeVersionInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly apis: any[];
  readonly authoringVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly implName: String;
  readonly implVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly specName: String;
  readonly specVersion: BN;
}

export interface SignatureOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra;
  genesisHash: AnyU8a;
  nonce: AnyNumber;
  runtimeVersion: RuntimeVersionInterface;
  signer?: Signer;
  tip?: AnyNumber;
}

export type ArgsDef = Record<string, Constructor>;

// A type alias for [Type1, Type2] & Codec, representing a tuple (Type1, Type2)
// FIXME Implement this generic <Sub> on Tuple.ts itself.
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export type ITuple<Sub extends Codec[]> = Sub & Codec

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IMethod extends Codec {
  readonly args: Codec[];
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly hash: IHash;
  readonly hasOrigin: boolean;
  readonly meta: FunctionMetadataLatest;
}

interface ExtrinsicSignatureBase {
  readonly isSigned: boolean;
  readonly era: IExtrinsicEra;
  readonly nonce: ICompact<Index>;
  readonly signature: EcdsaSignature | Ed25519Signature | Sr25519Signature;
  readonly signer: Address;
  readonly tip: ICompact<Balance>;
}

export interface ExtrinsicPayloadValue {
  blockHash: AnyU8a;
  era: AnyU8a | IExtrinsicEra;
  genesisHash: AnyU8a;
  method: AnyU8a | IMethod;
  nonce: AnyNumber;
  specVersion: AnyNumber;
  tip: AnyNumber;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicSignature extends ExtrinsicSignatureBase, Codec {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: Uint8Array | string): IExtrinsicSignature;
  sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature;
  signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicEra extends Codec {
  asImmortalEra: Codec;
  asMortalEra: Codec;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IExtrinsicSignable<T> {
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): T;
  sign (account: IKeyringPair, options: SignatureOptions): T;
  signFake (address: Address | Uint8Array | string, options: SignatureOptions): T;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsicImpl extends IExtrinsicSignable<IExtrinsicImpl>, Codec {
  readonly method: Call;
  readonly signature: IExtrinsicSignature;
  readonly version: number;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IExtrinsic extends IExtrinsicSignable<IExtrinsic>, ExtrinsicSignatureBase, IMethod {
  readonly length: number;
  readonly method: Call;
  readonly type: number;
  readonly version: number;
}

export interface SignerPayloadJSON {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The checkpoint hash of the block, in hex
   */
  blockHash: string;

  /**
   * @description The checkpoint block number, in hex
   */
  blockNumber: string;

  /**
   * @description The era for this transaction, in hex
   */
  era: string;

  /**
   * @description The genesis hash of the chain, in hex
   */
  genesisHash: string;

  /**
   * @description The encoded method (with arguments) in hex
   */
  method: string;

  /**
   * @description The nonce for this transaction, in hex
   */
  nonce: string;

  /**
   * @description The current spec version for  the runtime
   */
  specVersion: string;

  /**
   * @description The tip for this transaction, in hex
   */
  tip: string;

  /**
   * @description The version of the extrinsic we are dealing with
   */
  version: number;
}

export interface SignerPayloadRawBase {
  /**
   * @description The hex-encoded data for this request
   */
  data: string;

  /**
   * @description The type of the contained data
   */
  type?: 'bytes' | 'payload';
}

export interface SignerPayloadRaw extends SignerPayloadRawBase {
  /**
   * @description The ss-58 encoded address
   */
  address: string;

  /**
   * @description The type of the contained data
   */
  type: 'bytes' | 'payload';
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISignerPayload {
  toPayload (): SignerPayloadJSON;
  toRaw (): SignerPayloadRaw;
}

export interface RegistryMetadataText extends String, Codec {
  setOverride (override: string): void;
}

export interface RegistryMetadataCallArg {
  name: RegistryMetadataText;
  type: RegistryMetadataText;
}

export interface RegistryMetadataCall {
  args: RegistryMetadataCallArg[];
  name: RegistryMetadataText;

  toJSON (): string | AnyJsonObject;
}

export interface RegistryMetadataCalls {
  isSome: boolean;
  unwrap (): RegistryMetadataCall[];
}

export interface RegistryError {
  documentation: string[];
  index: number;
  name: string;
  section: string;
}

export interface RegistryMetadataError {
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: String;
  // eslint-disable-next-line @typescript-eslint/ban-types
  documentation: String[];
}

export type RegistryMetadataErrors = RegistryMetadataError[];

export interface RegistryMetadataEvent {
  args: any[];
  name: RegistryMetadataText;
}

export interface RegistryMetadataEvents {
  isSome: boolean;
  unwrap (): RegistryMetadataEvent[];
}

export interface RegistryMetadataExtrinsic {
  version: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  signedExtensions: String[];
}

export interface RegistryMetadataModule {
  calls: RegistryMetadataCalls;
  errors: RegistryMetadataErrors;
  events: RegistryMetadataEvents;
  name: RegistryMetadataText;
}

export interface RegistryMetadataLatest {
  modules: RegistryMetadataModule[];
  extrinsic: RegistryMetadataExtrinsic;
}

export interface RegistryMetadata {
  asLatest: RegistryMetadataLatest;
}

export interface Registry {
  findMetaCall (callIndex: Uint8Array): CallFunction;
  findMetaError (errorIndex: Uint8Array): any;
  // due to same circular imports where types don't really want to import from EventData,
  // keep this as a generic Codec, however the actual impl. returns the correct
  findMetaEvent (eventIndex: Uint8Array): Constructor<any>;

  get <T extends Codec = Codec> (name: string): Constructor<T> | undefined;
  getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T>;
  getSignedExtensionExtra (): Record<string, InterfaceTypes>;
  getSignedExtensionTypes (): Record<string, InterfaceTypes>;
  hasClass (name: string): boolean;
  hasDef (name: string): boolean;
  hasType (name: string): boolean;
  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void;
  setMetadata (metadata: RegistryMetadata): void;
}
