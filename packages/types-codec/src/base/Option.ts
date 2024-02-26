// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, Codec, CodecClass, DefinitionSetter, Inspect, IOption, IU8a, Registry } from '../types/index.js';

import { identity, isCodec, isNull, isU8a, isUndefined } from '@polkadot/util';

import { typeToConstructor } from '../utils/index.js';
import { Null } from './Null.js';

class None extends Null {
  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'None';
  }
}

/** @internal */
function decodeOption (registry: Registry, Type: CodecClass, value?: unknown): Codec {
  if (value instanceof Type) {
    // don't re-create, use as it (which also caters for derived types)
    return value;
  } else if (value instanceof Option) {
    if (value.value instanceof Type) {
      // same instance, return it
      return value.value;
    } else if (value.isNone) {
      // internal is None, we are also none
      return new None(registry);
    }

    // convert the actual value into known
    return new Type(registry, value.value);
  } else if (isNull(value) || isUndefined(value) || value === '0x' || value instanceof None) {
    // anything empty we pass as-is
    return new None(registry);
  } else if (isU8a(value)) {
    // the isU8a check happens last in the if-tree - since the wrapped value
    // may be an instance of it, so Type and Option checks go in first
    return !value.length || value[0] === 0
      ? new None(registry)
      : new Type(registry, value.subarray(1));
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
export class Option<T extends Codec> implements IOption<T> {
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength?: number;
  public isStorageFallback?: boolean;

  readonly #Type: CodecClass<T>;
  readonly #raw: T;

  constructor (registry: Registry, typeName: CodecClass<T> | string, value?: unknown, { definition, setDefinition = identity }: DefinitionSetter<CodecClass<T>> = {}) {
    const Type = definition || setDefinition(typeToConstructor(registry, typeName));
    const decoded = isU8a(value) && value.length && !isCodec(value)
      ? value[0] === 0
        ? new None(registry)
        : new Type(registry, value.subarray(1))
      : decodeOption(registry, Type, value);

    this.registry = registry;
    this.#Type = Type;
    this.#raw = decoded as T;

    if (decoded?.initialU8aLength) {
      this.initialU8aLength = 1 + decoded.initialU8aLength;
    }
  }

  public static with<O extends Codec> (Type: CodecClass<O> | string): CodecClass<Option<O>> {
    let definition: CodecClass<O> | undefined;

    const setDefinition = <T> (d: CodecClass<T>): CodecClass<T> => {
      definition = d as unknown as CodecClass<O>;

      return d;
    };

    return class extends Option<O> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Type, value, { definition, setDefinition });
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
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
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
    return this.#raw instanceof None;
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
  public get value (): T {
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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    if (this.isNone) {
      return { outer: [new Uint8Array([0])] };
    }

    const { inner, outer = [] } = this.#raw.inspect();

    return {
      inner,
      outer: [new Uint8Array([1]), ...outer]
    };
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    // This attempts to align with the JSON encoding - actually in this case
    // the isSome value is correct, however the `isNone` may be problematic
    return this.isNone
      ? '0x'
      : this.#raw.toHex();
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
    return this.isNone
      ? null
      : this.#raw.toJSON();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): AnyJson {
    return this.isNone
      ? null
      : this.#raw.toPrimitive();
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
