// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJsonArray, Constructor, Codec, IHash, InterfaceTypes, Registry } from '../types';

import { isHex, hexToU8a, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from './Compact';
import U8a from './U8aFixed';
import { compareSet, decodeU8a, typeToConstructor } from './utils';

export default class BTreeSet<V extends Codec = Codec> extends Set<V> implements Codec {
  public readonly registry: Registry;

  protected _ValClass: Constructor<V>;

  constructor (registry: Registry, valType: Constructor<V> | InterfaceTypes, rawValue: any) {
    const ValClass = typeToConstructor(registry, valType);

    super(BTreeSet.decodeBTreeSet(registry, ValClass, rawValue));

    this.registry = registry;
    this._ValClass = ValClass;
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
  private static decodeBTreeSet<V extends Codec = Codec> (registry: Registry, ValClass: Constructor<V>, value: Uint8Array | string | Set<any>): Set<V> {
    if (!value) {
      return new Set<V>();
    } else if (isHex(value)) {
      return BTreeSet.decodeBTreeSet(registry, ValClass, hexToU8a(value));
    } else if (isU8a(value)) {
      return BTreeSet.decodeBTreeSetFromU8a<V>(registry, ValClass, u8aToU8a(value));
    } else if (value instanceof Set) {
      return BTreeSet.decodeBTreeSetFromSet<V>(registry, ValClass, value);
    }

    throw new Error('BTreeSet: cannot decode type');
  }

  /** @internal */
  private static decodeBTreeSetFromU8a<V extends Codec = Codec> (registry: Registry, ValClass: Constructor<V>, u8a: Uint8Array): Set<V> {
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
  private static decodeBTreeSetFromSet<V extends Codec = Codec> (registry: Registry, ValClass: Constructor<V>, value: Set<any>): Set<V> {
    const output = new Set<V>();

    value.forEach((v: any) => {
      let val;
      try {
        val = (v instanceof ValClass) ? v : new ValClass(registry, v);
      } catch (error) {
        console.error('Failed to decode BTreeSet key or value:', error.message);
        throw error;
      }

      output.add(val);
    });

    return output;
  }

  public static with<V extends Codec> (valType: Constructor<V> | InterfaceTypes): Constructor<BTreeSet<V>> {
    return class extends BTreeSet<V> {
      constructor (registry: Registry, value?: any) {
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
  public get hash (): IHash {
    return new U8a(this.registry, blake2AsU8a(this.toU8a(), 256));
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
    return compareSet(this, other);
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
  public toJSON (): AnyJsonArray {
    const json: any = [];
    this.forEach((v: V) => {
      json.push(v.toJSON());
    });
    return json;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `BTreeSet<${new this._ValClass(this.registry).toRawType()}>`;
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
