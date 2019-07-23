/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Struct, Vector } from '../../codec';
import { AccountId, Balance, u32 } from '../../primitive';

export interface EraIndex extends u32 {}

export interface Exposure extends Struct {
  readonly total: Compact<Balance>;
  readonly own: Compact<Balance>;
  readonly others: Vector<IndividualExposure>;
}

export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly value: Compact<Balance>;
}
