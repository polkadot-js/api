// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { registryLookup, registryLookupAll } from './util';

const registry = new TypeRegistry();

describe('util', (): void => {
  describe('registry lookups', (): void => {
    const project = createType(registry, 'InkProject', incrementer);

    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): string => registryLookup(project, createType(registry, 'MtRegistryIndex'))
      ).toThrow();
    });

    it('does single lookups via registryLookup', (): void => {
      expect(
        registryLookup(project, project.contract.messages[0].name)
      ).toEqual('inc');
    });

    it('does multiple lookups via registryLookupAll', (): void => {
      expect(
        registryLookupAll(project, project.lookup.types[0].id.asCustom.namespace)
      ).toEqual(['incrementer', 'incrementer', '__ink_private', '__ink_storage']);
    });
  });

  it('parses the incrementer', (): void => {
    expect(
      createType(registry, 'InkProject', incrementer)
    ).toBeDefined();
  });
});
