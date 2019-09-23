// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Option, Struct } from '../../codec';
import { u32, u64 } from '../../primitive';

/** u64 */
export type BabeAuthorityWeight = u64;

/** u32 */
export type BabeBlockWeight = u32;

/** u64 */
export type BabeWeight = u64;

/** Option<VrfData> */
export type MaybeVrf = Option<VrfData>;

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
export type SlotNumber = u64;

/** Uint8Array & Codec */
export type VrfData = Uint8Array & Codec;

/** Uint8Array & Codec */
export type VrfProof = Uint8Array & Codec;
