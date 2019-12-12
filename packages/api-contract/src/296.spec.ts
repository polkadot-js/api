// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
