// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Struct, Vec } from '../../codec';
import { AccountId } from '../../primitive';
import { Balance } from '../runtime/types';

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
