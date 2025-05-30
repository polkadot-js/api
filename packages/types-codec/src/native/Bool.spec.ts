// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { CodecTo } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { Bool } from '@polkadot/types-codec';

describe('Bool', (): void => {
  const registry = new TypeRegistry();

  describe('decode', (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const testDecode = (type: string, input: Uint8Array | boolean | Boolean | Bool | number, expected: boolean): void =>
      it(`can decode from ${type}`, (): void => {
        expect(new Bool(registry, input).toJSON()).toBe(expected);
      });

    testDecode('Bool', new Bool(registry, true), true);
    testDecode('Boolean', Boolean(true), true);
    testDecode('boolean', true, true);
    testDecode('number', 1, true);
    testDecode('Uint8Array', Uint8Array.from([1]), true);
  });

  describe('encode', (): void => {
    const testEncode = (to: CodecTo, expected: string | Uint8Array | boolean, value: boolean): void =>
      it(`can encode ${to}`, (): void => {
        expect(new Bool(registry, value)[to]()).toEqual(expected);
      });

    testEncode('toJSON', true, true);
    testEncode('toHex', '0x01', true);
    testEncode('toString', 'true', true);
    testEncode('toU8a', Uint8Array.from([1]), true);
    testEncode('toU8a', Uint8Array.from([0]), false);
  });

  it('correctly encodes length', (): void => {
    expect(new Bool(registry, true).encodedLength).toEqual(1);
  });

  describe('utils', (): void => {
    it('compares against a boolean', (): void => {
      expect(new Bool(registry, true).eq(true)).toBe(true);
    });

    it('compares against a Bool', (): void => {
      expect(new Bool(registry, false).eq(new Bool(registry, false))).toBe(true);
    });

    it('has isTrue', (): void => {
      expect(new Bool(registry, true).isTrue).toBe(true);
    });

    it('has isFalse', (): void => {
      expect(new Bool(registry, true).isFalse).toBe(false);
    });

    it('has sane isEmpty aligning with the rest', (): void => {
      expect(new Bool(registry).isEmpty).toBe(true);
      expect(new Bool(registry, false).isEmpty).toBe(true);
      expect(new Bool(registry, true).isEmpty).toBe(false);
    });

    it('has a sane inspect', (): void => {
      expect(new Bool(registry, true).inspect()).toEqual({
        outer: [new Uint8Array([1])]
      });
    });
  });
});
