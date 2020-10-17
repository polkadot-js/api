// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import Abi from './Abi';

import * as testContracts from '../test/contracts';
import * as userContracts from '../test/contracts/user';

const abis: Record<string, any> = { ...testContracts };
const userAbis: Record<string, any> = { ...userContracts };

function compareTypes (name: string): void {
  const abi = new Abi(abis[name] || userAbis[name]);

  try {
    const cmpPath = path.join(__dirname, `../test/compare/${name}.test.json`);

    if (!fs.existsSync(cmpPath)) {
      fs.writeFileSync(cmpPath, JSON.stringify(abi.registry.typeDefs, null, 2), { flag: 'w' });
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(abi.registry.typeDefs).toEqual(require(cmpPath));
  } catch (error) {
    console.error(JSON.stringify(abi.registry.typeDefs));

    throw error;
  }
}

describe('MetaRegistry', (): void => {
  describe('types', (): void => {
    it('initializes from a contract ABI (flipper)', (): void => {
      compareTypes('flipper');
    });

    it('initializes from a contract ABI (incrementer)', (): void => {
      compareTypes('incrementer');
    });

    it('initializes from a contract ABI (erc20)', (): void => {
      compareTypes('erc20');
    });

    it('initializes from a contract ABI (dns)', (): void => {
      compareTypes('dns');
    });

    it('initializes from a contract ABI (erc721)', (): void => {
      compareTypes('erc721');
    });

    it('initializes from a contract ABI (multisig_plain)', (): void => {
      compareTypes('multisigPlain');
    });
  });

  describe('user ABIs', (): void => {
    it('initializes from a contract ABI (withString)', (): void => {
      compareTypes('withString');
    });
  });

  it('stores base project as JSON', (): void => {
    expect(new Abi(abis.dns).json).toEqual(abis.dns);
  });
});
