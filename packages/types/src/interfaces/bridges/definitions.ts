// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    BridgedBlockHash: 'H256',
    BridgedBlockNumber: 'BlockNumber',
    BridgedHeader: 'Header',
    BridgeMessageId: '(LaneId, MessageNonce)',
    CallOrigin: {
      _enum: {
        SourceRoot: 'Null',
        TargetAccount: '(AccountId, MultiSigner, MultiSignature)',
        SourceAccount: 'AccountId'
      }
    },
    ChainId: '[u8; 4]',
    DeliveredMessages: {
      begin: 'MessageNonce',
      end: 'MessageNonce',
      // pub type DispatchResultsBitVec = BitVec<Msb0, u8>;
      dispatchResults: 'BitVec'
    },
    DispatchFeePayment: {
      _enum: ['AtSourceChain', 'AtTargetChain']
    },
    InboundLaneData: {
      relayers: 'Vec<UnrewardedRelayer>',
      lastConfirmedNonce: 'MessageNonce'
    },
    InboundRelayer: 'AccountId',
    InitializationData: {
      header: 'Header',
      authorityList: 'AuthorityList',
      setId: 'SetId',
      isHalted: 'bool'
    },
    LaneId: '[u8; 4]',
    MessageData: {
      payload: 'Bytes',
      fee: 'Balance'
    },
    MessagesDeliveryProofOf: {
      bridgedHeaderHash: 'BlockHash',
      storageProof: 'Vec<Bytes>',
      lane: 'LaneId'
    },
    MessageKey: {
      laneId: 'LaneId',
      nonce: 'MessageNonce'
    },
    MessageNonce: 'u64',
    MessagesProofOf: {
      bridgedHeaderHash: 'BridgedBlockHash',
      storageProof: 'Vec<Bytes>',
      lane: 'LaneId',
      noncesStart: 'MessageNonce',
      noncesEnd: 'MessageNonce'
    },
    OperatingMode: {
      _enum: ['Normal', 'RejectingOutboundMessages', 'Halted']
    },
    OutboundLaneData: {
      oldestUnprunedNonce: 'MessageNonce',
      latestReceivedNonce: 'MessageNonce',
      latestGeneratedNonce: 'MessageNonce'
    },
    OutboundMessageFee: 'Balance',
    OutboundPayload: {
      specVersion: 'u32',
      weight: 'Weight',
      origin: 'CallOrigin',
      dispatchFeePayment: 'DispatchFeePayment',
      call: 'Bytes'
    },
    Parameter: 'Null',
    RelayerId: 'AccountId',
    UnrewardedRelayer: {
      relayer: 'RelayerId',
      messages: 'DeliveredMessages'
    },
    UnrewardedRelayersState: {
      unrewardedRelayer_Entries: 'MessageNonce',
      messagesInOldestEntry: 'MessageNonce',
      totalMessages: 'MessageNonce'
    }
  }
} as Definitions;
