// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    BenchmarkBatch: {
      pallet: 'Text',
      instance: 'Text',
      benchmark: 'Text',
      results: 'Vec<BenchmarkResult>'
    },
    BenchmarkConfig: {
      pallet: 'Bytes',
      benchmark: 'Bytes',
      selectedComponents: 'Vec<(BenchmarkParameter, u32)>',
      verify: 'bool',
      internalRepeats: 'u32'
    },
    BenchmarkList: {
      pallet: 'Bytes',
      instance: 'Bytes',
      benchmarks: 'Vec<BenchmarkMetadata>'
    },
    BenchmarkMetadata: {
      name: 'Bytes',
      components: 'Vec<(BenchmarkParameter, u32, u32)>'
    },
    BenchmarkParameter: {
      _enum: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    },
    BenchmarkResult: {
      components: 'Vec<(BenchmarkParameter, u32)>',
      extrinsicTime: 'u128',
      storageRootTime: 'u128',
      reads: 'u32',
      repeatReads: 'u32',
      writes: 'u32',
      repeatWrites: 'u32',
      proofSize: 'u32',
      benchKeys: 'Vec<(Vec<u8>, u32, u32, bool)>'
    }
  }
} as Definitions;
