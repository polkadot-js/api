// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';

import BN from 'bn.js';

import { UIntBitLength } from './AbstractInt';
import UInt from './UInt';

export const MAX_BILL = 1000000000;
export const MAX_MILL = 1000000;

const ZERO = new BN(0);

/**
 * @name PerX
 * @description
 * A simple wrapper around UInt that allows for Perbill and Permill values
 */
export default class PerX extends UInt {
  private _maxValue: number;

  constructor (registry: Registry, value: any | undefined, maxValue: number, bitLength: UIntBitLength = 32) {
    super(registry, value, bitLength);

    this._maxValue = maxValue;
  }

  /**
   * @description Convert the value to a percentage
   */
  public toPercentage (): number {
    return (this.toBn().toNumber() / this._maxValue) * 100;
  }

  /**
   * @description Sets the value from a percentage
   */
  public fromPercentage (value: number): this {
    this.iand(ZERO).iadd(new BN(
      Math.min(
        // cap to our maximum value
        this._maxValue,
        Math.max(
          // don't allow negatives
          0,
          Math.ceil((value / 100) * this._maxValue)
        )
      )
    ));

    return this;
  }
}
