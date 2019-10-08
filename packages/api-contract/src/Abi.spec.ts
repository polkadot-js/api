// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import erc20Abi from '../test/contracts/Erc20.json';

import { Abi } from '.';

describe('Abi', (): void => {
  describe('erc20', (): void => {
    let abi: Abi;

    beforeEach((): void => {
      abi = new Abi(erc20Abi);
    });

    it('has the attached methods', (): void => {
      expect(Object.keys(abi.messages)).toEqual(
        ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
      );
    });
  });
});
