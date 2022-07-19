// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { CodecClass, Inspect, ISet, IU8a, Registry } from '../types';

import { BN, bnToBn, bnToU8a, isBn, isNumber, isString, isU8a, isUndefined, stringify, stringPascalCase, u8aToBn, u8aToHex, u8aToU8a } from '@polkadot/util';

import { compareArray } from '../utils';

type SetValues = Record<string, number | BN>;

function encodeSet (setValues: SetValues, values: string[]): BN {
  const encoded = new BN(0);

  for (let i = 0; i < values.length; i++) {
    encoded.ior(bnToBn(setValues[values[i]] || 0));
  }

  return encoded;
}

/** @internal */
function decodeSetArray (setValues: SetValues, values: string[]): string[] {
  const result = new Array<string>(values.length);

  for (let i = 0; i < values.length; i++) {
    const key = values[i];

    if (isUndefined(setValues[key])) {
      throw new Error(`Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);
    }

    result[i] = key;
  }

  return result;
}

/** @internal */
function decodeSetNumber (setValues: SetValues, _value: BN | number): string[] {
  const bn = bnToBn(_value);
  const keys = Object.keys(setValues);
  const result: string[] = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (bn.and(bnToBn(setValues[key])).eq(bnToBn(setValues[key]))) {
      result.push(key);
    }
  }

  const computed = encodeSet(setValues, result);

  if (!bn.eq(computed)) {
    throw new Error(`Set: Mismatch decoding '${bn.toString()}', computed as '${computed.toString()}' with ${result.join(', ')}`);
  }

  return result;
}

/** @internal */
function decodeSet (setValues: SetValues, value: string[] | Set<string> | Uint8Array | BN | number | string = 0, bitLength: number): string[] {
  if (bitLength % 8 !== 0) {
    throw new Error(`Expected valid bitLength, power of 8, found ${bitLength}`);
  }

  const byteLength = bitLength / 8;

  if (isU8a(value)) {
    return value.length === 0
      ? []
      : decodeSetNumber(setValues, u8aToBn(value.subarray(0, byteLength), { isLe: true }));
  } else if (isString(value)) {
    return decodeSet(setValues, u8aToU8a(value), byteLength);
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
export class CodecSet extends Set<string> implements ISet<string> {
  public readonly registry: Registry;

  public createdAtHash?: IU8a;

  readonly #allowed: SetValues;

  readonly #byteLength: number;

  constructor (registry: Registry, setValues: SetValues, value?: string[] | Set<string> | Uint8Array | BN | number | string, bitLength = 8) {
    super(decodeSet(setValues, value, bitLength));

    this.registry = registry;
    this.#allowed = setValues;
    this.#byteLength = bitLength / 8;
  }

  public static with (values: SetValues, bitLength?: number): CodecClass<CodecSet> {
    const S = class extends CodecSet {
      constructor (registry: Registry, value?: string[] | Set<string> | Uint8Array | BN | number | string) {
        super(registry, values, value, bitLength);
      }
    };

    const keys = Object.keys(values);

    for (let i = 0; i < keys.length; i++) {
      const key = `is${stringPascalCase(keys[i])}`;

      if (!(key in S.prototype)) {
        Object.defineProperty(S.prototype, key, {
          enumerable: true,
          get: function (): boolean {
            return (this as CodecSet).strings.includes(keys[i]);
          }
        });
      }
    }

    return S;
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
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
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
  public override add = (key: string): this => {
    // ^^^ add = () property done to assign this instance's this, otherwise Set.add creates "some" chaos
    // we have the isUndefined(this._setValues) in here as well, add is used internally
    // in the Set constructor (so it is undefined at this point, and should allow)
    if (this.#allowed && isUndefined(this.#allowed[key])) {
      throw new Error(`Set: Invalid key '${key}' on add`);
    }

    super.add(key);

    return this;
  };

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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
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
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): string[] {
    return this.toJSON();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return stringify({ _set: this.#allowed });
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
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
