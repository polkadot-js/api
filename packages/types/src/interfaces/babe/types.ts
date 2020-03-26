// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { u32, u64 } from '@polkadot/types/primitive';
import { Hash } from '@polkadot/types/interfaces/runtime';

/** @name BabeAuthorityWeight */
export interface BabeAuthorityWeight extends u64 {}

/** @name BabeBlockWeight */
export interface BabeBlockWeight extends u32 {}

/** @name BabeWeight */
export interface BabeWeight extends u64 {}

/** @name EpochAuthorship */
export interface EpochAuthorship extends Struct {
  readonly primary: Vec<u64>;
  readonly secondary: Vec<u64>;
}

/** @name MaybeVrf */
export interface MaybeVrf extends Option<VrfData> {}

/** @name Randomness */
export interface Randomness extends Hash {}

/** @name RawBabePreDigest */
export interface RawBabePreDigest extends Enum {
  readonly isPhantom: boolean;
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimary;
  readonly isSecondary: boolean;
  readonly asSecondary: RawBabePreDigestSecondary;
}

/** @name RawBabePreDigestCompat */
export interface RawBabePreDigestCompat extends Enum {
  readonly isZero: boolean;
  readonly asZero: u32;
  readonly isOne: boolean;
  readonly asOne: u32;
  readonly isTwo: boolean;
  readonly asTwo: u32;
}

/** @name RawBabePreDigestPrimary */
export interface RawBabePreDigestPrimary extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly vrfOutput: VrfData;
  readonly vrfProof: VrfProof;
}

/** @name RawBabePreDigestPrimaryTo159 */
export interface RawBabePreDigestPrimaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
  readonly vrfOutput: VrfData;
  readonly vrfProof: VrfProof;
}

/** @name RawBabePreDigestSecondary */
export interface RawBabePreDigestSecondary extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
}

/** @name RawBabePreDigestSecondaryTo159 */
export interface RawBabePreDigestSecondaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
}

/** @name RawBabePreDigestTo159 */
export interface RawBabePreDigestTo159 extends Enum {
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimaryTo159;
  readonly isSecondary: boolean;
  readonly asSecondary: RawBabePreDigestSecondaryTo159;
}

/** @name SlotNumber */
export interface SlotNumber extends u64 {}

/** @name VrfData */
export interface VrfData extends U8aFixed {}

/** @name VrfProof */
export interface VrfProof extends U8aFixed {}

export type PHANTOM_BABE = 'babe';
