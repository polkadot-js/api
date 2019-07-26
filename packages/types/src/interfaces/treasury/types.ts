// Auto-generated via `yarn build:interfaces`, do not edit

import { Option, Struct, Vec } from '../../codec';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    TreasuryProposal: TreasuryProposal;
    'Option<TreasuryProposal>': Option<TreasuryProposal>;
    'Vec<TreasuryProposal>': Vec<TreasuryProposal>;
  }
}
