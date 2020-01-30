// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Struct } from '@polkadot/types/codec';
import { u32, u64 } from '@polkadot/types/primitive';

/**
 * @name BabeAuthorityWeight
 * @description extends [[u64]]
 */
export interface BabeAuthorityWeight extends u64 {}

/**
 * @name BabeBlockWeight
 * @description extends [[u32]]
 */
export interface BabeBlockWeight extends u32 {}

/**
 * @name BabeWeight
 * @description extends [[u64]]
 */
export interface BabeWeight extends u64 {}

/**
 * @name MaybeVrf
 * @description extends [[Option<VrfData>]]
 */
export interface MaybeVrf extends Option<VrfData> {}

/**
 * @name RawBabePreDigest
 * @description extends [[Enum]]
 */
export interface RawBabePreDigest extends Enum {
  readonly isPhantom: boolean;
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimary;
  readonly isSecondary: boolean;
  readonly asSecondary: RawBabePreDigestSecondary;
}

/**
 * @name RawBabePreDigestCompat
 * @description extends [[Enum]]
 */
export interface RawBabePreDigestCompat extends Enum {
  readonly isZero: boolean;
  readonly asZero: u32;
  readonly isOne: boolean;
  readonly asOne: u32;
  readonly isTwo: boolean;
  readonly asTwo: u32;
}

/**
 * @name RawBabePreDigestPrimary
 * @description extends [[Struct]]
 */
export interface RawBabePreDigestPrimary extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly vrfOutput: VrfData;
  readonly vrfProof: VrfProof;
}

/**
 * @name RawBabePreDigestPrimaryTo159
 * @description extends [[Struct]]
 */
export interface RawBabePreDigestPrimaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
  readonly vrfOutput: VrfData;
  readonly vrfProof: VrfProof;
}

/**
 * @name RawBabePreDigestSecondary
 * @description extends [[Struct]]
 */
export interface RawBabePreDigestSecondary extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
}

/**
 * @name RawBabePreDigestSecondaryTo159
 * @description extends [[Struct]]
 */
export interface RawBabePreDigestSecondaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
}

/**
 * @name RawBabePreDigestTo159
 * @description extends [[Enum]]
 */
export interface RawBabePreDigestTo159 extends Enum {
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimaryTo159;
  readonly isSecondary: boolean;
  readonly asSecondary: RawBabePreDigestSecondaryTo159;
}

/**
 * @name SlotNumber
 * @description extends [[u64]]
 */
export interface SlotNumber extends u64 {}

/**
 * @name VrfData
 * @description extends [[Uint8Array, Codec]]
 */
export interface VrfData extends Uint8Array, Codec {}

/**
 * @name VrfProof
 * @description extends [[Uint8Array, Codec]]
 */
export interface VrfProof extends Uint8Array, Codec {}
