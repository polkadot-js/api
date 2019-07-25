/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Struct, Vector } from '../../codec';
import { AccountId, Balance, Bytes, Fixed64, H256, H512, u32, u64, u8 } from '../../primitive';

export interface AccountIdOf extends AccountId {}

export interface BalanceCompact extends Compact<Balance> {}

export interface BalanceOf extends Balance {}

export interface BlockNumber extends u64 {}

export interface Ed25519Signature extends Signature {}

export interface Hash extends H256 {}

export interface Index extends u64 {}

export interface IndexCompact extends Compact<u64> {}

export interface Justification extends Bytes {}

export interface KeyTypeId extends u32 {}

export interface LockIdentifier extends Vector<u8> {}

export interface Perbill extends u32 {}

export interface Permill extends u32 {}

export interface SessionKeys extends Struct {
  readonly ed25519: AccountId;
}

export interface Signature extends H512 {}

export interface Sr25519Signature extends Signature {}

export interface ValidatorId extends AccountId {}

export interface Weight extends u32 {}

export interface WeightMultiplier extends Fixed64 {}
