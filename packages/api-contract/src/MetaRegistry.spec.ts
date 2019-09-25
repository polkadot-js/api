// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import MetaRegistry from './MetaRegistry';

import erc20Abi from '../test/contracts/Erc20.json';
import v2Abi from '../test/contracts/V2.json';
import sharedVecAbi from '../test/contracts/SharedVecV2.json';

describe('MetaRegistry', (): void => {
  describe('construction', (): void => {
    it('initializes from a contract ABI (V2 Structures)', (): void => {
      const metaRegistry = new MetaRegistry(v2Abi);
      fs.writeFile(path.join(__dirname, 'v2.test.json'), JSON.stringify(metaRegistry.typeDefs, null, 2), function (err): void {
        if (err) throw err;
      });

      expect(true).toBe(true);
    });

    it('initializes from a contract ABI (ERC20)', (): void => {
      const metaRegistry = new MetaRegistry(erc20Abi);
      fs.writeFile(path.join(__dirname, 'erc20.test.json'), JSON.stringify(metaRegistry.typeDefs, null, 2), function (err): void {
        if (err) throw err;
      });

      expect(true).toBe(true);
    });

    it('initializes from a contract ABI (SharedVec)', (): void => {
      const metaRegistry = new MetaRegistry(sharedVecAbi);
      fs.writeFile(path.join(__dirname, 'shared-vec.test.json'), JSON.stringify(metaRegistry.typeDefs, null, 2), function (err): void {
        if (err) throw err;
      });

      expect(true).toBe(true);
    });
  });
});
