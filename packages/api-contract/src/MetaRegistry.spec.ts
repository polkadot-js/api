// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import { TypeDefInfo } from '@polkadot/types/types';

import abis from '../test/contracts';
import { Abi } from '.';

function stringifyInfo (key: string, value: unknown): unknown {
  return key === 'info'
    ? TypeDefInfo[value as number]
    : value;
}

describe('MetaRegistry', (): void => {
  Object.keys(abis).forEach((abiName) => {
    it(`initializes from a contract ABI (${abiName})`, (): void => {
      const abi = new Abi(abis[abiName]);
      const json = JSON.stringify(abi.registry.metaTypeDefs, stringifyInfo, 2);
      const cmpPath = path.join(__dirname, `../test/compare/${abiName}.test.json`);

      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        expect(JSON.parse(json)).toEqual(require(cmpPath));
      } catch (error) {
        if (process.env.GITHUB_REPOSITORY) {
          console.error(JSON.stringify(abi.registry.metaTypeDefs, stringifyInfo));

          throw error;
        }

        fs.writeFileSync(cmpPath, json, { flag: 'w' });
      }
    });
  });

  it('stores base project as JSON', (): void => {
    expect(new Abi(abis.ink_dns).json).toEqual(abis.ink_dns);
  });
});
