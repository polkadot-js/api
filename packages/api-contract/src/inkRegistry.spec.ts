// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MtType } from '@polkadot/types/interfaces';

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { getInkType, getInkTypes } from './inkRegistry';

const registry = new TypeRegistry();

describe('inkRegistry', (): void => {
  const project = createType(registry, 'InkProject', incrementer);

  describe('getInkTypes', (): void => {
    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): MtType => getInkType(project, createType(registry, 'MtLookupTypeId'))
      ).toThrow();
    });

    it('does single lookups via getInkType', (): void => {
      const resolvedType = getInkType(project, project.spec.messages[0].args[0].type.id);

      expect(
        JSON.stringify(resolvedType.def)
      ).toEqual('{"Primitive":"I32"}');
    });

    it('does multiple lookups via getInkTypes', (): void => {
      const resolvedTypes = getInkTypes(project, [project.spec.messages[1].returnType.unwrap().id]);

      expect(
        JSON.stringify(resolvedTypes.map(({ def }) => def))
      ).toEqual('[{"Primitive":"I32"}]');
    });
  });
});
