// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, INumber, Registry } from '../types';

import { Tuple } from '../codec/Tuple';

type RangeType = 'Range' | 'RangeInclusive';

/**
 * @name Range
 * @description
 * Rust `Range<T>` representation
 */
export class Range<T extends INumber = INumber> extends Tuple {
  #rangeType: RangeType;

  constructor (registry: Registry, type: Constructor<T> | string, value?: [T, T] | Uint8Array, rangeType: RangeType = 'Range') {
    super(registry, { end: type, start: type }, value);

    this.#rangeType = rangeType;
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
    return `${this.#rangeType}<${this.start.toRawType()}>`;
  }
}

export class RangeInclusive<T extends INumber = INumber> extends Range<T> {
  constructor (registry: Registry, type: Constructor<T> | string, value?: [T, T] | Uint8Array) {
    super(registry, type, value, 'RangeInclusive');
  }
}
