// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { AnyJson, BareOpts } from './helpers';
import { Registry } from './registry';

import BN from 'bn.js';

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a';

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
  readonly hash: H256;

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
  eq (other?: unknown): boolean;

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex (isLe?: boolean): string;

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman (isExtended?: boolean): AnyJson;

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

// eslint-disable-next-line no-use-before-define
export type CodecArg = Codec | BN | boolean | string | Uint8Array | boolean | number | string | undefined | CodecArgArray | { [index: string]: CodecArg };

// We cannot inline this into CodecArg, TS throws up when building docs
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CodecArgArray extends Array<CodecArg> {}

export interface Constructor<T = Codec> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new(registry: Registry, ...value: any[]): T;
}

export type ConstructorDef<T = Codec> = Record<string, Constructor<T>>;

export type ArgsDef = Record<string, Constructor>;
