// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean, isObject, u8aConcat } from '@polkadot/util';

import Conviction from './Conviction';
import Boolean from '../primitive/Bool';
import Bytes from '../primitive/Bytes';
import I8 from '../primitive/I8';
import { Struct, Compact } from '../codec';

// type Decoded = {
//   aye: Boolean | I8,
//   conviction?: Conviction
// };

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

    if (decoded.aye instanceof I8) {
      // I8
      super(decoded.aye.toString());
    } else {
      // Struct<aye: bool, conviction: enum>
      super(decoded.toString());
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
    } else if (value instanceof Boolean) {
      return Vote.decodeVote(value.valueOf());
    } else if (isObject(value)) {
      // decode as a struct { bool, string }
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
