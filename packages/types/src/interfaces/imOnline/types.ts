// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '../../codec';
import { Bytes, u32 } from '../../primitive';
import { BlockNumber, Signature } from '../runtime';
import { AuthorityId } from '../consensus';
import { SessionIndex } from '../session';

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
