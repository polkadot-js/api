// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { u32, u64 } from '@polkadot/types/primitive';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { Hash, Header } from '@polkadot/types/interfaces/runtime';

/** @name AllowedSlots */
export interface AllowedSlots extends Enum {
  readonly isPrimarySlots: boolean;
  readonly isPrimaryAndSecondaryPlainSlots: boolean;
  readonly isPrimaryAndSecondaryVrfSlots: boolean;
}

/** @name BabeAuthorityWeight */
export interface BabeAuthorityWeight extends u64 {}

/** @name BabeBlockWeight */
export interface BabeBlockWeight extends u32 {}

/** @name BabeEquivocationProof */
export interface BabeEquivocationProof extends Struct {
  readonly offender: AuthorityId;
  readonly slotNumber: SlotNumber;
  readonly firstHeader: Header;
  readonly secondHeader: Header;
}

/** @name BabeWeight */
export interface BabeWeight extends u64 {}

/** @name EpochAuthorship */
export interface EpochAuthorship extends Struct {
  readonly primary: Vec<u64>;
  readonly secondary: Vec<u64>;
  readonly secondary_vrf: Vec<u64>;
}

/** @name MaybeRandomness */
export interface MaybeRandomness extends Option<Randomness> {}

/** @name MaybeVrf */
export interface MaybeVrf extends Option<VrfData> {}

/** @name NextConfigDescriptor */
export interface NextConfigDescriptor extends Enum {
  readonly isV0: boolean;
  readonly isV1: boolean;
  readonly asV1: NextConfigDescriptorV1;
}

/** @name NextConfigDescriptorV1 */
export interface NextConfigDescriptorV1 extends Struct {
  readonly c: ITuple<[u64, u64]>;
  readonly allowedSlots: AllowedSlots;
}

/** @name Randomness */
export interface Randomness extends Hash {}

/** @name RawBabePreDigest */
export interface RawBabePreDigest extends Enum {
  readonly isPhantom: boolean;
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimary;
  readonly isSecondaryPlain: boolean;
  readonly asSecondaryPlain: RawBabePreDigestSecondaryPlain;
  readonly isSecondaryVrf: boolean;
  readonly asSecondaryVrf: RawBabePreDigestSecondaryVRF;
}

/** @name RawBabePreDigestCompat */
export interface RawBabePreDigestCompat extends Enum {
  readonly isZero: boolean;
  readonly asZero: u32;
  readonly isOne: boolean;
  readonly asOne: u32;
  readonly isTwo: boolean;
  readonly asTwo: u32;
  readonly isThree: boolean;
  readonly asThree: u32;
}

/** @name RawBabePreDigestPrimary */
export interface RawBabePreDigestPrimary extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly vrfOutput: VrfOutput;
  readonly vrfProof: VrfProof;
}

/** @name RawBabePreDigestPrimaryTo159 */
export interface RawBabePreDigestPrimaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
  readonly vrfOutput: VrfOutput;
  readonly vrfProof: VrfProof;
}

/** @name RawBabePreDigestSecondaryPlain */
export interface RawBabePreDigestSecondaryPlain extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
}

/** @name RawBabePreDigestSecondaryTo159 */
export interface RawBabePreDigestSecondaryTo159 extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly weight: BabeBlockWeight;
}

/** @name RawBabePreDigestSecondaryVRF */
export interface RawBabePreDigestSecondaryVRF extends Struct {
  readonly authorityIndex: u32;
  readonly slotNumber: SlotNumber;
  readonly vrfOutput: VrfOutput;
  readonly vrfProof: VrfProof;
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

/** @name VrfOutput */
export interface VrfOutput extends U8aFixed {}

/** @name VrfProof */
export interface VrfProof extends U8aFixed {}

export type PHANTOM_BABE = 'babe';
