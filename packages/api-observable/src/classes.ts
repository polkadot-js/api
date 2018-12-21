// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { AccountId, Balance, BlockNumber, PropIndex, Proposal, ReferendumIndex, VoteThreshold } from '@polkadot/types/index';
import { Constructor } from '@polkadot/types/types';
import { Struct, Tuple, Vector } from '@polkadot/types/codec';

const ProposalStruct: Constructor<Struct<any>> = Struct.with({ id: PropIndex, proposal: Proposal, address: AccountId });

export class RxProposal extends ProposalStruct {
  constructor (value: Tuple) {
    super({
      id: value[0],
      proposal: value[1],
      address: value[2]
    });
  }

  get address (): AccountId {
    return this.get('address') as AccountId;
  }

  get id (): PropIndex {
    return this.get('id') as PropIndex;
  }

  get proposal (): Proposal {
    return this.get('proposal') as Proposal;
  }
}

const DepositStruct: Constructor<Struct<any>> = Struct.with({ balance: Balance, addresses: Vector.with(AccountId) });

export class RxProposalDeposits extends DepositStruct {
  constructor (value: Tuple) {
    super({
      balance: value[0],
      addresses: value[1]
    });
  }

  get addresses (): Vector<AccountId> {
    return this.get('addresses') as Vector<AccountId>;
  }

  get balance (): Balance {
    return this.get('balance') as Balance;
  }
}
