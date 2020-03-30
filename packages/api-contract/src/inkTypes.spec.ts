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
        '1::incrementer::incrementer::__ink_private::__ink_storage::Storage',
        '{"value": "2::ink_core::storage::value::Value<i32>"}'
      ],
      [
        2,
        '2::ink_core::storage::value::Value<i32>',
        '{"cell": "4::ink_core::storage::cell::sync_cell::SyncCell"}'
      ],
      [
        3,
        'i32',
        null
      ],
      [
        4,
        '4::ink_core::storage::cell::sync_cell::SyncCell',
        '{"cell": "5::ink_primitives::key::Key"}'
      ],
      [
        5,
        '6::ink_core::storage::key::Key',
        '[u8;32]'
      ],
      [
        6,
        '[u8;32]',
        null
      ],
      [
        7,
        'u8',
        null
      ]
    ]);
  });
});
