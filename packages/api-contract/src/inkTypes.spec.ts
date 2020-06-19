// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { getProjectTypes } from './inkTypes';

const registry = new TypeRegistry();

describe('inkTypes', (): void => {
  const project = createType(registry, 'InkProject', incrementer);

  it('converts using getProjectTypes', (): void => {
    expect(
      getProjectTypes(project)
    ).toEqual([
      [
        1,
        'i32',
        null
      ]
    ]);
  });
});
