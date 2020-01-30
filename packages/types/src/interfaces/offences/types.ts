// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes } from '@polkadot/types/primitive';
import { AccountId, Hash } from '@polkadot/types/interfaces/runtime';
import { IdentificationTuple } from '@polkadot/types/interfaces/session';

/**
 * @name Kind
 * @description extends [[Uint8Array, Codec]]
 */
export interface Kind extends Uint8Array, Codec {}

/**
 * @name OffenceDetails
 * @description extends [[Struct]]
 */
export interface OffenceDetails extends Struct {
  readonly offender: Offender;
  readonly reporters: Vec<Reporter>;
}

/**
 * @name Offender
 * @description extends [[IdentificationTuple]]
 */
export interface Offender extends IdentificationTuple {}

/**
 * @name OpaqueTimeSlot
 * @description extends [[Bytes]]
 */
export interface OpaqueTimeSlot extends Bytes {}

/**
 * @name Reporter
 * @description extends [[AccountId]]
 */
export interface Reporter extends AccountId {}

/**
 * @name ReportIdOf
 * @description extends [[Hash]]
 */
export interface ReportIdOf extends Hash {}
