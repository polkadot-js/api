// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Decorated';
import rpcDataV3 from '@polkadot/metadata/Metadata/v3/static';
import rpcDataV4 from '@polkadot/metadata/Metadata/v4/static';
import rpcDataV5 from '@polkadot/metadata/Metadata/v5/static';
import rpcDataV6 from '@polkadot/metadata/Metadata/v6/static';
import rpcDataV7 from '@polkadot/metadata/Metadata/v7/static';
import rpcDataV8 from '@polkadot/metadata/Metadata/v8/static';
import rpcDataV11 from '@polkadot/metadata/Metadata/v11/static';
import { hexToU8a } from '@polkadot/util';

import { TypeRegistry } from '../create';
import StorageKey from './StorageKey';

describe('StorageKey', (): void => {
  const registry = new TypeRegistry();

  describe('with MetadataV3 (uses xxHash by default)', (): void => {
    const metadata = new Metadata(registry, rpcDataV3);

    it('should correctly get Alice\'s freeBalance storage key (hex)', (): void => {
      expect(
        new StorageKey(
          registry,
          metadata
            .query
            .balances
            .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
        )
          .toHex()
      ).toBe('0xc99f5446efa57788f39ab529311f4550'); // FIXME OK this should be length-prefixed in reality
    });

    it('should correctly get Alice\'s freeBalance storage key (u8a)', (): void => {
      expect(
        new StorageKey(
          registry,
          metadata
            .query
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

  describe('with MetadataV4 (uses xxHash by default)', (): void => {
    const metadata = new Metadata(registry, rpcDataV4);

    it('should correctly get Alice\'s freeBalance storage key (hex)', (): void => {
      expect(
        new StorageKey(
          registry,
          metadata
            .query
            .balances
            .freeBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')
        )
          .toHex()
      ).toBe('0x7f864e18e3dd8b58386310d2fe0919eef27c6e558564b7f67f22d99d20f587bb');
    });

    it('should correctly get Alice\'s freeBalance storage key (u8a)', (): void => {
      expect(
        new StorageKey(
          registry,
          metadata
            .query
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

    it('should correctly get the EventTopics double map storage key (hex)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toHex()
      ).toBe('0x3007c9ff7027f65900abcdfca4fdb107ead47e2a9e3558e01b691b0f4a5f8518d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
    });

    it('should correctly get the EventTopics double map storage key (u8a)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toU8a()
      ).toEqual(Uint8Array.from([1, 1, 48, 7, 201, 255, 112, 39, 246, 89, 0, 171, 205, 252, 164, 253, 177, 7, 234, 212, 126, 42, 158, 53, 88, 224, 27, 105, 27, 15, 74, 95, 133, 24, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
    });
  });

  describe('with MetadataV5', (): void => {
    const metadata = new Metadata(registry, rpcDataV5);

    it('should correctly get the EventTopics double map storage key (hex)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toHex()
      ).toBe('0x3007c9ff7027f65900abcdfca4fdb107ead47e2a9e3558e01b691b0f4a5f8518d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
    });

    it('should correctly get the EventTopics double map storage key (u8a)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toU8a()
      ).toEqual(Uint8Array.from([1, 1, 48, 7, 201, 255, 112, 39, 246, 89, 0, 171, 205, 252, 164, 253, 177, 7, 234, 212, 126, 42, 158, 53, 88, 224, 27, 105, 27, 15, 74, 95, 133, 24, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
    });
  });

  describe('with MetadataV6', (): void => {
    const metadata = new Metadata(registry, rpcDataV6);

    it('should correctly get the EventTopics double map storage key (hex)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toHex()
      ).toBe('0x3007c9ff7027f65900abcdfca4fdb107ead47e2a9e3558e01b691b0f4a5f8518d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
    });

    it('should correctly get the EventTopics double map storage key (u8a)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toU8a()
      ).toEqual(Uint8Array.from([1, 1, 48, 7, 201, 255, 112, 39, 246, 89, 0, 171, 205, 252, 164, 253, 177, 7, 234, 212, 126, 42, 158, 53, 88, 224, 27, 105, 27, 15, 74, 95, 133, 24, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
    });
  });

  describe('with MetadataV7', (): void => {
    const metadata = new Metadata(registry, rpcDataV7);

    it('should correctly get the EventTopics double map storage key (hex)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toHex()
      ).toBe('0x3007c9ff7027f65900abcdfca4fdb107ead47e2a9e3558e01b691b0f4a5f8518d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
    });

    it('should correctly get the EventTopics double map storage key (u8a)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toU8a()
      ).toEqual(Uint8Array.from([1, 1, 48, 7, 201, 255, 112, 39, 246, 89, 0, 171, 205, 252, 164, 253, 177, 7, 234, 212, 126, 42, 158, 53, 88, 224, 27, 105, 27, 15, 74, 95, 133, 24, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
    });
  });

  describe('with MetadataV8', (): void => {
    const metadata = new Metadata(registry, rpcDataV8);

    it('should correctly get the EventTopics double map storage key (hex)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toHex()
      ).toBe('0x3007c9ff7027f65900abcdfca4fdb107ead47e2a9e3558e01b691b0f4a5f8518d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
    });

    it('should correctly get the EventTopics double map storage key (u8a)', (): void => {
      expect(
        new StorageKey(registry, [
          metadata
            .query
            .system
            .eventTopics,
          ['any', [1, 2, 3]]
        ])
          .toU8a()
      ).toEqual(Uint8Array.from([1, 1, 48, 7, 201, 255, 112, 39, 246, 89, 0, 171, 205, 252, 164, 253, 177, 7, 234, 212, 126, 42, 158, 53, 88, 224, 27, 105, 27, 15, 74, 95, 133, 24, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
    });
  });

  describe('with MetadataV11', (): void => {
    const metadata = new Metadata(registry, rpcDataV11);

    it('should allow decoding of a DoubleMap key', (): void => {
      const key = new StorageKey(registry, '0x5f3e4907f716ac89b6347d15ececedca8bde0a0ea8864605e3b68ed9cb2da01b66ccada06515787c10000000e535263148daaf49be5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f');

      key.setMeta(metadata.query.staking.erasStakers.meta);

      expect(key.toHuman()).toEqual([
        '16',
        '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY'
      ]);
    });

    it('should allow decoding of a Map key', (): void => {
      const key = new StorageKey(registry, '0x426e15054d267946093858132eb537f191ca57b0c4b20b29ae7e99d6201d680cc906f7710aa165d62c709012f807af8fc3f0d2abb0c51ca9a88d4ef24d1a092bf89dacf5ce63ea1d');

      key.setMeta(metadata.query.society.defenderVotes.meta);

      expect(key.toHuman()).toEqual([
        '5D4yQHKfqCQYThhHmTfN1JEDi47uyDJc1xg9eZfAG1R7FC7J'
      ]);
    });
  });
});
