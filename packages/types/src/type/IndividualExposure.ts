// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import AccountId from '../primitive/AccountId';
import Balance from './Balance';

/**
 * @name IndividualExposure
 * @description
 * The Substrate IndividualExposure for staking
 */
export default class IndividualExposure extends Struct {
  constructor (value?: any) {
    super({
      who: AccountId,
      value: Compact.with(Balance)
    }, value);
  }

  /**
   * @description The value
   */
  get value (): Balance {
    return (this.get('value') as Compact).toBn() as Balance;
  }

  /**
   * @description The AccountId
   */
  get who (): AccountId {
    return this.get('who') as AccountId;
  }
}
