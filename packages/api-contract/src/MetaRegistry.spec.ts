// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import MetaRegistry from './MetaRegistry';

import erc20Abi from '../test/contracts/Erc20.json';
import erc20Cmp from '../test/compare/erc20.test.json';
import sharedVecAbi from '../test/contracts/SharedVecV2.json';
import sharedVecCmp from '../test/compare/shared-vec.test.json';
import test001Abi from '../test/abi/test001.json';
import test001Cmp from '../test/compare/test001.cmp.json';

function compare (meta: MetaRegistry, other: any): void {
  try {
    expect(meta.typeDefs).toEqual(other);
  } catch (error) {
    console.error(JSON.stringify(meta.typeDefs));

    throw error;
  }
}

describe('MetaRegistry', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    it('initializes from a contract ABI (ERC20)', (): void => {
      compare(new MetaRegistry(registry, erc20Abi), erc20Cmp);
    });

    it('initializes from a contract ABI (SharedVec)', (): void => {
      compare(new MetaRegistry(registry, sharedVecAbi), sharedVecCmp);
    });

    it('initializes from a contract ABI (Other, test001)', (): void => {
      compare(new MetaRegistry(registry, test001Abi), test001Cmp);
    });
  });
});
