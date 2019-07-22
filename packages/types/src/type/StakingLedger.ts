// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import AccountId from '../primitive/AccountId';
import Balance from '../primitive/Balance';
import BlockNumber from './BlockNumber';
import UnlockChunk from './UnlockChunk';

/**
 * @name StakingLedger
 * @description
 * The ledger of a (bonded) stash
 */
export default class StakingLedger extends Struct {
  public constructor (value?: any) {
    super({
      stash: AccountId,
      total: Compact.with(Balance),
      active: Compact.with(Balance),
      unlocking: Vector.with(UnlockChunk)
    }, value);
  }

  /**
   * @description The total amount of the stash's balance that will be at stake in any forthcoming rounds
   */
  public get active (): Balance {
    return (this.get('active') as Compact<BlockNumber>).unwrap();
  }

  /**
   * @description The stash account whose balance is actually locked and at stake
   */
  public get stash (): AccountId {
    return this.get('stash') as AccountId;
  }

  /**
   * @description The total amount of the stash's balance that we are currently accounting for. It's just `active` plus all the `unlocking` balances
   */
  public get total (): Balance {
    return (this.get('total') as Compact<Balance>).unwrap();
  }

  /**
   * @description Any balance that is becoming free, which may eventually be transferred out of the stash (assuming it doesn't get slashed first)
   */
  public get unlocking (): Vector<UnlockChunk> {
    return this.get('unlocking') as Vector<UnlockChunk>;
  }
}
