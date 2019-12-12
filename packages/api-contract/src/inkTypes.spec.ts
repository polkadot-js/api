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
        'incrementer::incrementer::__ink_private::__ink_storage::StorageAndEnv',
        '{"__storage":"incrementer::incrementer::__ink_private::__ink_storage::Storage","__env":"ink_core::env2::env_access::immutable::EnvAccess"}'
      ],
      [
        2,
        'incrementer::incrementer::__ink_private::__ink_storage::Storage',
        '{"value":"ink_core::storage::value::Value"}'
      ],
      [
        3,
        'ink_core::storage::value::Value',
        '{"cell":"ink_core::storage::cell::sync_cell::SyncCell"}'
      ],
      [
        4,
        'i32',
        null
      ],
      [
        5,
        'ink_core::storage::cell::sync_cell::SyncCell',
        '{"cell":"ink_core::storage::key::Key"}'
      ],
      [
        6,
        'ink_core::storage::key::Key',
        '[u8;32]'
      ],
      [
        7,
        '[u8;32]',
        null
      ],
      [
        8,
        'u8',
        null
      ],
      [
        9,
        'ink_core::env2::env_access::immutable::EnvAccess',
        '{"access":"ink_core::env2::env_access::mutable::EnvAccessMut"}'
      ],
      [
        10,
        'ink_core::env2::test::accessor::TestEnv',
        'Null'
      ],
      [
        11,
        'ink_core::env2::types::DefaultSrmlTypes',
        'Null'
      ],
      [
        12,
        'ink_core::env2::env_access::mutable::EnvAccessMut',
        '{"env":"PhantomData","buffer":"Bytes","has_interacted":"bool","has_returned_value":"bool"}'
      ],
      [
        13,
        'PhantomData',
        'Null'
      ],
      [
        14,
        'Bytes',
        '{"elems":"Bytes"}'
      ],
      [
        15,
        'Bytes',
        null
      ],
      [
        16,
        'bool',
        null
      ]
    ]);
  });
});
