// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { assert } from '@polkadot/util';

import { Enum } from './Enum';

/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */
export class Result<O extends Codec, E extends Codec> extends Enum {
  constructor (registry: Registry, Ok: Constructor<O> | keyof InterfaceTypes, Err: Constructor<E> | keyof InterfaceTypes, value?: unknown) {
    // NOTE This is order-dependent, Ok (with index 0) needs to be first
    // eslint-disable-next-line sort-keys
    super(registry, { Ok, Err }, value);
  }

  public static with<O extends Codec, E extends Codec> (Types: { Ok: Constructor<O> | keyof InterfaceTypes; Err: Constructor<E> | keyof InterfaceTypes }): Constructor<Result<O, E>> {
    return class extends Result<O, E> {
      constructor (registry: Registry, value?: unknown) {
        super(registry, Types.Ok, Types.Err, value);
      }
    };
  }

  /**
   * @description Returns the wrapper Err value (if isErr)
   */
  public get asErr (): E {
    assert(this.isErr, 'Cannot extract Err value from Ok result, check isErr first');

    return this.value as E;
  }

  /**
   * @deprecated Use asErr
   */
  public get asError (): E {
    return this.asErr;
  }

  /**
   * @description Returns the wrapper Ok value (if isOk)
   */
  public get asOk (): O {
    assert(this.isOk, 'Cannot extract Ok value from Err result, check isOk first');

    return this.value as O;
  }

  /**
   * @description Checks if the Result has no value
   */
  public get isEmpty (): boolean {
    return this.isOk && this.value.isEmpty;
  }

  /**
   * @description Checks if the Result wraps an Err value
   */
  public get isErr (): boolean {
    return !this.isOk;
  }

  /**
   * @deprecated Use isErr
   */
  public get isError (): boolean {
    return this.isErr;
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
    const Types = this._toRawStruct() as { Ok: unknown; Err: unknown };

    return `Result<${Types.Ok as string},${Types.Err as string}>`;
  }
}
