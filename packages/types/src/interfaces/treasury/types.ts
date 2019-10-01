// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct } from '@polkadot/types/codec';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface TreasuryProposal extends Struct {
  /** AccountId */
  readonly proposer: AccountId;
  /** Balance */
  readonly value: Balance;
  /** AccountId */
  readonly beneficiary: AccountId;
  /** Balance */
  readonly bond: Balance;
}
