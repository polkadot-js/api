/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct, Vector } from '../../codec';
import { Bytes } from '../../primitive';
import { AuthorityId, BlockNumber } from '../../type';
import { SessionIndex } from '../session/types';

export interface Heartbeat extends Struct {
  readonly blockNumber: BlockNumber;
  readonly networkState: OpaqueNetworkState;
  readonly sessionIndex: SessionIndex;
  readonly authorityId: AuthorityId;
}

export interface OpaqueMultiaddr extends Bytes {}

export interface OpaqueNetworkState extends Struct {
  readonly peerId: OpaquePeerId;
  readonly externalAddresses: Vector<OpaqueMultiaddr>;
}

export interface OpaquePeerId extends Bytes {}
