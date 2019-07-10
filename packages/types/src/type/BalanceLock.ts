// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Balance from '../primitive/Balance';
import BlockNumber from './BlockNumber';
import LockIdentifier from './LockIdentifier';
import WithdrawReasons from './WithdrawReasons';

/**
 * @name BalanceLock
 * @description
 * The Substrate BalanceLock for staking
 */
export default class BalanceLock extends Struct {
  public constructor (value?: any) {
    super({
      id: LockIdentifier,
      amount: Balance,
      until: BlockNumber,
      reasons: WithdrawReasons
    }, value);
  }

  /**
   * @description The amount
   */
  public get amount (): Balance {
    return this.get('amount') as Balance;
  }

  /**
   * @description The lock id
   */
  public get id (): LockIdentifier {
    return this.get('id') as LockIdentifier;
  }

  /**
   * @description The reasons
   */
  public get reasons (): WithdrawReasons {
    return this.get('reasons') as WithdrawReasons;
  }

  /**
   * @description Until when this is available
   */
  public get until (): BlockNumber {
    return this.get('until') as BlockNumber;
  }
}
