// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, Inspect, IU8a, IVec, Registry } from '../types';

import { compactToU8a, u8aConcatStrict, u8aToHex } from '@polkadot/util';

import { compareArray, warnGet } from '../utils';

/**
 * @name AbstractArray
 * @description
 * This manages codec arrays. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 * @noInheritDoc
 */
export abstract class AbstractArray<T extends Codec> extends Array<T> implements IVec<T> {
  public readonly registry: Registry;

  public $createdAtHash?: IU8a;
  public $initialU8aLength?: number;
  public $isStorageFallback?: boolean;

  /**
   * @description This ensures that operators such as clice, filter, map, etc. return
   * new Array instances (without this we need to apply overrides)
   */
  static get [Symbol.species] (): typeof Array {
    return Array;
  }

  protected constructor (registry: Registry, length: number) {
    super(length);

    this.registry = registry;
  }

  /** @deprecated Use $createdAtHash instead. This getter will be removed in a future version. */
  public get createdAtHash (): IU8a | undefined {
    return warnGet(this, 'createdAtHash');
  }

  /** @deprecated Use $initialU8aLength instead. This getter will be removed in a future version. */
  public get initialU8aLength (): number | undefined {
    return warnGet(this, 'initialU8aLength');
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    // We need to loop through all entries since they may have a variable length themselves,
    // e.g. when a Vec or Compact is contained withing, it has a variable length based on data
    let total = compactToU8a(this.length).length;

    for (let i = 0; i < this.length; i++) {
      total += this[i].encodedLength;
    }

    return total;
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
    return this.length === 0;
  }

  /**
   * @description The length of the value
   */
  public override get length (): number {
    // only included here since we ignore inherited docs
    return super.length;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareArray(this, other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspectU8a (): Inspect {
    return {
      inner: this.inspectInner(),
      outer: [compactToU8a(this.length)]
    };
  }

  public inspectInner (): Inspect[] {
    const inner = new Array<Inspect>(this.length);

    for (let i = 0; i < this.length; i++) {
      inner[i] = this[i].inspectU8a();
    }

    return inner;
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  public toArray (): T[] {
    return Array.from(this);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    const result = new Array<AnyJson>(this.length);

    for (let i = 0; i < this.length; i++) {
      result[i] = this[i] && this[i].toHuman(isExtended);
    }

    return result;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    const result = new Array<AnyJson>(this.length);

    for (let i = 0; i < this.length; i++) {
      // We actually log inside the U8a decoding and use JSON.stringify(...), which
      // means that the Vec may be partially populated (same applies to toHuman, same check)
      result[i] = this[i] && this[i].toJSON();
    }

    return result;
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): AnyJson {
    const result = new Array<AnyJson>(this.length);

    for (let i = 0; i < this.length; i++) {
      result[i] = this[i] && this[i].toPrimitive();
    }

    return result;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  abstract toRawType (): string;

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    const result = new Array<string>(this.length);

    for (let i = 0; i < this.length; i++) {
      result[i] = this[i].toString();
    }

    return `[${result.join(', ')}]`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.toU8aInner();

    return isBare
      ? u8aConcatStrict(encoded)
      : u8aConcatStrict([compactToU8a(this.length), ...encoded]);
  }

  public toU8aInner (isBare?: boolean): Uint8Array[] {
    const encoded = new Array<Uint8Array>(this.length);

    for (let i = 0; i < this.length; i++) {
      encoded[i] = this[i].toU8a(isBare);
    }

    return encoded;
  }
}
