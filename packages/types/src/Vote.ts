// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean } from '@polkadot/util';

import I8 from './I8';

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends I8 {
  constructor (value?: any) {
    super(Vote.decodeVote(value));
  }

  private static decodeVote (value?: any): any {
    if (isBoolean(value)) {
      return value ? -1 : 0;
    } else if (value instanceof Boolean) {
      return Vote.decodeVote(value.valueOf());
    }

    return value;
  }

  /**
   * @description true is the wrapped value is a positive vote
   */
  get isAye (): boolean {
    return this.ltn(0);
  }

  /**
   * @description true is the wrapped value is a negative vote
   */
  get isNay (): boolean {
    return !this.isAye;
  }
}
