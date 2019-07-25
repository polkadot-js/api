/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Struct, Vector } from '../../codec';
import { AccountId } from '../../primitive';
import { Balance } from '../runtime/types';

export interface TreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly value: Balance;
  readonly beneficiary: AccountId;
  readonly bond: Balance;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    TreasuryProposal: TreasuryProposal;
    'Option<TreasuryProposal>': Option<TreasuryProposal>;
    'Vec<TreasuryProposal>': Vector<TreasuryProposal>;
  }
}
