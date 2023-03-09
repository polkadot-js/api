// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';

export default {
  rpc,
  types: {
    ApiId: '[u8; 8]',
    BlockTrace: {
      blockHash: 'Text',
      parentHash: 'Text',
      tracingTargets: 'Text',
      storageKeys: 'Text',
      spans: 'Vec<BlockTraceSpan>',
      events: 'Vec<BlockTraceEvent>'
    },
    BlockTraceEvent: {
      target: 'Text',
      data: 'BlockTraceEventData',
      parentId: 'Option<u64>'
    },
    BlockTraceEventData: {
      stringValues: 'HashMap<Text, Text>'
    },
    BlockTraceSpan: {
      id: 'u64',
      parentId: 'Option<u64>',
      name: 'Text',
      target: 'Text',
      wasm: 'bool'
    },
    KeyValueOption: '(StorageKey, Option<StorageData>)',
    MigrationStatusResult: {
      topRemainingToMigrate: 'u64',
      childRemainingToMigrate: 'u64'
    },
    ReadProof: {
      at: 'Hash',
      proof: 'Vec<Bytes>'
    },
    RuntimeVersionApi: '(ApiId, u32)',
    RuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>',
      transactionVersion: 'u32',
      stateVersion: 'u8'
    },
    RuntimeVersionPre4: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>',
      transactionVersion: 'u32'
    },
    RuntimeVersionPre3: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>'
    },
    RuntimeVersionPartial: {
      specName: 'Text',
      specVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>'
    },
    SpecVersion: 'u32',
    StorageChangeSet: {
      block: 'Hash',
      changes: 'Vec<KeyValueOption>'
    },
    TraceBlockResponse: {
      _enum: {
        TraceError: 'TraceError',
        BlockTrace: 'BlockTrace'
      }
    },
    TraceError: {
      error: 'Text'
    }
  }
} as Definitions;
