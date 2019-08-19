// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import { createClass, createType, createTypeUnsafe, getTypeRegistry, ClassOf } from '.';
import CodecSet from '../Set';

describe('createType', (): void => {
  it('allows creation of a Struct', (): void => {
    expect(
      createTypeUnsafe('{"balance":"Balance","index":"u32"}', [{
        balance: 1234,
        index: '0x10'
      }]).toJSON()
    ).toEqual({
      balance: 1234,
      index: 16
    });
  });

  it('allows creation of a Tuple', (): void => {
    expect(
      createTypeUnsafe('(Balance,u32)', [[1234, 5678]]).toJSON()
    ).toEqual([1234, 5678]);
  });

  it('allows creation of a Enum (simple)', (): void => {
    expect(
      createTypeUnsafe('{"_enum": ["A", "B", "C"]}', [1]).toJSON()
    ).toEqual(1);
  });

  it('allows creation of a Enum (parametrised)', (): void => {
    expect(
      createTypeUnsafe('{"_enum": {"A": null, "B": "u32", "C": null} }', [1]).toJSON()
    ).toEqual({ B: 0 });
  });

  it('allows creation of a Set', (): void => {
    expect(
      createTypeUnsafe<CodecSet>('{"_set": { "A": 1, "B": 2, "C": 4, "D": 8, "E": 16, "G": 32, "H": 64, "I": 128 } }', [1 + 4 + 16 + 64]).strings
    ).toEqual(['A', 'C', 'E', 'H']);
  });

  it('allows creation of a [u8; 8]', (): void => {
    expect(
      createTypeUnsafe('[u8; 8]', [[0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67, 0x00]]).toHex()
    ).toEqual('0x1200230045006700');
  });

  it('allows creation of a [u16; 4]', (): void => {
    expect(
      createTypeUnsafe('[u16; 4]', [[0x1200, 0x2300, 0x4500, 0x6700]]).toU8a()
    ).toEqual(new Uint8Array([0x00, 0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67]));
  });

  describe('instanceof', (): void => {
    it('instanceof should work (primitive type)', (): void => {
      const value = createType('Balance', 1234);

      expect(value instanceof ClassOf('Balance')).toBe(true);
    });

    it('instanceof should work (srml type)', (): void => {
      const value = createType('Gas', 1234);
      const Gas = ClassOf('Gas');

      expect(value instanceof Gas).toBe(true);
    });

    it('instanceof should work (complex type)', (): void => {
      getTypeRegistry().register({
        TestComplex: {
          balance: 'Balance',
          accountId: 'AccountId',
          log: '(u64, u32)',
          fromSrml: 'Gas'
        }
      });

      const value = createTypeUnsafe('TestComplex', [{
        balance: 123,
        accountId: '0x1234567812345678123456781234567812345678123456781234567812345678',
        log: [456, 789],
        fromSrml: 0
      }]);

      expect(value instanceof createClass('TestComplex')).toBe(true);
    });

    it('allows for re-registration of a type', (): void => {
      const balDef = createType('Balance');

      expect(balDef instanceof ClassOf('Balance'));
      expect(balDef.bitLength()).toEqual(128);

      getTypeRegistry().register({ Balance: 'u32' });

      const balu32 = createType('Balance');

      expect(balu32 instanceof ClassOf('Balance'));
      expect(balu32.bitLength()).toEqual(32);
    });

    it('allows for re-registration of a type (affecting derives)', (): void => {
      getTypeRegistry().register({
        Balance: 'u128',
        TestComplex: {
          balance: 'Balance',
          accountId: 'AccountId',
          log: '(u64, u32)',
          fromSrml: 'Gas'
        }
      });

      const cmpDef: any = createTypeUnsafe('TestComplex');

      expect(cmpDef.balance.bitLength()).toEqual(128);

      getTypeRegistry().register({ Balance: 'u32' });

      const cmpu32: any = createTypeUnsafe('TestComplex');

      expect(cmpu32.balance.bitLength()).toEqual(32);
    });
  });
});
