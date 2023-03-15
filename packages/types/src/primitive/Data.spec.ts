// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import { TypeRegistry } from '../create/index.js';
import { Data } from './index.js';

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

  it('throws on a very long string (only 32 bytes)', (): void => {
    expect(
      () => new Data(registry, { Raw: 'this is some very long string that is added here that will fail' })
    ).toThrow('Data.Raw values are limited to a maximum length of 32 bytes');
  });

  it('encodes a large value correctly (max 32)', (): void => {
    expect(
      // without the assert (and above test), add extra bytes to the end to check the encoding
      new Data(registry, { Raw: '0x0102030405060708091011121314151617181920212223242526272829303132' }).toHex()
    ).toEqual(
      // first byte is 32 + 1 === 33 === 0x21
      '0x210102030405060708091011121314151617181920212223242526272829303132'
    );
  });
});
