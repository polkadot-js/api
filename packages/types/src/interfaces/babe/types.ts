// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { Hash, Header, Slot } from '@polkadot/types/interfaces/runtime';

/** @name AllowedSlots */
export interface AllowedSlots extends Enum {
  readonly isPrimarySlots: boolean;
  readonly isPrimaryAndSecondaryPlainSlots: boolean;
  readonly isPrimaryAndSecondaryVRFSlots: boolean;
  readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
}

/** @name BabeAuthorityWeight */
export interface BabeAuthorityWeight extends u64 {}

/** @name BabeBlockWeight */
export interface BabeBlockWeight extends u32 {}

/** @name BabeEpochConfiguration */
export interface BabeEpochConfiguration extends Struct {
  readonly c: ITuple<[u64, u64]>;
  readonly allowedSlots: AllowedSlots;
}

/** @name BabeEquivocationProof */
export interface BabeEquivocationProof extends Struct {
  readonly offender: AuthorityId;
  readonly slotNumber: SlotNumber;
  readonly firstHeader: Header;
  readonly secondHeader: Header;
}

/** @name BabeGenesisConfiguration */
export interface BabeGenesisConfiguration extends Struct {
  readonly slotDuration: u64;
  readonly epochLength: u64;
  readonly c: ITuple<[u64, u64]>;
  readonly genesisAuthorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>;
  readonly randomness: Randomness;
  readonly allowedSlots: AllowedSlots;
}

/** @name BabeGenesisConfigurationV1 */
export interface BabeGenesisConfigurationV1 extends Struct {
  readonly slotDuration: u64;
  readonly epochLength: u64;
  readonly c: ITuple<[u64, u64]>;
  readonly genesisAuthorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>;
  readonly randomness: Randomness;
  readonly secondarySlots: bool;
}

/** @name BabeWeight */
export interface BabeWeight extends u64 {}

/** @name Epoch */
export interface Epoch extends Struct {
  readonly epochIndex: u64;
  readonly startSlot: Slot;
  readonly duration: u64;
  readonly authorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>;
  readonly randomness: Hash;
  readonly config: BabeEpochConfiguration;
}

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
  readonly type: 'V0' | 'V1';
}

/** @name NextConfigDescriptorV1 */
export interface NextConfigDescriptorV1 extends Struct {
  readonly c: ITuple<[u64, u64]>;
  readonly allowedSlots: AllowedSlots;
}

/** @name OpaqueKeyOwnershipProof */
export interface OpaqueKeyOwnershipProof extends Bytes {}

/** @name Randomness */
export interface Randomness extends Hash {}

/** @name RawBabePreDigest */
export interface RawBabePreDigest extends Enum {
  readonly isPhantom: boolean;
  readonly isPrimary: boolean;
  readonly asPrimary: RawBabePreDigestPrimary;
  readonly isSecondaryPlain: boolean;
  readonly asSecondaryPlain: RawBabePreDigestSecondaryPlain;
  readonly isSecondaryVRF: boolean;
  readonly asSecondaryVRF: RawBabePreDigestSecondaryVRF;
  readonly type: 'Phantom' | 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
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
  readonly type: 'Zero' | 'One' | 'Two' | 'Three';
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
  readonly type: 'Primary' | 'Secondary';
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
