// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '@polkadot/types/interfaces';
import { AnyJson, Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { isNull, isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import Null from '../primitive/Null';
import { typeToConstructor } from './utils';
import Raw from './Raw';

/** @internal */
function decodeOptionU8a (registry: Registry, Type: Constructor, value: Uint8Array): Codec {
  return !value.length || value[0] === 0
    ? new Null(registry)
    : new Type(registry, value.subarray(1));
}

/** @internal */
function decodeOption (registry: Registry, typeName: Constructor | keyof InterfaceTypes, value?: unknown): Codec {
  if (isNull(value) || isUndefined(value) || value instanceof Null) {
    return new Null(registry);
  }

  const Type = typeToConstructor(registry, typeName);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (value instanceof Option) {
    return decodeOption(registry, Type, value.value);
  } else if (value instanceof Type) {
    // don't re-create, use as it (which also caters for derived types)
    return value;
  } else if (isU8a(value)) {
    // the isU8a check happens last in the if-tree - since the wrapped value
    // may be an instance of it, so Type and Option checks go in first
    return decodeOptionU8a(registry, Type, value);
  }

  return new Type(registry, value);
}

/**
 * @name Option
 * @description
 * An Option is an optional field. Basically the first byte indicates that there is
 * is value to follow. If the byte is `1` there is an actual value. So the Option
 * implements that - decodes, checks for optionality and wraps the required structure
 * with a value if/as required/found.
 */
export default class Option<T extends Codec> implements Codec {
  public readonly registry: Registry;

  readonly #Type: Constructor<T>;

  readonly #raw: T;

  constructor (registry: Registry, typeName: Constructor<T> | keyof InterfaceTypes, value?: unknown) {
    this.registry = registry;
    this.#Type = typeToConstructor(registry, typeName);
    this.#raw = decodeOption(registry, typeName, value) as T;
  }

  public static with<O extends Codec> (Type: Constructor<O> | keyof InterfaceTypes): Constructor<Option<O>> {
    return class extends Option<O> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Type, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    // boolean byte (has value, doesn't have) along with wrapped length
    return 1 + this.#raw.encodedLength;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return new Raw(this.registry, this.registry.hash(this.toU8a()));
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
    return this.#raw instanceof Null;
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
    return this.#raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
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
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this.#raw.toHuman(isExtended);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.#raw.toJSON();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (isBare?: boolean): string {
    const wrapped = this.registry.getClassName(this.#Type) || new this.#Type(this.registry).toRawType();

    return isBare
      ? wrapped
      : `Option<${wrapped}>`;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.#raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return this.#raw.toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

    if (this.isSome) {
      u8a.set([1]);
      u8a.set(this.#raw.toU8a(), 1);
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

    return this.#raw;
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

  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */
  public unwrapOrDefault (): T {
    return this.isSome
      ? this.unwrap()
      : new this.#Type(this.registry);
  }
}
