// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Data from './Data';

const registry = new TypeRegistry();

describe('Data', (): void => {
  it('encodes a normal None', (): void => {
    expect(
      new Data(registry).toHex()
    ).toEqual('0x00');
  });

  it('encodes a hashed value correctly', (): void => {
    expect(
      new Data(registry, { Keccak256: '0x0102030405060708091011121314151617181920212223242526272829303132' }).toHex()
    ).toEqual('0x240102030405060708091011121314151617181920212223242526272829303132');
  });

  it('encodes a Raw value correctly', (): void => {
    expect(
      new Data(registry, { Raw: '0x0102030405060708' }).toHex()
    ).toEqual('0x090102030405060708');
  });
});
