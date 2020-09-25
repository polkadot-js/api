// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { Codec, Constructor, Registry } from '../types';

import BN from 'bn.js';
import { assert, bnToBn, bnToU8a, isBn, isU8a, isNumber, isString, isUndefined, stringCamelCase, stringUpperFirst, u8aToHex, u8aToBn, u8aToU8a } from '@polkadot/util';

import Raw from './Raw';
import { compareArray } from './utils';

type SetValues = Record<string, number | BN>;

function encodeSet (setValues: SetValues, value: string[]): BN {
  return value.reduce((result, value): BN => {
    return result.or(bnToBn(setValues[value] || 0));
  }, new BN(0));
}

/** @internal */
function decodeSetArray (setValues: SetValues, value: string[]): string[] {
  return value.reduce((result, key): string[] => {
    assert(!isUndefined(setValues[key]), `Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);

    result.push(key);

    return result;
  }, [] as string[]);
}

/** @internal */
function decodeSetNumber (setValues: SetValues, _value: BN | number): string[] {
  const bn = bnToBn(_value);
  const result = Object.keys(setValues).reduce((result, key): string[] => {
    if (bn.and(bnToBn(setValues[key])).eq(bnToBn(setValues[key]))) {
      result.push(key);
    }

    return result;
  }, [] as string[]);

  const computed = encodeSet(setValues, result);

  assert(bn.eq(computed), `Set: Mismatch decoding '${bn.toString()}', computed as '${computed.toString()}' with ${result.join(', ')}`);

  return result;
}

/** @internal */
function decodeSet (setValues: SetValues, value: string[] | Set<string> | Uint8Array | BN | number | string = 0, bitLength: number): string[] {
  assert(bitLength % 8 === 0, `Expected valid bitLength, power of 8, found ${bitLength}`);

  const byteLength = bitLength / 8;

  if (isString(value)) {
    return decodeSet(setValues, u8aToU8a(value), byteLength);
  } else if (isU8a(value)) {
    return value.length === 0
      ? []
      : decodeSetNumber(setValues, u8aToBn(value.subarray(0, byteLength), { isLe: true }));
  } else if (value instanceof Set || Array.isArray(value)) {
    const input = Array.isArray(value)
      ? value
      : [...value.values()];

    return decodeSetArray(setValues, input);
  }

  return decodeSetNumber(setValues, value);
}

/**
 * @name Set
 * @description
 * An Set is an array of string values, represented an an encoded type by
 * a bitwise representation of the values.
 */
// FIXME This is a prime candidate to extend the JavaScript built-in Set
export default class CodecSet extends Set<string> implements Codec {
  public readonly registry: Registry;

  readonly #allowed: SetValues;

  readonly #byteLength: number;

  constructor (registry: Registry, setValues: SetValues, value?: string[] | Set<string> | Uint8Array | BN | number | string, bitLength = 8) {
    super(decodeSet(setValues, value, bitLength));

    this.registry = registry;
    this.#allowed = setValues;
    this.#byteLength = bitLength / 8;
  }

  public static with (values: SetValues, bitLength?: number): Constructor<CodecSet> {
    return class extends CodecSet {
      constructor (registry: Registry, value?: unknown) {
        super(registry, values, value as undefined, bitLength);

        Object.keys(values).forEach((_key): void => {
          const name = stringUpperFirst(stringCamelCase(_key));
          const iskey = `is${name}`;

          // do not clobber existing properties on the object
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
    return this.#byteLength;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return new Raw(this.registry, this.registry.hash(this.toU8a()));
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
    return encodeSet(this.#allowed, this.strings);
  }

  /**
   * @description adds a value to the Set (extended to allow for validity checking)
   */
  public add = (key: string): this => {
    // ^^^ add = () property done to assign this instance's this, otherwise Set.add creates "some" chaos
    // we have the isUndefined(this._setValues) in here as well, add is used internally
    // in the Set constructor (so it is undefined at this point, and should allow)
    assert(isUndefined(this.#allowed) || !isUndefined(this.#allowed[key]), `Set: Invalid key '${key}' on add`);

    super.add(key);

    return this;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    if (Array.isArray(other)) {
      // we don't actually care about the order, sort the values
      return compareArray(this.strings.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq([...other.values()]);
    } else if (isNumber(other) || isBn(other as string)) {
      return this.valueEncoded.eq(bnToBn(other as string));
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
    return JSON.stringify({ _set: this.#allowed });
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
    return bnToU8a(this.valueEncoded, {
      bitLength: this.#byteLength * 8,
      isLe: true
    });
  }
}
