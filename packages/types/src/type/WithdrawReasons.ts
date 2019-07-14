// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Set from '../codec/Set';

/**
 * @name WithdrawReasons
 * @description
 * The Substrate WithdrawReasons for staking
 */
export default class WithdrawReasons extends Set {
  public constructor (value: any = []) {
    super({
      TransactionPayment: 0b00000001,
      Transfer: 0b00000010,
      Reserve: 0b00000100,
      Fee: 0b00001000
    }, value);
  }

  /**
   * @description In order to reserve some funds for a later return or repatriation
   */
  public get isReserve (): boolean {
    return this.strings.includes('Reserve');
  }

  /**
   * @description In order to pay for (system) transaction costs
   */
  public get isTransactionPayment (): boolean {
    return this.strings.includes('TransactionPayment');
  }

  /**
   * @description In order to transfer ownership
   */
  public get isTransfer (): boolean {
    return this.strings.includes('Transfer');
  }

  /**
   * @description /// In order to pay some other (higher-level) fees.
   */
  public get isFee (): boolean {
    return this.strings.includes('Fee');
  }
}
