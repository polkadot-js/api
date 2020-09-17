// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { AnyJson, Constructor, Codec, InterfaceTypes, Registry } from '../types';

import { isHex, hexToU8a, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import Compact from './Compact';
import Raw from './Raw';
import { compareSet, decodeU8a, typeToConstructor } from './utils';

/** @internal */
function decodeSetFromU8a<V extends Codec = Codec> (registry: Registry, ValClass: Constructor<V>, u8a: Uint8Array): Set<V> {
  const output = new Set<V>();
  const [offset, length] = Compact.decodeU8a(u8a);
  const types = [];

  for (let i = 0; i < length.toNumber(); i++) {
    types.push(ValClass);
  }

  const values = decodeU8a(registry, u8a.subarray(offset), types);

  for (let i = 0; i < values.length; i++) {
    output.add(values[i] as V);
  }

  return output;
}

/** @internal */
function decodeSetFromSet<V extends Codec = Codec> (registry: Registry, ValClass: Constructor<V>, value: Set<any> | string[]): Set<V> {
  const output = new Set<V>();

  value.forEach((val: any) => {
    try {
      output.add((val instanceof ValClass) ? val : new ValClass(registry, val));
    } catch (error) {
      console.error('Failed to decode BTreeSet key or value:', (error as Error).message);

      throw error;
    }
  });

  return output;
}

/**
 * Decode input to pass into constructor.
 *
 * @param ValClass - Type of the map value
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - Set<any>, where both key and value types are either
 *   constructors or decodeable values for their types.
 * @param jsonSet
 * @internal
 */
function decodeSet<V extends Codec = Codec> (registry: Registry, valType: Constructor<V> | keyof InterfaceTypes, value?: Uint8Array | string | string[] | Set<any>): Set<V> {
  if (!value) {
    return new Set<V>();
  }

  const ValClass = typeToConstructor(registry, valType);

  if (isHex(value)) {
    return decodeSet(registry, ValClass, hexToU8a(value));
  } else if (isU8a(value)) {
    return decodeSetFromU8a<V>(registry, ValClass, u8aToU8a(value));
  } else if (Array.isArray(value) || value instanceof Set) {
    return decodeSetFromSet<V>(registry, ValClass, value);
  }

  throw new Error('BTreeSet: cannot decode type');
}

export default class BTreeSet<V extends Codec = Codec> extends Set<V> implements Codec {
  public readonly registry: Registry;

  readonly #ValClass: Constructor<V>;

  constructor (registry: Registry, valType: Constructor<V> | keyof InterfaceTypes, rawValue?: Uint8Array | string | string[] | Set<any>) {
    super(decodeSet(registry, valType, rawValue));

    this.registry = registry;
    this.#ValClass = typeToConstructor(registry, valType);
  }

  public static with<V extends Codec> (valType: Constructor<V> | keyof InterfaceTypes): Constructor<BTreeSet<V>> {
    return class extends BTreeSet<V> {
      constructor (registry: Registry, value?: Uint8Array | string | Set<any>) {
        super(registry, valType, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    let len = Compact.encodeU8a(this.size).length;

    this.forEach((v: V) => {
      len += v.encodedLength;
    });

    return len;
  }

  /**
   * @description Returns a hash of the value
   */
  public get hash (): H256 {
    return new Raw(this.registry, this.registry.hash(this.toU8a()));
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.size === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareSet(this, other);
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    const json: AnyJson = [];

    this.forEach((v: V) => {
      json.push(v.toHuman(isExtended));
    });

    return json;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    const json: AnyJson = [];

    this.forEach((v: V) => {
      json.push(v.toJSON());
    });

    return json;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `BTreeSet<${this.registry.getClassName(this.#ValClass) || new this.#ValClass(this.registry).toRawType()}>`;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = new Array<Uint8Array>();

    if (!isBare) {
      encoded.push(Compact.encodeU8a(this.size));
    }

    this.forEach((v: V) => {
      encoded.push(v.toU8a(isBare));
    });

    return u8aConcat(...encoded);
  }
}
