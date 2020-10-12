// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable @typescript-eslint/no-var-requires */

import fs from 'fs';
import path from 'path';

import ContractRegistry from './ContractRegistry';

import * as testContracts from '../test/contracts';

const abis: Record<string, any> = { ...testContracts };

function compare (name: string): void {
  const inkRegistry = new ContractRegistry(abis[name]);

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

describe('ContractRegistry', (): void => {
  describe('construction', (): void => {
    it('initializes from a contract ABI (flipper)', (): void => {
      compare('flipper');
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compare('incrementer');
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compare('erc20');
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compare('dns');
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compare('erc721');
    });

    it('initializes from a contract ABI (multisig_plain)', (): void => {
      compare('multisigPlain');
    });
  });
});
