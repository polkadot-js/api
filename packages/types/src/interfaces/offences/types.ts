// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import type { Bytes } from '@polkadot/types/primitive';
import type { AccountId, Hash } from '@polkadot/types/interfaces/runtime';
import type { IdentificationTuple } from '@polkadot/types/interfaces/session';

/** @name Kind */
export interface Kind extends U8aFixed {}

/** @name OffenceDetails */
export interface OffenceDetails extends Struct {
  readonly offender: Offender;
  readonly reporters: Vec<Reporter>;
}

/** @name Offender */
export interface Offender extends IdentificationTuple {}

/** @name OpaqueTimeSlot */
export interface OpaqueTimeSlot extends Bytes {}

/** @name Reporter */
export interface Reporter extends AccountId {}

/** @name ReportIdOf */
export interface ReportIdOf extends Hash {}

export type PHANTOM_OFFENCES = 'offences';
