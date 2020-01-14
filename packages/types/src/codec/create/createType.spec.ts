// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createClass, createType, createTypeUnsafe, ClassOf, TypeRegistry } from '.';
import CodecSet from '../Set';

describe('createType', (): void => {
  const registry = new TypeRegistry();

  it('allows creation of a Struct', (): void => {
    expect(
      createTypeUnsafe(registry, '{"balance":"Balance","index":"u32"}', [{
        balance: 1234,
        index: '0x10'
      }]).toJSON()
    ).toEqual({
      balance: 1234,
      index: 16
    });
  });

  it('allows creation of a BTreeMap', (): void => {
    expect(
      createTypeUnsafe(registry, 'BTreeMap<Text,u32>', ['0x041c62617a7a696e6745000000']).toString()
    ).toEqual('{"bazzing":69}');
  });

  it('allows creation of a BTreeSet', (): void => {
    expect(
      createTypeUnsafe(registry, 'BTreeSet<u32>', ['0x1002000000180000001e00000050000000']).toString()
    ).toEqual('[2,24,30,80]');
  });

  it('allows creation of a Result', (): void => {
    expect(
      createTypeUnsafe(registry, 'Result<u32,Text>', ['0x011064656667']).toJSON()
    ).toEqual({ Error: 'defg' });
  });

  it('allows creation of a Tuple', (): void => {
    expect(
      createTypeUnsafe(registry, '(Balance,u32)', [[1234, 5678]]).toJSON()
    ).toEqual([1234, 5678]);
  });

  it('allows creation of a Enum (simple)', (): void => {
    expect(
      createTypeUnsafe(registry, '{"_enum": ["A", "B", "C"]}', [1]).toJSON()
    ).toEqual('b');
  });

  it('allows creation of a Enum (parametrised)', (): void => {
    expect(
      createTypeUnsafe(registry, '{"_enum": {"A": null, "B": "u32", "C": null} }', [1]).toJSON()
    ).toEqual({ B: 0 });
  });

  it('allows creation of a Set', (): void => {
    expect(
      createTypeUnsafe<CodecSet>(registry, '{"_set": { "A": 1, "B": 2, "C": 4, "D": 8, "E": 16, "G": 32, "H": 64, "I": 128 } }', [1 + 4 + 16 + 64]).strings
    ).toEqual(['A', 'C', 'E', 'H']);
  });

  it('allows creation of a [u8; 8]', (): void => {
    expect(
      createTypeUnsafe(registry, '[u8; 8]', [[0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67, 0x00]]).toHex()
    ).toEqual('0x1200230045006700');
  });

  it('allows creation of a [u16; 4]', (): void => {
    expect(
      createTypeUnsafe(registry, '[u16; 4]', [[0x1200, 0x2300, 0x4500, 0x6700]]).toU8a()
    ).toEqual(new Uint8Array([0x00, 0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67]));
  });

  describe('instanceof', (): void => {
    it('instanceof should work (primitive type)', (): void => {
      const value = createType(registry, 'Balance', 1234);

      expect(value instanceof ClassOf(registry, 'Balance')).toBe(true);
    });

    it('instanceof should work (srml type)', (): void => {
      const value = createType(registry, 'Gas', 1234);
      const Gas = ClassOf(registry, 'Gas');

      expect(value instanceof Gas).toBe(true);
    });

    it('instanceof should work (complex type)', (): void => {
      registry.register({
        TestComplex: {
          balance: 'Balance',
          accountId: 'AccountId',
          log: '(u64, u32)',
          fromSrml: 'Gas'
        }
      });

      const value = createTypeUnsafe(registry, 'TestComplex', [{
        balance: 123,
        accountId: '0x1234567812345678123456781234567812345678123456781234567812345678',
        log: [456, 789],
        fromSrml: 0
      }]);

      expect(value instanceof createClass(registry, 'TestComplex')).toBe(true);
    });

    it('allows for re-registration of a type', (): void => {
      const balDef = createType(registry, 'Balance');

      expect(balDef instanceof ClassOf(registry, 'Balance'));
      expect(balDef.bitLength()).toEqual(128);

      registry.register({ Balance: 'u32' });

      const balu32 = createType(registry, 'Balance');

      expect(balu32 instanceof ClassOf(registry, 'Balance'));
      expect(balu32.bitLength()).toEqual(32);
    });

    it('allows for re-registration of a type (affecting derives)', (): void => {
      registry.register({
        Balance: 'u128',
        TestComplex: {
          balance: 'Balance',
          accountId: 'AccountId',
          log: '(u64, u32)',
          fromSrml: 'Gas'
        }
      });

      const cmpDef: any = createTypeUnsafe(registry, 'TestComplex');

      expect(cmpDef.balance.bitLength()).toEqual(128);

      registry.register({ Balance: 'u32' });

      const cmpu32: any = createTypeUnsafe(registry, 'TestComplex');

      expect(cmpu32.balance.bitLength()).toEqual(32);
    });
  });
});
