// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { flattenUniq } from './index.js';

describe('flattenUniq', (): void => {
  it('flattens nested arrays', (): void => {
    expect(
      flattenUniq(['a', ['b', ['c', 'd', ['e']]], [['f', 'g']]])
    ).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });

  it('flattens nested arrays, removing duplicated', (): void => {
    expect(
      flattenUniq(['a', 'b', ['b', ['b', 'c', 'd', ['e'], 'f', 'g']], ['c', ['f', 'g']]])
    ).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});
