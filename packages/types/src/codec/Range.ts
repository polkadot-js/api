// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { Tuple } from '../codec/Tuple';

/**
 * @name Range
 * @description
 * Rust `Range<T>` representation
 */
export class Range<T extends Codec> extends Tuple {
  constructor (registry: Registry, ty: Constructor<T> | keyof InterfaceTypes, value: [T, T]) {
    super(
      registry,
      {
        end: ty,
        start: ty
      },
      value
    );
  }

  /**
   * @description Returns the starting range value
   */
  public get start (): T {
    return this[0] as T;
  }

  /**
   * @description Returns the ending range value
   */
  public get end (): T {
    return this[1] as T;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return `Range<${this.start.toRawType()}>`;
  }
}
