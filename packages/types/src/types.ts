// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

export type AnyNumber = BN | Uint8Array | number | string;

export type AnyString = string | String;

export type AnyU8a = Uint8Array | Array<number> | string;

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
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean;

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string;

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any;

  /**
   * @description Returns the string representation of the value
   */
  toString (): string;

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a';

export type Constructor<T = Codec> = { new(value?: any): T };

export type ConstructorDef<T = Codec> = { [index: string]: Constructor<T> };

export type TypeDef = { [index: string]: Codec };
