// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InterfaceTypes } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { Hash } from '../interfaces/runtime';
import type { Registry } from './registry';

export type AnyJson = string | number | boolean | null | undefined | AnyJson[] | { [index: string]: AnyJson };

export type AnyFunction = (...args: any[]) => any;

export type AnyNumber = BN | bigint | Uint8Array | number | string;

export type AnyString = string | string;

export type AnyTuple = Codec[];

export type AnyU8a = Uint8Array | number[] | string;

// helper to extract keys from an array
export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type BareOpts = boolean | Record<string, boolean>;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;

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
  readonly hash: Hash;

  /**
   * @description The length of the initial encoded value (Only available when constructed from a Uint8Array)
   */
  readonly initialU8aLength?: number;

  /**
   * @description Checks if the value is an empty value
   */
  readonly isEmpty: boolean;

  /**
   * @description The registry associated with this object
   */
  readonly registry: Registry;

  /**
   * @description The block at which this value was retrieved/created (set to non-empty when retrieved from storage)
   */
  createdAtHash?: Hash;

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: unknown): boolean;

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex (isLe?: boolean): HexString;

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

export interface Constructor<T = Codec> {
  /**
   * @description An internal fallback type (previous generation) if encoding fails
   */
  readonly __fallbackType?: string;

  // NOTE: We need the any[] here, unknown[] does not work as expected
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new(registry: Registry, ...args: any[]): T;
}

export type ConstructorDef<T = Codec> = Record<string, Constructor<T>>;

export type ArgsDef = Record<string, Constructor | keyof InterfaceTypes>;
