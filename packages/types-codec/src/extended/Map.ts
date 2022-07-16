// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, IMap, Inspect, IU8a, Registry } from '../types';

import { compactFromU8aLim, compactToU8a, isHex, isObject, isU8a, logger, stringify, u8aConcatStrict, u8aToHex, u8aToU8a } from '@polkadot/util';

import { AbstractArray } from '../abstract/Array';
import { Enum } from '../base/Enum';
import { Struct } from '../native/Struct';
import { compareMap, decodeU8a, sortMap, typeToConstructor } from '../utils';
import { Bytes } from './Bytes';

const l = logger('Map');

/** @internal */
function decodeMapFromU8a<K extends Codec, V extends Codec> (registry: Registry, KeyClass: CodecClass<K>, ValClass: CodecClass<V>, u8a: Uint8Array): [CodecClass<K>, CodecClass<V>, Map<K, V>, number] {
  const output = new Map<K, V>();
  const [offset, count] = compactFromU8aLim(u8a);
  const types = [];

  for (let i = 0; i < count; i++) {
    types.push(KeyClass, ValClass);
  }

  const [values, decodedLength] = decodeU8a(registry, new Array(types.length), u8a.subarray(offset), [types, []]);

  for (let i = 0; i < values.length; i += 2) {
    output.set(values[i] as K, values[i + 1] as V);
  }

  return [KeyClass, ValClass, output, offset + decodedLength];
}

/** @internal */
function decodeMapFromMap<K extends Codec, V extends Codec> (registry: Registry, KeyClass: CodecClass<K>, ValClass: CodecClass<V>, value: Map<any, any>): [CodecClass<K>, CodecClass<V>, Map<K, V>, number] {
  const output = new Map<K, V>();

  for (const [key, val] of value.entries()) {
    const isComplex = KeyClass.prototype instanceof AbstractArray ||
      KeyClass.prototype instanceof Struct ||
      KeyClass.prototype instanceof Enum;

    try {
      output.set(
        key instanceof KeyClass
          ? key
          : new KeyClass(registry, isComplex ? JSON.parse(key as string) : key),
        val instanceof ValClass
          ? val
          : new ValClass(registry, val)
      );
    } catch (error) {
      l.error('Failed to decode key or value:', (error as Error).message);

      throw error;
    }
  }

  return [KeyClass, ValClass, output, 0];
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
function decodeMap<K extends Codec, V extends Codec> (registry: Registry, keyType: CodecClass<K> | string, valType: CodecClass<V> | string, value?: Uint8Array | string | Map<any, any>): [CodecClass<K>, CodecClass<V>, Map<K, V>, number] {
  const KeyClass = typeToConstructor(registry, keyType);
  const ValClass = typeToConstructor(registry, valType);

  if (!value) {
    return [KeyClass, ValClass, new Map<K, V>(), 0];
  } else if (isU8a(value) || isHex(value)) {
    return decodeMapFromU8a<K, V>(registry, KeyClass, ValClass, u8aToU8a(value));
  } else if (value instanceof Map) {
    return decodeMapFromMap<K, V>(registry, KeyClass, ValClass, value);
  } else if (isObject(value)) {
    return decodeMapFromMap<K, V>(registry, KeyClass, ValClass, new Map(Object.entries(value)));
  }

  throw new Error('Map: cannot decode type');
}

export class CodecMap<K extends Codec = Codec, V extends Codec = Codec> extends Map<K, V> implements IMap<K, V> {
  public readonly registry: Registry;

  public createdAtHash?: IU8a;

  readonly #KeyClass: CodecClass<K>;

  readonly #ValClass: CodecClass<V>;

  readonly initialU8aLength?: number;

  readonly #type: string;

  constructor (registry: Registry, keyType: CodecClass<K> | string, valType: CodecClass<V> | string, rawValue: Uint8Array | string | Map<any, any> | undefined, type: 'BTreeMap' | 'HashMap' = 'HashMap') {
    const [KeyClass, ValClass, decoded, decodedLength] = decodeMap(registry, keyType, valType, rawValue);

    super(type === 'BTreeMap' ? sortMap(decoded) : decoded);

    this.registry = registry;
    this.initialU8aLength = decodedLength;
    this.#KeyClass = KeyClass;
    this.#ValClass = ValClass;
    this.#type = type;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    let len = compactToU8a(this.size).length;

    for (const [k, v] of this.entries()) {
      len += k.encodedLength + v.encodedLength;
    }

    return len;
  }

  /**
   * @description Returns a hash of the value
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    const inner = new Array<Inspect>();

    for (const [k, v] of this.entries()) {
      inner.push(k.inspect());
      inner.push(v.inspect());
    }

    return {
      inner,
      outer: [compactToU8a(this.size)]
    };
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): Record<string, AnyJson> {
    const json: Record<string, AnyJson> = {};

    for (const [k, v] of this.entries()) {
      json[
        k instanceof Bytes && k.isAscii
          ? k.toUtf8()
          : k.toString()
      ] = v.toHuman(isExtended);
    }

    return json;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): Record<string, AnyJson> {
    const json: Record<string, AnyJson> = {};

    for (const [k, v] of this.entries()) {
      json[k.toString()] = v.toJSON();
    }

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
  public override toString (): string {
    return stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = new Array<Uint8Array>();

    if (!isBare) {
      encoded.push(compactToU8a(this.size));
    }

    for (const [k, v] of this.entries()) {
      encoded.push(k.toU8a(isBare), v.toU8a(isBare));
    }

    return u8aConcatStrict(encoded);
  }
}
