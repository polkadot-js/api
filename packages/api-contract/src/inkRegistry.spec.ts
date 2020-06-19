// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MtType } from '@polkadot/types/interfaces';

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { getInkString, getInkStrings, getInkType, getInkTypes } from './inkRegistry';

const registry = new TypeRegistry();

describe('inkRegistry', (): void => {
  const project = createType(registry, 'InkProject', incrementer);

  describe('getInkStrings', (): void => {
    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): string => getInkString(project, createType(registry, 'MtLookupTextId'))
      ).toThrow();
    });

    it('does single lookups via getInkString', (): void => {
      expect(
        getInkString(project, project.contract.messages[0].name)
      ).toEqual('inc');
    });

    it('does multiple lookups via getInkStrings', (): void => {
      expect(
        getInkStrings(project, project.lookup.types[0].path)
      ).toEqual(['incrementer', 'incrementer']);
    });
  });

  describe('getInkTypes', (): void => {
    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): MtType => getInkType(project, createType(registry, 'MtLookupTypeId'))
      ).toThrow();
    });

    it('does single lookups via getInkType', (): void => {
      expect(
        JSON.stringify(getInkType(project, project.contract.messages[0].args[0].type.id))
      ).toEqual('{"Primitive":"I32"}');
    });

    it('does multiple lookups via getInkTypes', (): void => {
      expect(
        JSON.stringify(getInkTypes(project, [project.contract.messages[1].returnType.unwrap().id]))
      ).toEqual('[{"Primitive":"I32"}]');
    });
  });
});
