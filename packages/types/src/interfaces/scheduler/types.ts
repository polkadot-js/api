// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Option, Struct } from '@polkadot/types/codec';
import { Bytes, u32, u8 } from '@polkadot/types/primitive';
import { BlockNumber, Call } from '@polkadot/types/interfaces/runtime';

/** @name Period */
export interface Period extends ITuple<[BlockNumber, u32]> {}

/** @name Priority */
export interface Priority extends u8 {}

/** @name Scheduled */
export interface Scheduled extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: SchedulePriority;
  readonly call: Call;
  readonly maybePeriodic: Option<SchedulePeriod>;
}

/** @name SchedulePeriod */
export interface SchedulePeriod extends Period {}

/** @name SchedulePriority */
export interface SchedulePriority extends Priority {}

/** @name TaskAddress */
export interface TaskAddress extends ITuple<[BlockNumber, u32]> {}

export type PHANTOM_SCHEDULER = 'scheduler';
