// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJsonObject, Codec, Constructor, InterfaceTypes } from '../types';

import { assert, isNull, isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import { typeToConstructor } from './utils';
import Base from './Base';

/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */
export default class Result<O extends Codec, E extends Codec> extends Base<O | E> {
  private _TypeError: Constructor;

  private _TypeOk: Constructor;

  private _isOk: boolean;

  public constructor (TypeOk: Constructor | InterfaceTypes, TypeError: Constructor | InterfaceTypes, value?: any) {
    const ClazzOk = typeToConstructor(TypeOk);
    const ClazzError = typeToConstructor(TypeError);
    const [isOk, decoded] = Result.decodeResult(ClazzOk, ClazzError, value);

    super(decoded);

    this._isOk = isOk;
    this._TypeError = ClazzError;
    this._TypeOk = ClazzOk;
  }

  public static decodeResult (TypeOk: Constructor, TypeError: Constructor, value?: any): [boolean, Codec] {
    if (isNull(value) || isUndefined(value)) {
      return [true, new TypeOk()];
    } else if (value instanceof Result) {
      return [value.isOk, value.value];
    } else if (isU8a(value)) {
      const isOk = value[0] === 0;
      const Clazz = isOk ? TypeOk : TypeError;

      return [isOk, new Clazz(value.subarray(1))];
    }

    return Result.decodeResultObject(TypeOk, TypeError, value);
  }

  public static decodeResultObject (TypeOk: Constructor, TypeError: Constructor, value: any): [boolean, Codec] {
    if (value instanceof TypeError) {
      return [false, value];
    } else if (value instanceof TypeOk) {
      return [true, value];
    } else if (!isUndefined(value.Ok) || !isUndefined(value.Error)) {
      const isOk = !isUndefined(value.Ok);
      const Clazz = isOk ? TypeOk : TypeError;

      return [isOk, new Clazz(value[isOk ? 'Ok' : 'Error'])];
    }

    return [true, new TypeOk(value)];
  }

  public static with<O extends Codec, E extends Codec> (TypeOk: Constructor | InterfaceTypes, TypeError: Constructor | InterfaceTypes): Constructor<Result<O, E>> {
    return class extends Result<O, E> {
      public constructor (value?: any) {
        super(TypeOk, TypeError, value);
      }
    };
  }

  /**
   * @description Results the wrapper Error value
   */
  public get asError (): E {
    assert(this.isError, 'Cannot extract Error value from Ok result');

    return this.value as E;
  }

  /**
   * @description Results the wrapper Ok value
   */
  public get asOk (): O {
    assert(this.isOk, 'Cannot extract Ok value from Error result');

    return this.value as O;
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
    return this.isOk && this.raw.isEmpty;
  }

  /**
   * @description Checks if the Result has an error value
   */
  public get isError (): boolean {
    return !this.isOk;
  }

  /**
   * @description Checks if the Option is success
   */
  public get isOk (): boolean {
    return this._isOk;
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
    if (other instanceof Result) {
      return (this.isOk === other.isOk) && this.value.eq(other.value);
    }

    return this.value.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    // This attempts to align with the JSON encoding - actually in this case
    // the isSome value is correct, however the `isNone` may be problematic
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJsonObject {
    return {
      [this.isOk ? 'Ok' : 'Error']: this.value.toJSON()
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Result<${new this._TypeOk().toRawType()},${new this._TypeError().toRawType()}>`;
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

    u8a.set([this.isOk ? 0 : 1]);
    u8a.set(this.raw.toU8a(), 1);

    return u8a;
  }
}
