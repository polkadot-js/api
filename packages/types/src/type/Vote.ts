// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean, isObject, u8aConcat } from '@polkadot/util';

import Conviction from './Conviction';
import Boolean from '../primitive/Bool';
import Bytes from '../primitive/Bytes';
import I8 from '../primitive/I8';

type Decoded = {
  aye: Boolean | I8,
  conviction?: Conviction
};

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends Bytes {
  private _aye?: Boolean | I8;
  private _conviction?: Conviction;

  constructor (value?: any) {
    const decoded = Vote.decodeVote(value);

    const { aye, conviction } = decoded;

    // either construct with aye: I8
    if (aye instanceof I8) {
      super(aye.toU8a());
    } else { // or Struct<aye: bool, conviction: enum>
      super(Object.entries(decoded));
    }

    this._aye = aye;
    this._conviction = conviction;
  }

  private static decodeVote (value?: any): Decoded {
    if (isBoolean(value)) {
      return {
        aye: new I8(value ? -1 : 0)
      };
    } else if (value instanceof Boolean) {
      return Vote.decodeVote(value.valueOf());
    } else if (isObject(value)) {
      // decode as a struct { bool, string }
      return {
        aye: isBoolean(value.aye) ? value.aye : value.aye.valueOf(),
        conviction: value.conviction
      };
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
    return this._aye ? true : false;
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  get isNay (): boolean {
    return !this.isAye;
  }

  toNumber (): number {
    return this._aye ? -1 : 0;
  }
}
