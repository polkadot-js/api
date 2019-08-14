// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '../../codec';
import { H256, u32, u64 } from '../../primitive';

/** u64 */
export type BabeAuthorityWeight = u64;

/** u32 */
export type BabeBlockWeight = u32;

/** u64 */
export type BabeWeight = u64;

/** Enum */
export interface RawBabePreDigest extends Enum {
  /** 0:: Primary(RawBabePreDigestPrimary) */
  readonly isPrimary: boolean;
  /** RawBabePreDigestPrimary */
  readonly asPrimary: RawBabePreDigestPrimary;
  /** 1:: Secondary(RawBabePreDigestSecondary) */
  readonly isSecondary: boolean;
  /** RawBabePreDigestSecondary */
  readonly asSecondary: RawBabePreDigestSecondary;
}

/** Struct */
export interface RawBabePreDigestPrimary extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** BabeBlockWeight */
  readonly weight: BabeBlockWeight;
  /** H256 */
  readonly vrfOutput: H256;
  /** H256 */
  readonly vrfProof: H256;
}

/** Struct */
export interface RawBabePreDigestSecondary extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** BabeBlockWeight */
  readonly weight: BabeBlockWeight;
}

/** u64 */
export type SlotNumber = u64;
