// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { runtime } from './runtime';

export default {
  rpc: {},
  runtime,
  types: {
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
    }
  }
} as Definitions;
