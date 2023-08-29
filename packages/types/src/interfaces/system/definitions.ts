// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';
import { runtime } from './runtime.js';

export default {
  rpc,
  runtime,
  types: {
    AccountInfo: 'AccountInfoWithTripleRefCount',
    AccountInfoWithRefCountU8: {
      nonce: 'Index',
      refcount: 'u8',
      data: 'AccountData'
    },
    AccountInfoWithRefCount: {
      _fallback: 'AccountInfoWithRefCountU8',
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    AccountInfoWithDualRefCount: {
      _fallback: 'AccountInfoWithRefCount',
      nonce: 'Index',
      consumers: 'RefCount',
      providers: 'RefCount',
      data: 'AccountData'
    },
    // original naming
    AccountInfoWithProviders: 'AccountInfoWithDualRefCount',
    AccountInfoWithTripleRefCount: {
      _fallback: 'AccountInfoWithDualRefCount',
      nonce: 'Index',
      consumers: 'RefCount',
      providers: 'RefCount',
      sufficients: 'RefCount',
      data: 'AccountData'
    },
    ApplyExtrinsicResult: 'Result<DispatchOutcome, TransactionValidityError>',
    ApplyExtrinsicResultPre6: 'Result<DispatchOutcomePre6, TransactionValidityError>',
    ArithmeticError: {
      _enum: [
        'Underflow',
        'Overflow',
        'DivisionByZero'
      ]
    },
    BlockLength: {
      max: 'PerDispatchClassU32'
    },
    BlockWeights: {
      baseBlock: 'Weight',
      maxBlock: 'Weight',
      perClass: 'PerDispatchClassWeightsPerClass'
    },
    ChainProperties: 'GenericChainProperties',
    ChainType: {
      _enum: {
        Development: 'Null',
        Local: 'Null',
        Live: 'Null',
        Custom: 'Text'
      }
    },
    ConsumedWeight: 'PerDispatchClassWeight',
    DigestOf: 'Digest',
    DispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
    DispatchError: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModule',
        ConsumerRemaining: 'Null',
        NoProviders: 'Null',
        TooManyConsumers: 'Null',
        Token: 'TokenError',
        Arithmetic: 'ArithmeticError',
        Transactional: 'TransactionalError',
        Exhausted: 'Null',
        Corruption: 'Null',
        Unavailable: 'Null'
      }
    },
    DispatchErrorPre6: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModulePre6',
        ConsumerRemaining: 'Null',
        NoProviders: 'Null',
        TooManyConsumers: 'Null',
        Token: 'TokenError',
        Arithmetic: 'ArithmeticError',
        Transactional: 'TransactionalError'
      }
    },
    DispatchErrorPre6First: {
      // The enum was modified mid-flight, affecting asset chains -
      // https://github.com/paritytech/substrate/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModulePre6',
        ConsumerRemaining: 'Null',
        NoProviders: 'Null',
        Token: 'TokenError',
        Arithmetic: 'ArithmeticError',
        Transactional: 'TransactionalError'
      }
    },
    DispatchErrorModuleU8: {
      index: 'u8',
      error: 'u8'
    },
    DispatchErrorModuleU8a: {
      index: 'u8',
      error: '[u8; 4]'
    },
    DispatchErrorModule: 'DispatchErrorModuleU8a',
    DispatchErrorModulePre6: 'DispatchErrorModuleU8',
    DispatchErrorTo198: {
      module: 'Option<u8>',
      error: 'u8'
    },
    DispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'Pays'
    },
    DispatchInfoTo190: {
      weight: 'Weight',
      class: 'DispatchClass'
    },
    DispatchInfoTo244: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'bool'
    },
    DispatchOutcome: 'Result<(), DispatchError>',
    DispatchOutcomePre6: 'Result<(), DispatchErrorPre6>',
    DispatchResult: 'Result<(), DispatchError>',
    DispatchResultOf: 'DispatchResult',
    DispatchResultTo198: 'Result<(), Text>',
    Event: 'GenericEvent',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    },
    Health: {
      peers: 'u64',
      isSyncing: 'bool',
      shouldHavePeers: 'bool'
    },
    InvalidTransaction: {
      _enum: {
        Call: 'Null',
        Payment: 'Null',
        Future: 'Null',
        Stale: 'Null',
        BadProof: 'Null',
        AncientBirthBlock: 'Null',
        ExhaustsResources: 'Null',
        Custom: 'u8',
        BadMandatory: 'Null',
        MandatoryDispatch: 'Null',
        BadSigner: 'Null'
      }
    },
    Key: 'Bytes',
    LastRuntimeUpgradeInfo: {
      specVersion: 'Compact<u32>',
      specName: 'Text'
    },
    NetworkState: {
      peerId: 'Text',
      listenedAddresses: 'Vec<Text>',
      externalAddresses: 'Vec<Text>',
      connectedPeers: 'HashMap<Text, Peer>',
      notConnectedPeers: 'HashMap<Text, NotConnectedPeer>',
      averageDownloadPerSec: 'u64',
      averageUploadPerSec: 'u64',
      peerset: 'NetworkStatePeerset'
    },
    NetworkStatePeerset: {
      messageQueue: 'u64',
      nodes: 'HashMap<Text, NetworkStatePeersetInfo>'
    },
    NetworkStatePeersetInfo: {
      connected: 'bool',
      reputation: 'i32'
    },
    NodeRole: {
      _enum: {
        Full: 'Null',
        LightClient: 'Null',
        Authority: 'Null',
        UnknownRole: 'u8'
      }
    },
    NotConnectedPeer: {
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'Option<PeerPing>',
      versionString: 'Option<Text>'
    },
    Peer: {
      enabled: 'bool',
      endpoint: 'PeerEndpoint',
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'PeerPing',
      open: 'bool',
      versionString: 'Text'
    },
    PeerEndpoint: {
      listening: 'PeerEndpointAddr'
    },
    PeerEndpointAddr: {
      _alias: {
        localAddr: 'local_addr',
        sendBackAddr: 'send_back_addr'
      },
      localAddr: 'Text',
      sendBackAddr: 'Text'
    },
    PeerPing: {
      nanos: 'u64',
      secs: 'u64'
    },
    PeerInfo: {
      peerId: 'Text',
      roles: 'Text',
      protocolVersion: 'u32',
      bestHash: 'Hash',
      bestNumber: 'BlockNumber'
    },
    PerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    PerDispatchClassWeight: {
      normal: 'Weight',
      operational: 'Weight',
      mandatory: 'Weight'
    },
    PerDispatchClassWeightsPerClass: {
      normal: 'WeightPerClass',
      operational: 'WeightPerClass',
      mandatory: 'WeightPerClass'
    },
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null'
      }
    },
    RawOrigin: {
      _enum: {
        Root: 'Null',
        Signed: 'AccountId',
        None: 'Null'
      }
    },
    RefCount: 'u32',
    RefCountTo259: 'u8',
    SyncState: {
      startingBlock: 'BlockNumber',
      currentBlock: 'BlockNumber',
      highestBlock: 'Option<BlockNumber>'
    },
    SystemOrigin: 'RawOrigin',
    TokenError: {
      _enum: [
        'NoFunds',
        'WouldDie',
        'BelowMinimum',
        'CannotCreate',
        'UnknownAsset',
        'Frozen',
        'Unsupported',
        // these are dropped, but still in older versions
        // (if this adjusts, will need to take a re-look)
        'Underflow',
        'Overflow'
      ]
    },
    TransactionValidityError: {
      _enum: {
        Invalid: 'InvalidTransaction',
        Unknown: 'UnknownTransaction'
      }
    },
    TransactionalError: {
      _enum: [
        'LimitReached',
        'NoLayer'
      ]
    },
    UnknownTransaction: {
      _enum: {
        CannotLookup: 'Null',
        NoUnsignedValidator: 'Null',
        Custom: 'u8'
      }
    },
    WeightPerClass: {
      baseExtrinsic: 'Weight',
      maxExtrinsic: 'Option<Weight>',
      maxTotal: 'Option<Weight>',
      reserved: 'Option<Weight>'
    }
  }
} as Definitions;
