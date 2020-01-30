// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u32 } from '@polkadot/types/primitive';
import { BlockNumber, Signature } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';

/**
 * @name AuthIndex
 * @description extends [[u32]]
 */
export interface AuthIndex extends u32 {}

/**
 * @name AuthoritySignature
 * @description extends [[Signature]]
 */
export interface AuthoritySignature extends Signature {}

/**
 * @name Heartbeat
 * @description extends [[Struct]]
 */
export interface Heartbeat extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityIndex: AuthIndex;
}

/**
 * @name OpaqueMultiaddr
 * @description extends [[Bytes]]
 */
export interface OpaqueMultiaddr extends Bytes {}

/**
 * @name OpaqueNetworkState
 * @description extends [[Struct]]
 */
export interface OpaqueNetworkState extends Struct {
  readonly peerId: OpaquePeerId;
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/**
 * @name OpaquePeerId
 * @description extends [[Bytes]]
 */
export interface OpaquePeerId extends Bytes {}
