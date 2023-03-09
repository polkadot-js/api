// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  Benchmark: [
    {
      methods: {
        benchmark_metadata: {
          description: 'Get the benchmark metadata available for this runtime.',
          params: [
            {
              name: 'extra',
              type: 'bool'
            }
          ],
          type: '(Vec<BenchmarkList>, Vec<StorageInfo>)'
        },
        dispatch_benchmark: {
          description: 'Dispatch the given benchmark.',
          params: [
            {
              name: 'config',
              type: 'BenchmarkConfig'
            }
          ],
          type: 'Result<Vec<BenchmarkBatch>, Text>'
        }
      },
      version: 1
    }
  ]
};
