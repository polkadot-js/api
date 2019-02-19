// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Balance from './Balance';

/**
 * @name VestingSchedule
 * @description Struct to encode the vesting schedule of an individual account
 */
export default class VestingSchedule extends Struct {
  constructor (value?: any) {
    super({
      offset: Balance,
      perBlock: Balance
    }, value);
  }

  /**
   * @description The offset as [[Balance]]
   */
  get offset (): Balance {
    return this.get('offset') as Balance;
  }

  /**
   * @description The perBlock value as [[Balance]]
   */
  get perBlock (): Balance {
    return this.get('perBlock') as Balance;
  }
}
