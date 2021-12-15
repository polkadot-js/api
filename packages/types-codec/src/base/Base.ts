// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, BareOpts, Codec, CodecRegistry, IU8a } from '../types';

/**
 * @name Base
 * @description A type extends the Base class, when it holds a value
 */
export abstract class Base<T extends Codec> implements Codec {
  public readonly registry: CodecRegistry;

  public createdAtHash?: IU8a;

  readonly initialU8aLength?: number;

  protected readonly _raw: T;

  protected constructor (registry: CodecRegistry, value: T, initialU8aLength?: number) {
    this.registry = registry;
    this._raw = value;
    this.initialU8aLength = initialU8aLength;
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
  public get isEmpty (): boolean {
    return this._raw.isEmpty;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return this._raw.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (isLe?: boolean): HexString {
    return this._raw.toHex(isLe);
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this._raw.toHuman(isExtended);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this._raw.toJSON();
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this._raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: BareOpts): Uint8Array {
    return this._raw.toU8a(isBare);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Base';
  }
}
