/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Struct, Vector } from '../../codec';
import { Bytes } from '../../primitive';
import { BlockNumber } from '../../type';
import { AuthorityId } from '../consensus/types';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    OpaqueMultiaddr: OpaqueMultiaddr;
    'Option<OpaqueMultiaddr>': Option<OpaqueMultiaddr>;
    'Vec<OpaqueMultiaddr>': Vector<OpaqueMultiaddr>;
    OpaquePeerId: OpaquePeerId;
    'Option<OpaquePeerId>': Option<OpaquePeerId>;
    'Vec<OpaquePeerId>': Vector<OpaquePeerId>;
    OpaqueNetworkState: OpaqueNetworkState;
    'Option<OpaqueNetworkState>': Option<OpaqueNetworkState>;
    'Vec<OpaqueNetworkState>': Vector<OpaqueNetworkState>;
    Heartbeat: Heartbeat;
    'Option<Heartbeat>': Option<Heartbeat>;
    'Vec<Heartbeat>': Vector<Heartbeat>;
  }
}
