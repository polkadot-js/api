// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u32 } from '@polkadot/types/primitive';
import { Signature } from '@polkadot/types/interfaces/extrinsics';
import { BlockNumber } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';

/** @name AuthIndex */
export interface AuthIndex extends u32 {}

/** @name AuthoritySignature */
export interface AuthoritySignature extends Signature {}

/** @name Heartbeat */
export interface Heartbeat extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
}

/** @name OpaqueMultiaddr */
export interface OpaqueMultiaddr extends Bytes {}

/** @name OpaqueNetworkState */
export interface OpaqueNetworkState extends Struct {
  readonly peerId: OpaquePeerId;
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/** @name OpaquePeerId */
export interface OpaquePeerId extends Bytes {}

export type PHANTOM_IMONLINE = 'imOnline';
