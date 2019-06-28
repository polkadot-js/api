// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJsonObject } from '@polkadot/types/types';
import { isBoolean, isNumber, isUndefined } from '@polkadot/util';

import Conviction from './Conviction';
import Boolean from '../primitive/Bool';
import Bytes from '../primitive/Bytes';
import Struct from '../codec/Struct';
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
    const { aye, conviction } = Vote.decodeVote(value);

    super(value.toU8a());
  }

  private static decodeVote(value?: any): Decoded {
    if (isBoolean(value)) {
      return {
        aye: new Boolean(value)
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
