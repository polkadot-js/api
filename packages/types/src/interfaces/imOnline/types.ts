// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u32 } from '@polkadot/types/primitive';
import { BlockNumber, Signature } from '@polkadot/types/interfaces/runtime';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { SessionIndex } from '@polkadot/types/interfaces/session';

/** u32 */
export interface AuthIndex extends u32 {}

/** Signature */
export interface AuthoritySignature extends Signature {}

/** Struct */
export interface Heartbeat extends Struct {
  /** BlockNumber */
  readonly blockNumber: BlockNumber;
  /** OpaqueNetworkState */
  readonly networkState: OpaqueNetworkState;
  /** SessionIndex */
  readonly sessionIndex: SessionIndex;
  /** AuthorityId */
  readonly authorityId: AuthorityId;
}

/** Bytes */
export interface OpaqueMultiaddr extends Bytes {}

/** Struct */
export interface OpaqueNetworkState extends Struct {
  /** OpaquePeerId */
  readonly peerId: OpaquePeerId;
  /** Vec<OpaqueMultiaddr> */
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/** Bytes */
export interface OpaquePeerId extends Bytes {}
