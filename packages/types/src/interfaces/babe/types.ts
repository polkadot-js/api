// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '../../codec';
import { H256, u32, u64 } from '../../primitive';

/** u64 */
export interface BabeAuthorityWeight extends u64 {}

/** u32 */
export interface BabeBlockWeight extends u32 {}

/** u64 */
export interface BabeWeight extends u64 {}

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
export interface SlotNumber extends u64 {}
