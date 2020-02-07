// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJson, Constructor, Codec, IHash, InterfaceTypes, Registry } from '../types';

import { isHex, hexToU8a, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from './Compact';
import Raw from './Raw';
import { compareMap, decodeU8a, typeToConstructor } from './utils';

export default class BTreeMap<K extends Codec = Codec, V extends Codec = Codec> extends Map<K, V> implements Codec {
  public readonly registry: Registry;

  protected _KeyClass: Constructor<K>;

  protected _ValClass: Constructor<V>;

  constructor (registry: Registry, keyType: Constructor<K> | InterfaceTypes, valType: Constructor<V> | InterfaceTypes, rawValue: any) {
    const KeyClass = typeToConstructor(registry, keyType);
    const ValClass = typeToConstructor(registry, valType);

    super(BTreeMap.decodeBTreeMap(registry, KeyClass, ValClass, rawValue));

    this.registry = registry;
    this._KeyClass = KeyClass;
    this._ValClass = ValClass;
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
  private static decodeBTreeMap<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, KeyClass: Constructor<K>, ValClass: Constructor<V>, value: Uint8Array | string | Map<any, any>): Map<K, V> {
    if (!value) {
      return new Map<K, V>();
    } else if (isHex(value)) {
      return BTreeMap.decodeBTreeMap(registry, KeyClass, ValClass, hexToU8a(value));
    } else if (isU8a(value)) {
      return BTreeMap.decodeBTreeMapFromU8a<K, V>(registry, KeyClass, ValClass, u8aToU8a(value));
    } else if (value instanceof Map) {
      return BTreeMap.decodeBTreeMapFromMap<K, V>(registry, KeyClass, ValClass, value);
    }

    throw new Error('BTreeMap: cannot decode type');
  }

  /** @internal */
  private static decodeBTreeMapFromU8a<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, KeyClass: Constructor<K>, ValClass: Constructor<V>, u8a: Uint8Array): Map<K, V> {
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
  private static decodeBTreeMapFromMap<K extends Codec = Codec, V extends Codec = Codec> (registry: Registry, KeyClass: Constructor<K>, ValClass: Constructor<V>, value: Map<any, any>): Map<K, V> {
    const output = new Map<K, V>();

    value.forEach((v: any, k: any) => {
      let key, val;
      try {
        key = (k instanceof KeyClass) ? k : new KeyClass(registry, k);
        val = (v instanceof ValClass) ? v : new ValClass(registry, v);
      } catch (error) {
        console.error('Failed to decode BTreeMap key or value:', error.message);
        throw error;
      }

      output.set(key, val);
    });

    return output;
  }

  public static with<K extends Codec, V extends Codec> (keyType: Constructor<K> | InterfaceTypes, valType: Constructor<V> | InterfaceTypes): Constructor<BTreeMap<K, V>> {
    return class extends BTreeMap<K, V> {
      constructor (registry: Registry, value?: any) {
        super(registry, keyType, valType, value);
      }
    };
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
  public get hash (): IHash {
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
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
  public eq (other?: any): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    const json: any = {};

    this.forEach((v: V, k: K) => {
      json[k.toString()] = v.toJSON();
    });

    return json;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `BTreeMap<${new this._KeyClass(this.registry).toRawType()},${new this._ValClass(this.registry).toRawType()}>`;
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
