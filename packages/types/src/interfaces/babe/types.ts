// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Option, Struct } from '../../codec';
import { u32, u64 } from '../../primitive';

/** u64 */
export interface BabeAuthorityWeight extends u64 {}

/** u32 */
export interface BabeBlockWeight extends u32 {}

/** u64 */
export interface BabeWeight extends u64 {}

/** Option<VrfData> */
export interface MaybeVrf extends Option<VrfData> {}

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

/** Enum */
export interface RawBabePreDigest0to159 extends Enum {
  /** 0:: Primary(RawBabePreDigestPrimary0to159) */
  readonly isPrimary: boolean;
  /** RawBabePreDigestPrimary0to159 */
  readonly asPrimary: RawBabePreDigestPrimary0to159;
  /** 1:: Secondary(RawBabePreDigestSecondary0to159) */
  readonly isSecondary: boolean;
  /** RawBabePreDigestSecondary0to159 */
  readonly asSecondary: RawBabePreDigestSecondary0to159;
}

/** Struct */
export interface RawBabePreDigestPrimary extends Struct {
  /** VrfData */
  readonly vrfOutput: VrfData;
  /** VrfProof */
  readonly vrfProof: VrfProof;
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
}

/** Struct */
export interface RawBabePreDigestPrimary0to159 extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** BabeBlockWeight */
  readonly weight: BabeBlockWeight;
  /** VrfData */
  readonly vrfOutput: VrfData;
  /** VrfProof */
  readonly vrfProof: VrfProof;
}

/** Struct */
export interface RawBabePreDigestSecondary extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
}

/** Struct */
export interface RawBabePreDigestSecondary0to159 extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** BabeBlockWeight */
  readonly weight: BabeBlockWeight;
}

/** u64 */
export interface SlotNumber extends u64 {}

/** Uint8Array, Codec */
export interface VrfData extends Uint8Array, Codec {}

/** Uint8Array, Codec */
export interface VrfProof extends Uint8Array, Codec {}
