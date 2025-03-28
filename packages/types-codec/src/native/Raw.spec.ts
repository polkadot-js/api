// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { AnyU8a, CodecTo } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { Raw } from '@polkadot/types-codec';

const registry = new TypeRegistry();

const testDecode = (type: string, input: AnyU8a, expected: string): void =>
  it(`can decode from ${type}`, (): void => {
    const e = new Raw(registry, input);

    expect(e.toString()).toBe(expected);
  });

const testEncode = (to: CodecTo, expected: AnyU8a): void =>
  it(`can encode ${to}`, (): void => {
    const e = new Raw(registry, [1, 2, 3, 4, 5]);

    expect(e[to]()).toEqual(expected);
  });

describe('Raw', (): void => {
  let u8a: Raw;

  beforeEach((): void => {
    u8a = new Raw(registry, [1, 2, 3, 4, 5]);
  });

  testDecode('Array', [1, 2, 3, 4, 5], '0x0102030405');
  testDecode('hex', '0x0102030405', '0x0102030405');
  testDecode('U8a', new Uint8Array([1, 2, 3, 4, 5]), '0x0102030405');
  testDecode('Uint8Array', Uint8Array.from([1, 2, 3, 4, 5]), '0x0102030405');

  testEncode('toJSON', '0x0102030405');
  testEncode('toHex', '0x0102030405');
  testEncode('toPrimitive', '0x0102030405');
  testEncode('toString', '0x0102030405');
  testEncode('toU8a', Uint8Array.from([1, 2, 3, 4, 5]));

  it('contains the length of the elements', (): void => {
    expect(u8a.length).toEqual(5);
  });

  it('correctly encodes length', (): void => {
    expect(u8a.encodedLength).toEqual(5);
  });

  it('allows wrapping of a pre-existing instance', (): void => {
    expect(
      new Raw(registry, u8a).length
    ).toEqual(5);
  });

  it('implements subarray correctly', (): void => {
    expect(u8a.subarray(1, 3)).toEqual(Uint8Array.from([2, 3]));
  });

  describe('utils', (): void => {
    it('compares against other U8a', (): void => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4, 5]))).toBe(true);
    });

    it('compares against other U8a (non-length)', (): void => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4]))).toBe(false);
    });

    it('compares against other U8a (mismatch)', (): void => {
      expect(u8a.eq(new Uint8Array([1, 2, 3, 4, 6]))).toBe(false);
    });

    it('compares against hex inputs', (): void => {
      expect(u8a.eq('0x0102030405')).toBe(true);
    });

    it('has valid isAscii', (): void => {
      expect(u8a.isAscii).toBe(false);
      expect(new Raw(registry, '0x2021222324').isAscii).toBe(true);
    });

    it('has valid toHuman with disableAscii option set as true', (): void => {
      expect(new Raw(registry, new Uint8Array([85, 85, 85, 85, 85, 85, 85, 85])).toHuman(undefined, true)).toEqual('0x5555555555555555');
    });

    it('has valid toPrimitive', (): void => {
      expect(new Raw(registry, 'testing').toPrimitive()).toEqual('testing');
      expect(new Raw(registry, '0xe4bda0e5a5bd').toPrimitive()).toEqual('0xe4bda0e5a5bd');
    });

    it('has valid toUtf8', (): void => {
      expect(new Raw(registry, 'Приветствую, ми').toUtf8()).toEqual('Приветствую, ми');
      expect(new Raw(registry, '0xe4bda0e5a5bd').toUtf8()).toEqual('你好');
    });

    it('throws on invalid utf8', (): void => {
      expect(
        () => new Raw(registry, '0x7f07b1f87709608bee603bbc79a0dfc29cd315c1351a83aa31adf7458d7d3003').toUtf8()
      ).toThrow(/The character sequence is not a valid Utf8 string/);
    });

    it('has a sane inspect', (): void => {
      expect(
        new Raw(registry, [1, 2, 3, 4, 5]).inspect()
      ).toEqual({
        outer: [new Uint8Array([1, 2, 3, 4, 5])]
      });
    });
  });
});
