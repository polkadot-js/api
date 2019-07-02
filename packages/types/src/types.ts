// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import U8a from './codec/U8a';
import { FunctionMetadata } from './Metadata/v6/Calls';
import Method from './primitive/Method';
import Address from './primitive/Address';

export type IKeyringPair = {
  address: string,
  publicKey: Uint8Array,
  sign: (data: Uint8Array) => Uint8Array;
};

interface CodecArgArray extends Array<CodecArg> { }
export type CodecArg = Codec | BN | Boolean | String | Uint8Array | boolean | number | string | undefined | CodecArgArray | CodecArgObject;

export type Callback<T> = (result: T) => void | Promise<void>;

interface CodecArgObject {
  [index: string]: CodecArg;
}

export type AnyFunction = (...args: any[]) => any;

export type AnyNumber = BN | Uint8Array | number | string;

export type AnyString = string | String;

export type AnyU8a = Uint8Array | Array<number> | string;

export type AnyJsonObject = { [key: string]: AnyJson };
export interface AnyJsonArray extends Array<AnyJson> { }
export type AnyJson = string | number | boolean | null | undefined | AnyJsonObject | AnyJsonArray;

/**
 * @name Codec
 * @description
 * The base Codec interface. All types implement the interface provided here. Additionally
 * implementors can add their own specific interfaces and helpres with getters and functions.
 * The Codec Base is however required for operating as an encoding/decoding layer
 */
export interface Codec {
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  encodedLength: number;

  /**
   * @description Checks if the value is an empty value
   */
  isEmpty: boolean;

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
  toU8a (isBare?: boolean): Uint8Array;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a';

export interface Constructor<T = Codec> {
  Fallback?: Constructor<T>;

  new(...value: Array<any>): T;
}

export type ConstructorDef<T = Codec> = { [index: string]: Constructor<T> };

export type TypeDef = { [index: string]: Codec };

export type RegistryTypes = {
  [name: string]: Constructor | string | { [name: string]: string }
};

export interface RuntimeVersionInterface {
  readonly apis: Array<any>;
  readonly authoringVersion: BN;
  readonly implName: String;
  readonly implVersion: BN;
  readonly specName: String;
  readonly specVersion: BN;
}

export type SignatureOptions = {
  blockHash: AnyU8a,
  era?: Uint8Array,
  nonce: AnyNumber,
  version?: RuntimeVersionInterface
};

export interface ArgsDef {
  [index: string]: Constructor;
}

export interface IHash extends U8a { }

export interface IMethod extends Codec {
  readonly args: Array<Codec>;
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly hasOrigin: boolean;
  readonly meta: FunctionMetadata;
}

export interface IExtrinsicSignature extends Codec {
  readonly isSigned: boolean;
  era: IExtrinsicEra;
}

export interface IExtrinsicEra {
  asImmortalEra: Codec;
  asMortalEra: Codec;
}

export interface IExtrinsic extends IMethod {
  hash: IHash;
  isSigned: boolean;
  method: Method;
  signature: IExtrinsicSignature;
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, nonce: AnyNumber, era?: Uint8Array): IExtrinsic;
  sign (account: IKeyringPair, options: SignatureOptions): IExtrinsic;
}
