// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';

const registry = new TypeRegistry();

describe('v2 296 parsing', (): void => {
  it('parses the incrementer', (): void => {
    expect(
      createType(registry, 'InkProject', incrementer)
    ).toBeDefined();
  });
});
