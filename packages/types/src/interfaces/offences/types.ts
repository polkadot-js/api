// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes } from '@polkadot/types/primitive';
import { AccountId, Hash } from '@polkadot/types/interfaces/runtime';
import { IdentificationTuple } from '@polkadot/types/interfaces/session';

/** Uint8Array, Codec */
export interface Kind extends Uint8Array, Codec {}

/** Struct */
export interface OffenceDetails extends Struct {
  /** Offender */
  readonly offender: Offender;
  /** Vec<Reporter> */
  readonly reporters: Vec<Reporter>;
}

/** IdentificationTuple */
export interface Offender extends IdentificationTuple {}

/** Bytes */
export interface OpaqueTimeSlot extends Bytes {}

/** AccountId */
export interface Reporter extends AccountId {}

/** Hash */
export interface ReportIdOf extends Hash {}
