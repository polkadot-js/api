// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Option, Struct } from '@polkadot/types/codec';
import { Bytes, u32, u8 } from '@polkadot/types/primitive';
import { BlockNumber, Call } from '@polkadot/types/interfaces/runtime';

/** @name Scheduled */
export interface Scheduled extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: SchedulePriority;
  readonly call: Call;
  readonly maybePeriodic: Option<SchedulePeriod>;
}

/** @name SchedulePeriod */
export interface SchedulePeriod extends ITuple<[BlockNumber, u32]> {}

/** @name SchedulePriority */
export interface SchedulePriority extends u8 {}

/** @name TaskAddress */
export interface TaskAddress extends ITuple<[BlockNumber, u32]> {}

export type PHANTOM_SCHEDULER = 'scheduler';
