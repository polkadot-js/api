// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJson, BareOpts, Codec, IHash, Registry } from '../types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import Raw from './Raw';

/**
 * @name Base
 * @description A type extends the Base class, when it holds a value
 */
export default abstract class Base<T extends Codec> implements Codec {
  public readonly registry: Registry;

  protected raw: T;

  protected constructor (registry: Registry, value?: any) {
    this.registry = registry;
    this.raw = value;
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
  public get hash (): IHash {
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.raw.isEmpty;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this.raw.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (isLe?: boolean): string {
    return this.raw.toHex(isLe);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.raw.toJSON();
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: BareOpts): Uint8Array {
    return this.raw.toU8a(isBare);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Base';
  }
}
