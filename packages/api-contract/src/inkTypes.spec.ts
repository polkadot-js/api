// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
