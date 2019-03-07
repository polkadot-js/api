// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Balance from './Balance';
import BlockNumber from './BlockNumber';

/**
 * @name UnlockChunk
 * @description
 * Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked
 */
export default class UnlockChunk extends Struct {
  constructor (value?: any) {
    super({
      value: Compact.with(Balance),
      era: Compact.with(BlockNumber)
    }, value);
  }

  /**
   * @description Era number at which point it'll be unlocked
   */
  get era (): BlockNumber {
    return (this.get('era') as Compact).toBn() as BlockNumber;
  }

  /**
   * @description Amount of funds to be unlocked
   */
  get value (): Balance {
    return (this.get('value') as Compact).toBn() as Balance;
  }
}
