// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { AnyJson, Constructor, Codec, InterfaceTypes, Registry } from '../types';

import { isHex, hexToU8a, isObject, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import Compact from './Compact';
import Raw from './Raw';
import compareMap from './utils/compareMap';
import decodeU8a from './utils/decodeU8a';
import typeToConstructor from './utils/typeToConstructor';

/** @internal */
function decodeMapFromU8a<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, KeyClass: Constructor<K>, ValClass: Constructor<V>, u8a: Uint8Array): Map<K, V> {
  const output = new Map<K, V>();
  const [offset, length] = Compact.decodeU8a(u8a);
  const types = [];

  for (let i = 0; i < length.toNumber(); i++) {
    types.push(KeyClass, ValClass);
  }

  const values = decodeU8a(registry, u8a.subarray(offset), types);

  for (let i = 0; i < values.length; i += 2) {
    output.set(values[i] as K, values[i + 1] as V);
  }

  return output;
}

/** @internal */
function decodeMapFromMap<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, KeyClass: Constructor<K>, ValClass: Constructor<V>, value: Map<any, any>): Map<K, V> {
  const output = new Map<K, V>();

  value.forEach((val: any, key: any) => {
    try {
      output.set(
        key instanceof KeyClass
          ? key
          : new KeyClass(registry, key),
        val instanceof ValClass
          ? val
          : new ValClass(registry, val)
      );
    } catch (error) {
      console.error('Failed to decode Map key or value:', (error as Error).message);

      throw error;
    }
  });

  return output;
}

/**
 * Decode input to pass into constructor.
 *
 * @param KeyClass - Type of the map key
 * @param ValClass - Type of the map value
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - Map<any, any>, where both key and value types are either
 *   constructors or decodeable values for their types.
 * @param jsonMap
 * @internal
 */
function decodeMap<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, keyType: Constructor<K> | keyof InterfaceTypes, valType: Constructor<V> | keyof InterfaceTypes, value?: Uint8Array | string | Map<any, any>): Map<K, V> {
  const KeyClass = typeToConstructor(registry, keyType);
  const ValClass = typeToConstructor(registry, valType);

  if (!value) {
    return new Map<K, V>();
  } else if (isHex(value)) {
    return decodeMap(registry, KeyClass, ValClass, hexToU8a(value));
  } else if (isU8a(value)) {
    return decodeMapFromU8a<K, V>(registry, KeyClass, ValClass, u8aToU8a(value));
  } else if (value instanceof Map) {
    return decodeMapFromMap<K, V>(registry, KeyClass, ValClass, value);
  } else if (isObject(value)) {
    return decodeMapFromMap<K, V>(registry, KeyClass, ValClass, new Map(Object.entries(value)));
  }

  throw new Error('Map: cannot decode type');
}

export default class CodecMap<K extends Codec = Codec, V extends Codec = Codec> extends Map<K, V> implements Codec {
  public readonly registry: Registry;

  readonly #KeyClass: Constructor<K>;

  readonly #ValClass: Constructor<V>;

  readonly #type: string;

  constructor (registry: Registry, type: 'BTreeMap' | 'HashMap', keyType: Constructor<K> | keyof InterfaceTypes, valType: Constructor<V> | keyof InterfaceTypes, rawValue?: Uint8Array | string | Map<any, any>) {
    super(decodeMap(registry, keyType, valType, rawValue));

    this.registry = registry;
    this.#KeyClass = typeToConstructor(registry, keyType);
    this.#ValClass = typeToConstructor(registry, valType);
    this.#type = type;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    let len = Compact.encodeU8a(this.size).length;

    this.forEach((v: V, k: K) => {
      len += v.encodedLength + k.encodedLength;
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
    return compareMap(this, other);
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
    const json: AnyJson = {};

    this.forEach((v: V, k: K) => {
      json[k.toString()] = v.toHuman(isExtended);
    });

    return json;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    const json: AnyJson = {};

    this.forEach((v: V, k: K) => {
      json[k.toString()] = v.toJSON();
    });

    return json;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `${this.#type}<${this.registry.getClassName(this.#KeyClass) || new this.#KeyClass(this.registry).toRawType()},${this.registry.getClassName(this.#ValClass) || new this.#ValClass(this.registry).toRawType()}>`;
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

    this.forEach((v: V, k: K) => {
      encoded.push(k.toU8a(isBare), v.toU8a(isBare));
    });

    return u8aConcat(...encoded);
  }
}
