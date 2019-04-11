// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a } from '@plugnet/util';
import storage from '@plugnet/storage/static';

import StorageKey from './StorageKey';

describe('StorageKey', () => {
  it(`should correctly get Alice's freeBalance storage key (hex)`, () => {
    expect(
      new StorageKey(
        storage
          .balances
          .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
      )
        .toHex()
    ).toBe('0xc99f5446efa57788f39ab529311f4550'); // FIXME OK this should be length-prefixed in reality
  });

  it(`should correctly get Alice's freeBalance storage key (u8a)`, () => {
    expect(
      new StorageKey(
        storage
          .balances
          .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
      )
        .toU8a()
    ).toEqual(
      // length prefix attached
      hexToU8a('0x40c99f5446efa57788f39ab529311f4550')
    );
  });
});
