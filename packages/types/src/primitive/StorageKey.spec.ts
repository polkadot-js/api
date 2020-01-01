// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Decorated';
import rpcDataV3 from '@polkadot/metadata/Metadata/v3/static';
import rpcDataV4 from '@polkadot/metadata/Metadata/v4/static';
import rpcDataV5 from '@polkadot/metadata/Metadata/v5/static';
import rpcDataV6 from '@polkadot/metadata/Metadata/v6/static';
import rpcDataV7 from '@polkadot/metadata/Metadata/v7/static';
import rpcDataV8 from '@polkadot/metadata/Metadata/v8/static';
import { hexToU8a } from '@polkadot/util';

import { TypeRegistry } from '../codec';
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
      ).toBe('0xc99f5446efa57788f39ab529311f455042616c616e636573204672656542616c616e6365d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d');
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
          17, 1, 201, 159, 84, 70, 239, 165, 119, 136, 243, 154, 181, 41, 49, 31, 69, 80, 66, 97, 108, 97, 110, 99, 101, 115, 32, 70, 114, 101, 101, 66, 97, 108, 97, 110, 99, 101, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162, 125
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
      ).toBe('0x07bbf3533e23a7abe158f4fda1f945da53797374656d204576656e74546f70696373d487326614f066416308bf6aa4e5041d1949928e4b26ede98e3cebb36a3b1726');
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
      ).toEqual(Uint8Array.from([9, 1, 7, 187, 243, 83, 62, 35, 167, 171, 225, 88, 244, 253, 161, 249, 69, 218, 83, 121, 115, 116, 101, 109, 32, 69, 118, 101, 110, 116, 84, 111, 112, 105, 99, 115, 212, 135, 50, 102, 20, 240, 102, 65, 99, 8, 191, 106, 164, 229, 4, 29, 25, 73, 146, 142, 75, 38, 237, 233, 142, 60, 235, 179, 106, 59, 23, 38]));
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
      ).toBe('0x07bbf3533e23a7abe158f4fda1f945da53797374656d204576656e74546f706963732d75e0b46d6beacba6bd399436e56e380102030000000000000000000000000000000000000000000000000000000000');
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
      ).toEqual(Uint8Array.from([73, 1, 7, 187, 243, 83, 62, 35, 167, 171, 225, 88, 244, 253, 161, 249, 69, 218, 83, 121, 115, 116, 101, 109, 32, 69, 118, 101, 110, 116, 84, 111, 112, 105, 99, 115, 45, 117, 224, 180, 109, 107, 234, 203, 166, 189, 57, 148, 54, 229, 110, 56, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
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
      ).toBe('0x07bbf3533e23a7abe158f4fda1f945da53797374656d204576656e74546f706963732d75e0b46d6beacba6bd399436e56e380102030000000000000000000000000000000000000000000000000000000000');
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
      ).toEqual(Uint8Array.from([73, 1, 7, 187, 243, 83, 62, 35, 167, 171, 225, 88, 244, 253, 161, 249, 69, 218, 83, 121, 115, 116, 101, 109, 32, 69, 118, 101, 110, 116, 84, 111, 112, 105, 99, 115, 45, 117, 224, 180, 109, 107, 234, 203, 166, 189, 57, 148, 54, 229, 110, 56, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
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
      ).toBe('0x07bbf3533e23a7abe158f4fda1f945da53797374656d204576656e74546f706963732d75e0b46d6beacba6bd399436e56e380102030000000000000000000000000000000000000000000000000000000000');
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
      ).toEqual(Uint8Array.from([73, 1, 7, 187, 243, 83, 62, 35, 167, 171, 225, 88, 244, 253, 161, 249, 69, 218, 83, 121, 115, 116, 101, 109, 32, 69, 118, 101, 110, 116, 84, 111, 112, 105, 99, 115, 45, 117, 224, 180, 109, 107, 234, 203, 166, 189, 57, 148, 54, 229, 110, 56, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
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
      ).toBe('0x07bbf3533e23a7abe158f4fda1f945da53797374656d204576656e74546f706963732d75e0b46d6beacba6bd399436e56e380102030000000000000000000000000000000000000000000000000000000000');
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
      ).toEqual(Uint8Array.from([73, 1, 7, 187, 243, 83, 62, 35, 167, 171, 225, 88, 244, 253, 161, 249, 69, 218, 83, 121, 115, 116, 101, 109, 32, 69, 118, 101, 110, 116, 84, 111, 112, 105, 99, 115, 45, 117, 224, 180, 109, 107, 234, 203, 166, 189, 57, 148, 54, 229, 110, 56, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    });
  });
});
