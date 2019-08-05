// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct, Vec } from '../../codec';
import { Bytes, u32 } from '../../primitive';
import { BlockNumber, Signature } from '../runtime';
import { AuthorityId } from '../consensus';
import { SessionIndex } from '../session';

/** u32 */
export type AuthIndex = u32;

/** Signature */
export type AuthoritySignature = Signature;

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
export type OpaqueMultiaddr = Bytes;

/** Struct */
export interface OpaqueNetworkState extends Struct {
  /** OpaquePeerId */
  readonly peerId: OpaquePeerId;
  /** Vec<OpaqueMultiaddr> */
  readonly externalAddresses: Vec<OpaqueMultiaddr>;
}

/** Bytes */
export type OpaquePeerId = Bytes;
