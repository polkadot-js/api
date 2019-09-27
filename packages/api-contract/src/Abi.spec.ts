// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import { ContractABIArg } from './types';

import typesAbi from '../test/abi/types.json';
import erc20Abi from '../test/contracts/Erc20.json';

import { Abi } from '.';

describe('Abi', (): void => {
  describe('types encoding', (): void => {
    let abi: Abi;

    beforeAll((): void => {
      abi = new Abi(typesAbi);
    });

    describe('messages', (): void => {
      it('fails when invalid args are supplied', (): void => {
        expect(
          (): Uint8Array => abi.messages.primitive(false)
        ).toThrow(/Expected 2 arguments to contract messages.primitive, found 1/);
      });

      it('encodes primitives correctly', (): void => {
        expect(
          abi.messages.primitive(true, 0x12345678)
        ).toEqual(new Uint8Array([
          9 << 2, // total length (4 + 1 + 4)
          0x67, 0x2b, 0, 0, // 11111 -> hex (LE)
          1, // true
          0x78, 0x56, 0x34, 0x12 // u32
        ]));
      });
    });
  });

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
