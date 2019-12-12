// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MtTypeIdDef } from '@polkadot/types/interfaces';

import { TypeRegistry, createType } from '@polkadot/types';

import incrementer from '../test/abi/v2-296-incrementer.json';
import { getInkString, getInkStrings, getInkType, getInkTypes } from './inkRegistry';

const registry = new TypeRegistry();

describe('util', (): void => {
  describe('getInkStrings', (): void => {
    const project = createType(registry, 'InkProject', incrementer);

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
        getInkStrings(project, project.lookup.types[0].id.asCustom.namespace)
      ).toEqual(['incrementer', 'incrementer', '__ink_private', '__ink_storage']);
    });
  });

  describe('getInkTypes', (): void => {
    const project = createType(registry, 'InkProject', incrementer);

    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): MtTypeIdDef => getInkType(project, createType(registry, 'MtLookupTypeId'))
      ).toThrow();
    });

    it('does single lookups via getInkType', (): void => {
      expect(
        JSON.stringify(getInkType(project, project.contract.messages[0].args[0].type.ty))
      ).toEqual('{"id":{"Primitive":10},"def":{"Builtin":null}}');
    });

    it('does multiple lookups via getInkTypes', (): void => {
      expect(
        JSON.stringify(getInkTypes(project, [project.contract.messages[1].returnType.unwrap().ty]))
      ).toEqual('[{"id":{"Primitive":10},"def":{"Builtin":null}}]');
    });
  });
});
