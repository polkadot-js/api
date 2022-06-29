// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, IResult, Registry } from '../types';

import { Enum } from './Enum';

/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */
export class Result<O extends Codec, E extends Codec> extends Enum implements IResult<O, E> {
  constructor (registry: Registry, Ok: CodecClass<O> | string, Err: CodecClass<E> | string, value?: unknown) {
    // NOTE This is order-dependent, Ok (with index 0) needs to be first
    // eslint-disable-next-line sort-keys
    super(registry, { Ok, Err }, value);
  }

  public static override with<O extends Codec, E extends Codec> (Types: { Ok: CodecClass<O> | string; Err: CodecClass<E> | string }): CodecClass<Result<O, E>> {
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
    if (!this.isErr) {
      throw new Error('Cannot extract Err value from Ok result, check isErr first');
    }

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
    if (!this.isOk) {
      throw new Error('Cannot extract Ok value from Err result, check isOk first');
    }

    return this.value as O;
  }

  /**
   * @description Checks if the Result has no value
   */
  public override get isEmpty (): boolean {
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
  public override toRawType (): string {
    const Types = this._toRawStruct() as { Ok: unknown; Err: unknown };

    return `Result<${Types.Ok as string},${Types.Err as string}>`;
  }
}
