// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import AccountId from '../primitive/AccountId';
import MemberCount from './MemberCount';
import ProposalIndex from './ProposalIndex';

export default class Votes extends Struct {
  public constructor (value: any) {
    super({
      index: ProposalIndex,
      threshold: MemberCount,
      ayes: Vector.with(AccountId),
      nays: Vector.with(AccountId)
    }, value);
  }

  /**
   * @description The current set of voters that approved it.
   */
  public get ayes (): Vector<AccountId> {
    return this.get('ayes') as Vector<AccountId>;
  }

  /**
   * @description The proposal's unique index.
   */
  public get index (): ProposalIndex {
    return this.get('index') as ProposalIndex;
  }

  /**
   * @description The current set of voters that rejected it.
   */
  public get nays (): Vector<AccountId> {
    return this.get('nays') as Vector<AccountId>;
  }

  /**
   * @description The number of approval votes that are needed to pass the motion.
   */
  public get threshold (): MemberCount {
    return this.get('threshold') as MemberCount;
  }
}
