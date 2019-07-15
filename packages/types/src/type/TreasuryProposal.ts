// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import AccountId from '../primitive/AccountId';
import Balance from '../primitive/Balance';

/**
 * @name TreasuryProposal
 * @description
 * A Proposal made for Treasury
 */
export default class TreasuryProposal extends Struct {
  public constructor (value: any) {
    super({
      proposer: AccountId,
      value: Balance,
      beneficiary: AccountId,
      bond: Balance
    }, value);
  }

  /**
   * @description The beneficiary
   */
  public get beneficiary (): AccountId {
    return this.get('beneficiary') as AccountId;
  }

  /**
   * @description The bond
   */
  public get bond (): Balance {
    return this.get('bond') as Balance;
  }

  /**
   * @description The proposer
   */
  public get proposer (): AccountId {
    return this.get('proposer') as AccountId;
  }

  /**
   * @description The bond
   */
  public get value (): Balance {
    return this.get('value') as Balance;
  }
}
