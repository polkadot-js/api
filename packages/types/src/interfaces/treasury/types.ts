// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct } from '../../codec';
import { AccountId } from '../../primitive';
import { Balance } from '../runtime';

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
