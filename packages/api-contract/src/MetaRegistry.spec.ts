// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import abis from '../test/contracts';
import { Abi } from '.';

describe('MetaRegistry', (): void => {
  Object.keys(abis).forEach((abiName) => {
    it(`initializes from a contract ABI (${abiName})`, (): void => {
      const abi = new Abi(abis[abiName]);

      try {
        const cmpPath = path.join(__dirname, `../test/compare/${abiName}.test.json`);

        if (!fs.existsSync(cmpPath)) {
          fs.writeFileSync(cmpPath, JSON.stringify(abi.registry.metaTypeDefs, null, 2), { flag: 'w' });
        }

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        expect(abi.registry.metaTypeDefs).toEqual(require(cmpPath));
      } catch (error) {
        console.error(JSON.stringify(abi.registry.metaTypeDefs));

        throw error;
      }
    });
  });

  it('stores base project as JSON', (): void => {
    expect(new Abi(abis.ink_dns).json).toEqual(abis.ink_dns);
  });
});
