// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, BareOpts, CodecObject, Inspect, IU8a, Registry, ToString } from '../types/index.js';

/**
 * @name Object
 * @description A type extends the Base class, when it holds a value
 */
export abstract class AbstractObject<T extends ToString> implements CodecObject<T> {
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength?: number | undefined;
  public isStorageFallback?: boolean;

  readonly $: T;

  protected constructor (registry: Registry, value: T, initialU8aLength?: number) {
    this.$ = value;
    this.initialU8aLength = initialU8aLength;
    this.registry = registry;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public abstract get isEmpty (): boolean;

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public abstract eq (other?: unknown): boolean;

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public abstract inspect (): Inspect;

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public abstract toHex (isLe?: boolean): HexString;

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public abstract toHuman (isExtended?: boolean, disableAscii?: boolean): AnyJson;

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public abstract toJSON (): AnyJson;

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public abstract toPrimitive (): AnyJson;

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.$.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public abstract toU8a (isBare?: BareOpts): Uint8Array;

  /**
   * @description Returns the base runtime type name for this instance
   */
  public abstract toRawType (): string;

  /**
   * @description Return the internal value (JS-aligned, same result as $)
   */
  public valueOf (): T {
    return this.$;
  }
}
