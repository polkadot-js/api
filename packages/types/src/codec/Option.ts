// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { isNull, isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import Null from '../primitive/Null';
import { typeToConstructor } from './utils';
import Base from './Base';

/**
 * @name Option
 * @description
 * An Option is an optional field. Basically the first byte indicates that there is
 * is value to follow. If the byte is `1` there is an actual value. So the Option
 * implements that - decodes, checks for optionality and wraps the required structure
 * with a value if/as required/found.
 */
export default class Option<T extends Codec> extends Base<T> {
  private _Type: Constructor;

  constructor (registry: Registry, Type: Constructor | InterfaceTypes, value?: any) {
    const Clazz = typeToConstructor(registry, Type);

    super(registry, Option.decodeOption(registry, Clazz, value));

    this._Type = Clazz;
  }

  public static decodeOption (registry: Registry, Type: Constructor, value?: any): Codec {
    if (isNull(value) || isUndefined(value) || value instanceof Null) {
      return new Null(registry);
    } else if (value instanceof Option) {
      return Option.decodeOption(registry, Type, value.value);
    } else if (value instanceof Type) {
      // don't re-create, use as it (which also caters for derived types)
      return value;
    } else if (isU8a(value)) {
      // the isU8a check happens last in the if-tree - since the wrapped value
      // may be an instance of it, so Type and Option checks go in first
      return Option.decodeOptionU8a(registry, Type, value);
    }

    return new Type(registry, value);
  }

  private static decodeOptionU8a (registry: Registry, Type: Constructor, value: Uint8Array): Codec {
    return !value.length || value[0] === 0
      ? new Null(registry)
      : new Type(registry, value.subarray(1));
  }

  public static with<O extends Codec> (Type: Constructor | InterfaceTypes): Constructor<Option<O>> {
    return class extends Option<O> {
      constructor (registry: Registry, value?: any) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    // boolean byte (has value, doesn't have) along with wrapped length
    return 1 + this.raw.encodedLength;
  }

  /**
   * @description Checks if the Option has no value
   */
  public get isEmpty (): boolean {
    return this.isNone;
  }

  /**
   * @description Checks if the Option has no value
   */
  public get isNone (): boolean {
    return this.raw instanceof Null;
  }

  /**
   * @description Checks if the Option has a value
   */
  public get isSome (): boolean {
    return !this.isNone;
  }

  /**
   * @description The actual value for the Option
   */
  public get value (): Codec {
    return this.raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    if (other instanceof Option) {
      return (this.isSome === other.isSome) && this.value.eq(other.value);
    }

    return this.value.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    // This attempts to align with the JSON encoding - actually in this case
    // the isSome value is correct, however the `isNone` may be problematic
    return this.isNone
      ? '0x'
      : u8aToHex(this.toU8a().subarray(1));
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (isBare?: boolean): string {
    const wrapped = new this._Type(this.registry).toRawType();

    return isBare
      ? wrapped
      : `Option<${wrapped}>`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return this.raw.toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

    if (this.isSome) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  /**
   * @description Returns the value that the Option represents (if available), throws if null
   */
  public unwrap (): T {
    if (this.isNone) {
      throw new Error('Option: unwrapping a None value');
    }

    return this.raw;
  }

  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */
  public unwrapOr<O> (defaultValue: O): T | O {
    return this.isSome
      ? this.unwrap()
      : defaultValue;
  }
}
