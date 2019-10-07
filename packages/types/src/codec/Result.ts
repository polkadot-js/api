// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, InterfaceTypes } from '../types';

import { assert } from '@polkadot/util';

import Enum from './Enum';

/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */
export default class Result<O extends Codec, E extends Codec> extends Enum {
  public constructor (Ok: Constructor | InterfaceTypes, Error: Constructor | InterfaceTypes, value?: any) {
    super({ Ok, Error }, value);
  }

  public static with<O extends Codec, E extends Codec> (Types: { Ok: Constructor | InterfaceTypes;Error: Constructor | InterfaceTypes }): Constructor<Result<O, E>> {
    return class extends Result<O, E> {
      public constructor (value?: any) {
        super(Types.Ok, Types.Error, value);
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
    return this.index === 0;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    const Types = this.toRawStruct() as { Ok: any; Error: any };

    return `Result<${Types.Ok},${Types.Error}>`;
  }
}
