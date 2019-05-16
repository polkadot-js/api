// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a } from '@plugnet/util';
import fromMetadata from '@plugnet/storage/fromMetadata';
import rpcDataV3 from '@plugnet/types/Metadata/v3/static';
import rpcDataV4 from '@plugnet/types/Metadata/v4/static';

import Metadata from '../Metadata';
import StorageKey from './StorageKey';

describe('StorageKey', () => {
  describe('with MetadataV3 (uses xxHash by default)', () => {
    const storage = fromMetadata(new Metadata(rpcDataV3));

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

  describe('with MetadataV4 (uses xxHash by default)', () => {
    const storage = fromMetadata(new Metadata(rpcDataV4));

    it(`should correctly get Alice's freeBalance storage key (hex)`, () => {
      expect(
        new StorageKey(
          storage
            .balances
            .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
        )
          .toHex()
      ).toBe('0x7f864e18e3dd8b58386310d2fe0919eef27c6e558564b7f67f22d99d20f587bb');
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
        Uint8Array.from([
          128, 127, 134, 78, 24, 227, 221, 139, 88, 56, 99, 16, 210, 254, 9, 25, 238, 242, 124, 110, 85, 133, 100, 183, 246, 127, 34, 217, 157, 32, 245, 135, 187
        ])
      );
    });
  });
});
