// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { Bytes } from '@polkadot/types-codec';

describe('Bytes', (): void => {
  const registry = new TypeRegistry();
  const NUM = [0x3a, 0x63, 0x6f, 0x64, 0x65];
  const U8A = new Uint8Array([0x14, ...NUM]);
  const HEX = '0x3a636f6465';

  describe('construction', (): void => {
    it('decodes when input is string', (): void => {
      expect(
        new Bytes(registry, ':code').toU8a()
      ).toEqual(U8A);
    });

    it('decodes when hex is not length prefixed', (): void => {
      expect(
        new Bytes(registry, HEX).toU8a()
      ).toEqual(U8A);
    });

    it('decodes from UInt8Array', (): void => {
      expect(
        new Bytes(registry, U8A).toU8a()
      ).toEqual(U8A);
    });

    it('decodes from number[]', (): void => {
      expect(
        new Bytes(registry, NUM).toU8a()
      ).toEqual(U8A);
    });

    it('creates via storagedata (no prefix)', (): void => {
      expect(
        new Bytes(
          registry,
          registry.createType('StorageData', HEX)
        ).toU8a()
      ).toEqual(U8A);
    });

    it('encodes from itself', (): void => {
      expect(
        new Bytes(registry, new Bytes(registry, HEX)).toU8a()
      ).toEqual(U8A);
    });

    it('strips length with toU8a(true)', (): void => {
      expect(
        new Bytes(registry, HEX).toU8a(true)
      ).toEqual(U8A.subarray(1));
    });

    it('strips length with toHex', (): void => {
      expect(
        new Bytes(registry, HEX).toHex()
      ).toEqual(HEX);
    });
  });

  it('has a sane inspect', (): void => {
    expect(
      new Bytes(registry, '0x12345678').inspect()
    ).toEqual({
      outer: [new Uint8Array([4 << 2]), new Uint8Array([0x12, 0x34, 0x56, 0x78])]
    });
  });
});
