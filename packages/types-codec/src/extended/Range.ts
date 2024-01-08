// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, CodecClass, INumber, Registry } from '../types/index.js';

import { Tuple } from '../base/Tuple.js';

type RangeType = 'Range' | 'RangeInclusive';

interface Options {
  rangeName?: RangeType;
}

/**
 * @name Range
 * @description
 * Rust `Range<T>` representation
 */
export class Range<T extends INumber> extends Tuple {
  #rangeName: RangeType;

  constructor (registry: Registry, Type: CodecClass<T> | string, value?: AnyTuple, { rangeName = 'Range' }: Options = {}) {
    super(registry, [Type, Type], value);

    this.#rangeName = rangeName;
  }

  public static override with <T extends INumber> (Type: CodecClass<T> | string): CodecClass<Range<T>> {
    return class extends Range<T> {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Type, value);
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
