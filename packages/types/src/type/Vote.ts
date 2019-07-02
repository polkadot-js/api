// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean, isNumber, isObject } from '@polkadot/util';

import Conviction from './Conviction';
import Struct from '../codec/Struct';
import U8a from '../codec/U8a';
import Boolean from '../primitive/Bool';
import I8 from '../primitive/I8';
import { AnyJsonObject } from '../types';

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends U8a {
  private _aye: Boolean | I8;
  private _conviction?: Conviction;

  constructor (value?: any) {
    const decoded = Vote.decodeVote(value);

    if (decoded.aye instanceof I8) {
      // I8, i.e. V1 vote type
      super(decoded.aye.toU8a());
    } else {
      // Struct<aye: bool, conviction: enum>, i.e. V2 vote type
      super(decoded.toU8a());
    }

    this._aye = decoded.aye;
    this._conviction = decoded.conviction;
  }

  private static decodeVote (value?: any): any {
    if (isBoolean(value)) {
      if (value === true) {
        return { aye: new I8(-1) };
      } else {
        return { aye: new I8(0) };
      }
    } else if (isNumber(value)) {
      if (value < 0) {
        return { aye: new I8(-1) };
      } else {
        return { aye: new I8(0) };
      }
    } else if (value instanceof Boolean) {
      return Vote.decodeVote(value.valueOf());
    } else if (isObject(value)) {
      return new Struct({
        aye: Boolean,
        conviction: Conviction
      }, {
        aye: isBoolean(value.aye) ? new Boolean(value.aye) : value.aye,
        conviction: value.conviction
      });
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
    if (this._aye instanceof I8) {
      return this._aye.ltn(0);
    } else {
      return this._aye.eq(true);
    }
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  get isNay (): boolean {
    return !this.isAye;
  }

  toNumber (): number {
    if (this._aye instanceof I8) {
      // @ts-ignore _aye is I8 if version is 1
      return this._aye.toNumber();
    } else {
      return this._aye.eq(true) ? -1 : 0;
    }
  }
}
