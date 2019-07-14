// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean, isNumber, isObject, isU8a, isUndefined } from '@polkadot/util';

import Conviction from './Conviction';
import U8a from '../codec/U8a';
import Bool from '../primitive/Bool';

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends U8a {
  private _aye: Bool;

  private _conviction: Conviction; // for V1, default to None

  public constructor (value?: any) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101
    const decoded = Vote.decodeVote(value);

    super(decoded);

    const msb = decoded[0] >> 7;
    const conviction = decoded[0] & 0b01111111;

    this._aye = new Bool(msb);
    this._conviction = new Conviction(conviction);
  }

  private static decodeVote (value?: any): Uint8Array {
    if (isBoolean(value)) {
      return value
        ? new Uint8Array([0b10000000])
        : new Uint8Array([0b0]);
    } else if (value instanceof Bool) {
      return Vote.decodeVote(value.valueOf());
    } else if (isNumber(value)) {
      return value < 0
        ? new Uint8Array([0b10000000])
        : new Uint8Array([0b0]);
    } else if (isObject(value) && !isUndefined(value.aye) && !isUndefined(value.conviction)) {
      const aye = new Bool(value.aye);
      const convictionIndex = new Conviction(value.conviction).index;

      const result = convictionIndex | (aye.eq(true) ? 0b1 << 7 : 0b0);

      return new Uint8Array([result]);
    } else if (isU8a(value) && value.length > 0) {
      return value;
    }

    throw new Error(`Unable to convert input ${value} to Vote`);
  }

  /**
   * @description returns a V2 conviction
   */
  public get conviction (): Conviction {
    return this._conviction;
  }

  /**
   * @description true if the wrapped value is a positive vote
   */
  public get isAye (): boolean {
    return this._aye.eq(true);
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  public get isNay (): boolean {
    return !this.isAye;
  }
}
