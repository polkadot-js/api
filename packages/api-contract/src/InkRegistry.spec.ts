// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

import fs from 'fs';
import path from 'path';

import { TypeRegistry } from '@polkadot/types';
import { TestContracts } from './types';

import InkRegistry from './InkRegistry';

import * as testContracts from '../test/contracts';

const abis: Record<TestContracts, any> = { ...testContracts };

function compare (name: TestContracts, registry: TypeRegistry): void {
  const inkRegistry = new InkRegistry(registry, abis[name]);

  try {
    const cmpPath = path.join(__dirname, `../test/compare/${name}.test.json`);

    if (!fs.existsSync(cmpPath)) {
      fs.writeFileSync(cmpPath, JSON.stringify(inkRegistry.typeDefs, null, 2), { flag: 'w' });
    }

    expect(inkRegistry.typeDefs).toEqual(require(cmpPath));
  } catch (error) {
    console.error(JSON.stringify(inkRegistry.typeDefs));

    throw error;
  }
}

describe('InkRegistry', (): void => {
  describe('construction', (): void => {
    const registry = new TypeRegistry();

    it('initializes from a contract ABI (flipper)', (): void => {
      compare('flipper', registry);
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compare('incrementer', registry);
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compare('erc20', registry);
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compare('dns', registry);
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compare('erc721', registry);
    });

    it('initializes from a contract ABI (multisig_plain)', (): void => {
      compare('multisigPlain', registry);
    });

    // it('initializes from a contract ABI (SharedVec)', (): void => {
    //   compare(new InkRegistry(registry, sharedVecAbi), sharedVecCmp);
    // });

    // it('initializes from a contract ABI (Other, test001)', (): void => {
    //   compare(new InkRegistry(registry, test001Abi), test001Cmp);
    // });
  });
});
