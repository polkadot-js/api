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
      ).toEqual([null, 'i32']);
    });
  });

  describe('convertLookupProject', (): void => {
    expect(
      convertLookupProject(project)
    ).toEqual([
      ['incrementer::incrementer::__ink_private::__ink_storage::StorageAndEnv'],
      ['incrementer::incrementer::__ink_private::__ink_storage::Storage'],
      ['ink_core::storage::value::Value'],
      [null, 'i32'],
      ['ink_core::storage::cell::sync_cell::SyncCell', '{"cell":"[u8;32]"}'],
      ['ink_core::storage::key::Key', '[u8;32]'],
      [null, '[u8;32]'],
      [null, 'u8'],
      ['ink_core::env2::env_access::immutable::EnvAccess', '{"env":"Null","buffer":"{\"elems\":\"Bytes\"}","has_interacted":"bool","has_returned_value":"bool"}'],
      ['ink_core::env2::test::accessor::TestEnv', '{}'],
      ['ink_core::env2::types::DefaultSrmlTypes', '{_enum:[]}'],
      ['ink_core::env2::env_access::mutable::EnvAccessMut', '{"env":"Null","buffer":"{\"elems\":\"Bytes\"}","has_interacted":"bool","has_returned_value":"bool"}'],
      ['PhantomData', 'Null'],
      ['Bytes', '{"elems":"Bytes"}'],
      [null, 'Bytes'],
      [null, 'bool']
    ]);
  });
});
