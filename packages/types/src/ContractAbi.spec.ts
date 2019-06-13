// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import TypesAbi from '../test/abi/types.json';

import ContractAbi from './ContractAbi';

describe('ContractAbi', () => {
  let abi: ContractAbi;

  beforeAll(() => {
    abi = new ContractAbi(TypesAbi);
  });

  it('has the primitive method with args & return', () => {
    const method = abi.messages['primitive'];

    expect(method.args).toEqual([
      { name: 'bool', type: 'bool' },
      { name: 'u32', type: 'u32' }
    ]);
    expect(method.type).toEqual('bool');
  });

  it('has the vector method with args & return', () => {
    const method = abi.messages['vector'];

    expect(method.args).toEqual([
      { name: 'vecU8', type: 'Vec<u8>' },
      { name: 'vecU32', type: 'Vec<u32>' }
    ]);
    expect(method.type).toEqual('Vec<bool>');
  });

  it('has the option method with args & return', () => {
    const method = abi.messages['option'];

    expect(method.args).toEqual([
      { name: 'optionU32', type: 'Option<u32>' }
    ]);
    expect(method.type).toEqual('Option<bool>');
  });
});
