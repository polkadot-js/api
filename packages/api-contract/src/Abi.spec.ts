// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractABIFn$Arg } from './types';

import typesAbi from '../test/abi/types.json';
import erc20Abi from '../test/contracts/erc20.json';

import { Abi } from '.';

describe('Abi', () => {
  describe('types encoding', () => {
    let abi: Abi;

    beforeAll(() => {
      abi = new Abi(typesAbi);
    });

    function check (method: string, args: Array<ContractABIFn$Arg>, type: string | null): void {
      const fn = abi.messages[method];

      expect(fn.args).toEqual(args);
      expect(fn.type).toEqual(type);
    }

    it('has the primitive method with args & return', () => {
      check(
        'primitive',
        [
          { name: 'bool', type: 'bool' },
          { name: 'u32', type: 'u32' }
        ],
        'bool'
      );
    });

    it('has the vector method with args & return', () => {
      check(
        'vector',
        [
          { name: 'vecU8', type: 'Vec<u8>' },
          { name: 'vecU32', type: 'Vec<u32>' }
        ],
        'Vec<bool>'
      );
    });

    it('has the vector_fixed method with args & return', () => {
      check(
        'vectorFixed',
        [
          { name: 'vecU8Length32', type: '[u8;32]' }
        ],
        '[u32;8]'
      );
    });

    it('has the option method with args & return', () => {
      check(
        'option',
        [
          { name: 'optionU32', type: 'Option<u32>' }
        ],
        'Option<bool>'
      );
    });

    it('has the result method with return (empty)', () => {
      check(
        'result',
        [],
        '()'
      );
    });

    it('allows for nested args', () => {
      check(
        'nested',
        [
          { name: 'optionVec', type: 'Option<Vec<u32>>' }
        ],
        'Vec<(u32,u64)>'
      );
    });

    describe('messages', () => {
      it('fails when invalid args are supplied', () => {
        expect(
          () => abi.messages.primitive(false)
        ).toThrow(/Expected 2 arguments to contract messages.primitive, found 1/);
      });

      it('encodes primitives correctly', () => {
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

  describe('erc20', () => {
    let abi: Abi;

    beforeEach(() => {
      abi = new Abi(erc20Abi);
    });

    it('has the attached methods', () => {
      expect(Object.keys(abi.messages)).toEqual(
        ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
      );
    });
  });
});
