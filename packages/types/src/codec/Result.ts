// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { assert } from '@polkadot/util';

import Enum from './Enum';

/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */
export default class Result<O extends Codec, E extends Codec> extends Enum {
  constructor (registry: Registry, Ok: Constructor<O> | keyof InterfaceTypes, Error: Constructor<E> | keyof InterfaceTypes, value?: unknown) {
    // NOTE This is order-dependent, Ok (with index 0) needs to be first
    // eslint-disable-next-line sort-keys
    super(registry, { Ok, Error }, value);
  }

  public static with<O extends Codec, E extends Codec> (Types: { Ok: Constructor<O> | keyof InterfaceTypes; Error: Constructor<E> | keyof InterfaceTypes }): Constructor<Result<O, E>> {
    return class extends Result<O, E> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Types.Ok, Types.Error, value);
      }
    };
  }

  /**
   * @description Returns the wrapper Error value (if isError)
   */
  public get asError (): E {
    assert(this.isError, 'Cannot extract Error value from Ok result, check isError first');

    return this.value as E;
  }

  /**
   * @description Returns the wrapper Ok value (if isOk)
   */
  public get asOk (): O {
    assert(this.isOk, 'Cannot extract Ok value from Error result, check isOk first');

    return this.value as O;
  }

  /**
   * @description Checks if the Result has no value
   */
  public get isEmpty (): boolean {
    return this.isOk && this.value.isEmpty;
  }

  /**
   * @description Checks if the Result wraps an Error value
   */
  public get isError (): boolean {
    return !this.isOk;
  }

  /**
   * @description Checks if the Result wraps an Ok value
   */
  public get isOk (): boolean {
    return this.index === 0;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    const Types = this._toRawStruct() as { Ok: unknown; Error: unknown };

    return `Result<${Types.Ok as string},${Types.Error as string}>`;
  }
}
