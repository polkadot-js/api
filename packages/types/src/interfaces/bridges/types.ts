// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BitVec, Bytes, Enum, Null, Struct, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
  import type { BlockHash } from '@polkadot/types/interfaces/chain';
  import type { MultiSignature } from '@polkadot/types/interfaces/extrinsics';
  import type { AuthorityList, SetId } from '@polkadot/types/interfaces/grandpa';
  import type { AccountId, Balance, BlockNumber, H256, Header, MultiSigner, Weight } from '@polkadot/types/interfaces/runtime';
  import type { ITuple } from '@polkadot/types/types';

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends H256 {}

/** @name BridgedBlockNumber */
export interface BridgedBlockNumber extends BlockNumber {}

/** @name BridgedHeader */
export interface BridgedHeader extends Header {}

/** @name BridgeMessageId */
export interface BridgeMessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name CallOrigin */
export interface CallOrigin extends Enum {
  readonly isSourceRoot: boolean;
  readonly isTargetAccount: boolean;
  readonly asTargetAccount: ITuple<[AccountId, MultiSigner, MultiSignature]>;
  readonly isSourceAccount: boolean;
  readonly asSourceAccount: AccountId;
  readonly type: 'SourceRoot' | 'TargetAccount' | 'SourceAccount';
}

/** @name ChainId */
export interface ChainId extends U8aFixed {}

/** @name DeliveredMessages */
export interface DeliveredMessages extends Struct {
  readonly begin: MessageNonce;
  readonly end: MessageNonce;
  readonly dispatchResults: BitVec;
}

/** @name DispatchFeePayment */
export interface DispatchFeePayment extends Enum {
  readonly isAtSourceChain: boolean;
  readonly isAtTargetChain: boolean;
  readonly type: 'AtSourceChain' | 'AtTargetChain';
}

/** @name InboundLaneData */
export interface InboundLaneData extends Struct {
  readonly relayers: Vec<UnrewardedRelayer>;
  readonly lastConfirmedNonce: MessageNonce;
}

/** @name InboundRelayer */
export interface InboundRelayer extends AccountId {}

/** @name InitializationData */
export interface InitializationData extends Struct {
  readonly header: Header;
  readonly authorityList: AuthorityList;
  readonly setId: SetId;
  readonly isHalted: bool;
}

/** @name LaneId */
export interface LaneId extends U8aFixed {}

/** @name MessageData */
export interface MessageData extends Struct {
  readonly payload: Bytes;
  readonly fee: Balance;
}

/** @name MessageKey */
export interface MessageKey extends Struct {
  readonly laneId: LaneId;
  readonly nonce: MessageNonce;
}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

/** @name MessagesDeliveryProofOf */
export interface MessagesDeliveryProofOf extends Struct {
  readonly bridgedHeaderHash: BlockHash;
  readonly storageProof: Vec<Bytes>;
  readonly lane: LaneId;
}

/** @name MessagesProofOf */
export interface MessagesProofOf extends Struct {
  readonly bridgedHeaderHash: BridgedBlockHash;
  readonly storageProof: Vec<Bytes>;
  readonly lane: LaneId;
  readonly noncesStart: MessageNonce;
  readonly noncesEnd: MessageNonce;
}

/** @name OperatingMode */
export interface OperatingMode extends Enum {
  readonly isNormal: boolean;
  readonly isRejectingOutboundMessages: boolean;
  readonly isHalted: boolean;
  readonly type: 'Normal' | 'RejectingOutboundMessages' | 'Halted';
}

/** @name OutboundLaneData */
export interface OutboundLaneData extends Struct {
  readonly oldestUnprunedNonce: MessageNonce;
  readonly latestReceivedNonce: MessageNonce;
  readonly latestGeneratedNonce: MessageNonce;
}

/** @name OutboundMessageFee */
export interface OutboundMessageFee extends Balance {}

/** @name OutboundPayload */
export interface OutboundPayload extends Struct {
  readonly specVersion: u32;
  readonly weight: Weight;
  readonly origin: CallOrigin;
  readonly dispatchFeePayment: DispatchFeePayment;
  readonly call: Bytes;
}

/** @name Parameter */
export interface Parameter extends Null {}

/** @name RelayerId */
export interface RelayerId extends AccountId {}

/** @name UnrewardedRelayer */
export interface UnrewardedRelayer extends Struct {
  readonly relayer: RelayerId;
  readonly messages: DeliveredMessages;
}

/** @name UnrewardedRelayersState */
export interface UnrewardedRelayersState extends Struct {
  readonly unrewardedRelayer_Entries: MessageNonce;
  readonly messagesInOldestEntry: MessageNonce;
  readonly totalMessages: MessageNonce;
}

export type PHANTOM_BRIDGES = 'bridges';
