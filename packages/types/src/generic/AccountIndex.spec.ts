// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';

import { TypeRegistry } from '../create';
import AccountIndex from './AccountIndex';

describe('AccountIndex', (): void => {
  const registry = new TypeRegistry();

  it('creates a BN representation', (): void => {
    expect(
      registry.createType('AccountIndex', new Uint8Array([17, 18, 19, 20])).toNumber()
    ).toEqual(336794129);
  });

  it('creates from BigInt', (): void => {
    expect(
      registry.createType('AccountIndex', 336794129n).toNumber()
    ).toEqual(336794129);
  });

  it('creates a BN representation (from ss-58)', (): void => {
    expect(
      registry.createType('AccountIndex', 'Mwz15xP2').toNumber()
    ).toEqual(336794129);
  });

  it('constructs 2-byte from number', (): void => {
    expect(
      registry.createType('AccountIndex', 256 * 1).toString()
    ).toEqual('25GUyv');
  });

  it('constructs from number', (): void => {
    expect(
      registry.createType('AccountIndex', new BN(336794129)).toString()
    ).toEqual('Mwz15xP2');
  });

  it('compares ss-58 values', (): void => {
    expect(registry.createType('AccountIndex', 256 * 1).eq('25GUyv')).toBe(true);
  });

  it('compares numbers', (): void => {
    expect(registry.createType('AccountIndex', '2jpAFn').eq(256 * 1)).toBe(true);
  });

  describe('calcLength', (): void => {
    const testLength = (value: number, length: number): void => {
      expect(AccountIndex.calcLength(value)).toEqual(length);
    };

    it('returns 1 for <= 0xef', (): void => {
      testLength(0xef, 1);
    });

    it('returns 2 for > 0xef', (): void => {
      testLength(0xf0, 2);
    });

    it('returns 4 bytes for 32-bit inputs', (): void => {
      testLength(0xffeeddcc, 4);
    });

    it('returns 8 bytes for larger inputs', (): void => {
      testLength(0x122334455, 8);
    });
  });
});
