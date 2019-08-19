// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Struct, Vec } from '../../codec';
import { Bytes } from '../../primitive';
import { AccountId, Hash } from '../runtime';
import { IdentificationTuple } from '../session';

/** Uint8Array & Codec */
export type Kind = Uint8Array & Codec;

/** Struct */
export interface OffenceDetails extends Struct {
  /** Offender */
  readonly offender: Offender;
  /** Vec<Reporter> */
  readonly reporters: Vec<Reporter>;
}

/** IdentificationTuple */
export type Offender = IdentificationTuple;

/** Bytes */
export type OpaqueTimeSlot = Bytes;

/** AccountId */
export type Reporter = AccountId;

/** Hash */
export type ReportIdOf = Hash;
