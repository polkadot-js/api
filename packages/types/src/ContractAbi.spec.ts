// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import TypesAbi from '../test/abi/types.json';

import ContractAbi, { ContractABIFn$Arg } from './ContractAbi';

describe('ContractAbi', () => {
  let abi: ContractAbi;

  beforeAll(() => {
    abi = new ContractAbi(TypesAbi);
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
});
