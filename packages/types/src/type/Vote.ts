// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean, isNumber, isObject, u8aToBn, isU8a, bnToU8a, u8aConcat } from '@polkadot/util';

import Conviction from './Conviction';
import U8a from '../codec/U8a';
import Boolean from '../primitive/Bool';

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends U8a {
  private _aye: Boolean;
  private _conviction?: Conviction;

  constructor (value?: any) {
    const decoded = Vote.decodeVote(value);

    super(decoded);

    this._aye = new Boolean(decoded[0]);
    this._conviction = new Conviction();
  }

  private static decodeVote (value?: any): Uint8Array {
    if (isBoolean(value)) {
      return value ? new Uint8Array([-1]) : new Uint8Array([0]);
    } else if (value instanceof Boolean) {
      return Vote.decodeVote(value.valueOf());
    } else if (isNumber(value)) {
      return value < 0 ? bnToU8a(1, { bitLength: -1, isLe: true, isNegative: true }) : bnToU8a(0);
    } else if (isObject(value)) {
      const aye = new Uint8Array([value.aye]); // 1 byte

      const index = value.conviction.toNumber();
      const conviction = new Uint8Array((index >>> 0).toString(2).split('').map(Number)); // 1 to 3 bytes
      const padding = new Uint8Array(7 - conviction.length); // 4 - 6 bytes

      return u8aConcat(aye, u8aConcat(padding, conviction));
    } else if (isU8a(value)) {
      return value;
    }

    throw new Error(`Unable to convert input ${value} to Vote`);
  }

  /**
   * @description returns a V2 conviction
   */
  get conviction (): Conviction {
    return this._conviction as Conviction;
  }

  /**
   * @description true if the wrapped value is a positive vote
   */
  get isAye (): boolean {
    return this._aye.eq(true);
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  get isNay (): boolean {
    return !this.isAye;
  }

  toNumber (): number {
    return u8aToBn(this, { isNegative: true }).toNumber();
  }
}
