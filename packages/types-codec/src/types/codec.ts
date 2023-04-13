// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, ToString } from './helpers.js';
import type { IU8a } from './interfaces.js';
import type { Registry } from './registry.js';

export type BareOpts = boolean | Record<string, boolean>;

export interface Inspect {
  inner?: Inspect[] | undefined;
  name?: string;
  outer?: Uint8Array[];
}

/**
 * @name Codec
 * @description
 * The base Codec interface. All types implement the interface provided here.
 * Additionally implementors can add their own specific interfaces and helpers
 * with getters and functions. The Codec Base is however required for operating
 * as an encoding/decoding layer
 */
export interface Codec {
  /**
   * @description
   * The block at which this value was retrieved/created (set to non-empty when
   * retrieved from storage)
   */
  createdAtHash?: IU8a | undefined;

  /**
   * @description
   * The length of the initial encoded value (Only available when the value was
   * constructed from a Uint8Array input)
   */
  initialU8aLength?: number | undefined;

  /**
   * @description
   * (internal usage) Indicates that the value was created via a fallback. This
   * is used when with data specified in the metadata when the storage entry is
   * empty.
   *
   * With metadata fallback values (available as defaults on most storage entries)
   * any empty storage item should erturn the default. (This is the same as the
   * implementation on the Substrate runtime)
   */
  isStorageFallback?: boolean;

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  readonly encodedLength: number;

  /**
   * @description Returns a hash of the value
   */
  readonly hash: IU8a;

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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect (isBare?: BareOpts): Inspect;

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
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive (): AnyJson;

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
   * @param isBare true when the value has none of the type-specific prefixes (internal use, only available on
   * some Codec types, specifically those that add encodings such as length of indexes)
   */
  toU8a (isBare?: BareOpts): Uint8Array;
}

export interface CodecClass<T = Codec> {
  /**
   * @description An internal fallback type (previous generation) if encoding fails
   */
  readonly __fallbackType?: string;

  // NOTE: We need the any[] here, unknown[] does not work as expected
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new(registry: Registry, ...args: any[]): T;
}

export interface CodecObject<T extends ToString> extends Codec {
  readonly $: T;

  valueOf (): T;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toPrimitive' | 'toString' | 'toU8a';

export type ArgsDef = Record<string, CodecClass | string>;
