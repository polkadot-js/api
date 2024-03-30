// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, U8aFixed, Vec, u32 } from '@polkadot/types-codec';

/** @name Mixnode */
export interface Mixnode extends Struct {
  readonly externalAddresses: Vec<Bytes>;
  readonly kxPublic: U8aFixed;
  readonly peerId: U8aFixed;
}

/** @name MixnodesErr */
export interface MixnodesErr extends Enum {
  readonly isInsufficientRegistrations: boolean;
  readonly asInsufficientRegistrations: {
    readonly min: u32;
    readonly num: u32;
  } & Struct;
  readonly type: 'InsufficientRegistrations';
}

/** @name SessionPhase */
export interface SessionPhase extends Enum {
  readonly isCoverToCurrent: boolean;
  readonly isRequestsToCurrent: boolean;
  readonly isCoverToPrev: boolean;
  readonly isDisconnectFromPrev: boolean;
  readonly type: 'CoverToCurrent' | 'RequestsToCurrent' | 'CoverToPrev' | 'DisconnectFromPrev';
}

/** @name SessionStatus */
export interface SessionStatus extends Struct {
  readonly currentIndex: u32;
  readonly phase: SessionPhase;
}

export type PHANTOM_MIXNET = 'mixnet';
