// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { getInkType } from './inkRegistry';
import { convertLookupProject, getTypeIdPrimitive } from './inkTypes';

const registry = new TypeRegistry();

describe('inkTypes', (): void => {
  const project = createType(registry, 'InkProject', incrementer);

  describe('getTypeIdPrimitive', (): void => {
    it('allows for primitive lookups', (): void => {
      const def = getInkType(project, project.contract.messages[0].args[0].type.id);

      expect(
        getTypeIdPrimitive(project, def.id.asPrimitive)
      ).toEqual('i32');
    });
  });

  describe('convertLookupProject', (): void => {
    expect(
      convertLookupProject(project)
    ).toEqual([
      [
        'incrementer::incrementer::__ink_private::__ink_storage::StorageAndEnv',
        '{"__storage":"incrementer::incrementer::__ink_private::__ink_storage::Storage","__env":"ink_core::env2::env_access::immutable::EnvAccess"}'
      ],
      [
        'incrementer::incrementer::__ink_private::__ink_storage::Storage',
        '{"value":"ink_core::storage::value::Value"}'
      ],
      [
        'ink_core::storage::value::Value',
        '{"cell":"ink_core::storage::cell::sync_cell::SyncCell"}'
      ],
      [
        'i32',
        null
      ],
      [
        'ink_core::storage::cell::sync_cell::SyncCell',
        '{"cell":"ink_core::storage::key::Key"}'
      ],
      [
        'ink_core::storage::key::Key',
        '[u8;32]'
      ],
      [
        '[u8;32]',
        null
      ],
      [
        'u8',
        null
      ],
      [
        'ink_core::env2::env_access::immutable::EnvAccess',
        '{"access":"ink_core::env2::env_access::mutable::EnvAccessMut"}'
      ],
      [
        'ink_core::env2::test::accessor::TestEnv',
        'Null'
      ],
      [
        'ink_core::env2::types::DefaultSrmlTypes',
        'Null'
      ],
      [
        'ink_core::env2::env_access::mutable::EnvAccessMut',
        '{"env":"PhantomData","buffer":"Bytes","has_interacted":"bool","has_returned_value":"bool"}'
      ],
      [
        'PhantomData',
        'Null'
      ],
      [
        'Bytes',
        '{"elems":"Bytes"}'
      ],
      [
        'Bytes',
        null
      ],
      [
        'bool',
        null
      ]
    ]);
  });
});
