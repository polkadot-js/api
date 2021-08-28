// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, Constructor, INumber, Registry } from '../types';

import { Tuple } from '../codec/Tuple';

type RangeType = 'Range' | 'RangeInclusive';

/**
 * @name Range
 * @description
 * Rust `Range<T>` representation
 */
export class Range<T extends INumber> extends Tuple {
  #rangeName: RangeType;

  constructor (registry: Registry, Type: Constructor<T> | string, value?: AnyTuple, rangeName: RangeType = 'Range') {
    super(registry, { end: Type, start: Type }, value);

    this.#rangeName = rangeName;
  }

  public static override with <T extends INumber> (Types: Constructor<T> | string): Constructor<Range<T>> {
    return class extends Range<T> {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Types, value);
      }
    };
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
    return `${this.#rangeName}<${this.start.toRawType()}>`;
  }
}

export class RangeInclusive<T extends INumber = INumber> extends Range<T> {
  constructor (registry: Registry, type: Constructor<T> | string, value?: AnyTuple) {
    super(registry, type, value, 'RangeInclusive');
  }

  public static override with <T extends INumber> (Types: Constructor<T> | string): Constructor<RangeInclusive<T>> {
    return class extends RangeInclusive<T> {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Types, value);
      }
    };
  }
}
