// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface Multisig extends Struct {
  /** Timepoint */
  readonly when: Timepoint;
  /** Balance */
  readonly deposit: Balance;
  /** AccountId */
  readonly depositor: AccountId;
  /** Vec<AccountId> */
  readonly approvals: Vec<AccountId>;
}

/** Struct */
export interface Timepoint extends Struct {
  /** BlockNumber */
  readonly height: BlockNumber;
  /** u32 */
  readonly index: u32;
}
