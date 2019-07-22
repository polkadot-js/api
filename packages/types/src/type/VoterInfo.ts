// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Balance from '../primitive/Balance';
import VoteIndex from './VoteIndex';

/**
 * @name VoterInfo
 * @description
 * The activity status of a voter.
 */

export default class VoterInfo extends Struct {
  public constructor (value?: any) {
    super({
      lastActive: VoteIndex,
      lastWin: VoteIndex,
      pot: Balance,
      stake: Balance
    }, value);
  }

  /**
   * @description Last VoteIndex in which this voter assigned (or initialized) approvals.
   */
  public get lastActive (): VoteIndex {
    return this.get('lastActive') as VoteIndex;
  }

  /**
   * @description  Last VoteIndex in which one of this voter's approvals won.
   * Note that `last_win = N` indicates a last win at index `N-1`, hence `last_win = 0` means no win ever.
   */
  public get lastWin (): VoteIndex {
    return this.get('lastWin') as VoteIndex;
  }

  /**
   * @description The amount of stored weight as a result of not winning but changing approvals.
   */
  public get pot (): Balance {
    return this.get('pot') as Balance;
  }

  /**
   * @description Current staked amount. A lock equal to this value always exists.
   */
  public get stake (): Balance {
    return this.get('stake') as Balance;
  }
}
