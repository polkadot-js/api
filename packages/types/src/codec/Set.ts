// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { H256 } from '../interfaces/runtime';
import { Codec, Constructor, Registry } from '../types';

import BN from 'bn.js';
import { assert, bnToBn, isU8a, isNumber, isString, isUndefined, stringCamelCase, stringUpperFirst, u8aToHex, isBn, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Raw from './Raw';
import { compareArray } from './utils';

type SetValues = Record<string, number | BN>;

/**
 * @name Set
 * @description
 * An Set is an array of string values, represented an an encoded type by
 * a bitwise representation of the values.
 */
// FIXME This is a prime candidate to extend the JavaScript built-in Set
export default class CodecSet extends Set<string> implements Codec {
  public readonly registry: Registry;

  protected _setValues: SetValues;

  constructor (registry: Registry, setValues: SetValues, value?: string[] | Set<string> | Uint8Array | BN | number | string) {
    super(CodecSet.decodeSet(setValues, value));

    this.registry = registry;
    this._setValues = setValues;
  }

  /** @internal */
  public static decodeSet (setValues: SetValues, value: string[] | Set<string> | Uint8Array | BN | number | string = 0): string[] {
    if (isString(value)) {
      return CodecSet.decodeSet(setValues, u8aToU8a(value));
    } else if (isU8a(value)) {
      return value.length === 0
        ? []
        : CodecSet.decodeSetNumber(setValues, value[0]);
    } else if (value instanceof Set) {
      return CodecSet.decodeSetArray(setValues, [...value.values()]);
    } else if (Array.isArray(value)) {
      return CodecSet.decodeSetArray(setValues, value);
    }

    return CodecSet.decodeSetNumber(setValues, value);
  }

  /** @internal */
  private static decodeSetArray (setValues: SetValues, value: string[]): string[] {
    return value.reduce((result, key): string[] => {
      assert(!isUndefined(setValues[key]), `Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);

      result.push(key);

      return result;
    }, [] as string[]);
  }

  /** @internal */
  private static decodeSetNumber (setValues: SetValues, _value: BN | number): string[] {
    const bn = bnToBn(_value);
    const result = Object.keys(setValues).reduce((result, key): string[] => {
      if (bn.and(bnToBn(setValues[key])).eq(bnToBn(setValues[key]))) {
        result.push(key);
      }

      return result;
    }, [] as string[]);

    const computed = CodecSet.encodeSet(setValues, result);

    assert(bn.eq(computed), `Set: Mismatch decoding '${bn}', computed as '${computed}' with ${result}`);

    return result;
  }

  public static encodeSet (setValues: SetValues, value: string[]): BN {
    return value.reduce((result, value): BN => {
      return result.or(bnToBn(setValues[value] || 0));
    }, new BN(0));
  }

  public static with (values: SetValues): Constructor<CodecSet> {
    return class extends CodecSet {
      constructor (registry: Registry, value?: any) {
        super(registry, values, value);

        Object.keys(values).forEach((_key): void => {
          const name = stringUpperFirst(stringCamelCase(_key));
          const iskey = `is${name}`;

          // do not clobber existing properties on the object
          if (isUndefined((this as any)[iskey])) {
            Object.defineProperty(this, iskey, {
              enumerable: true,
              get: (): boolean => this.strings.includes(_key)
            });
          }
        });
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 1;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
  }

  /**
   * @description true is the Set contains no values
   */
  public get isEmpty (): boolean {
    return this.size === 0;
  }

  /**
   * @description The actual set values as a string[]
   */
  public get strings (): string[] {
    return [...super.values()];
  }

  /**
   * @description The encoded value for the set members
   */
  public get valueEncoded (): BN {
    return CodecSet.encodeSet(this._setValues, this.strings);
  }

  /**
   * @description adds a value to the Set (extended to allow for validity checking)
   */
  public add (key: string): this {
    // we have the isUndefined(this._setValues) in here as well, add is used internally
    // in the Set constructor (so it is undefined at this point, and should allow)
    assert(isUndefined(this._setValues) || !isUndefined(this._setValues[key]), `Set: Invalid key '${key}' on add`);

    super.add(key);

    return this;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    if (Array.isArray(other)) {
      // we don't actually care about the order, sort the values
      return compareArray(this.strings.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq([...other.values()]);
    } else if (isNumber(other) || isBn(other)) {
      return this.valueEncoded.eq(bnToBn(other));
    }

    return false;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): string[] {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string[] {
    return this.strings;
  }

  /**
   * @description The encoded value for the set members
   */
  public toNumber (): number {
    return this.valueEncoded.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    // FIXME We don't cater for this in createType as of yet
    return JSON.stringify({ _set: this._setValues });
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return `[${this.strings.join(', ')}]`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.valueEncoded.toNumber()]);
  }
}
