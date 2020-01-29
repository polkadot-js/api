// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Struct } from '@polkadot/types/codec';
import { u32, u64 } from '@polkadot/types/primitive';

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
  /** 0:: Phantom */
  readonly isPhantom: boolean;
  /** 1:: Primary(RawBabePreDigestPrimary) */
  readonly isPrimary: boolean;
  /** RawBabePreDigestPrimary */
  readonly asPrimary: RawBabePreDigestPrimary;
  /** 2:: Secondary(RawBabePreDigestSecondary) */
  readonly isSecondary: boolean;
  /** RawBabePreDigestSecondary */
  readonly asSecondary: RawBabePreDigestSecondary;
}

/** Enum */
export interface RawBabePreDigestCompat extends Enum {
  /** 0:: Zero(u32) */
  readonly isZero: boolean;
  /** u32 */
  readonly asZero: u32;
  /** 1:: One(u32) */
  readonly isOne: boolean;
  /** u32 */
  readonly asOne: u32;
  /** 2:: Two(u32) */
  readonly isTwo: boolean;
  /** u32 */
  readonly asTwo: u32;
}

/** Struct */
export interface RawBabePreDigestPrimary extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** VrfData */
  readonly vrfOutput: VrfData;
  /** VrfProof */
  readonly vrfProof: VrfProof;
}

/** Struct */
export interface RawBabePreDigestPrimaryTo159 extends Struct {
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
export interface RawBabePreDigestSecondaryTo159 extends Struct {
  /** u32 */
  readonly authorityIndex: u32;
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** BabeBlockWeight */
  readonly weight: BabeBlockWeight;
}

/** Enum */
export interface RawBabePreDigestTo159 extends Enum {
  /** 0:: Primary(RawBabePreDigestPrimaryTo159) */
  readonly isPrimary: boolean;
  /** RawBabePreDigestPrimaryTo159 */
  readonly asPrimary: RawBabePreDigestPrimaryTo159;
  /** 1:: Secondary(RawBabePreDigestSecondaryTo159) */
  readonly isSecondary: boolean;
  /** RawBabePreDigestSecondaryTo159 */
  readonly asSecondary: RawBabePreDigestSecondaryTo159;
}

/** u64 */
export interface SlotNumber extends u64 {}

/** Uint8Array, Codec */
export interface VrfData extends Uint8Array, Codec {}

/** Uint8Array, Codec */
export interface VrfProof extends Uint8Array, Codec {}
