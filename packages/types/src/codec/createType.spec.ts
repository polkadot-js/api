// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../injector';

import { Codec, Constructor } from '../types';
import { TypeDef, TypeDefInfo } from './types';

import createType, { createClass, createTypeUnsafe, getTypeClass, getTypeDef, typeSplit, ClassOf } from './createType';
import getTypeRegistry from './typeRegistry';
import CodecSet from './Set';

describe('typeSplit', (): void => {
  it('splits simple types into an array', (): void => {
    expect(
      typeSplit('Text, u32, u64')
    ).toEqual(['Text', 'u32', 'u64']);
  });

  it('splits nested combinations', (): void => {
    expect(
      typeSplit('Text, (u32), Vec<u64>')
    ).toEqual(['Text', '(u32)', 'Vec<u64>']);
  });

  it('keeps nested tuples together', (): void => {
    expect(
      typeSplit('Text, (u32, u128), Vec<u64>')
    ).toEqual(['Text', '(u32, u128)', 'Vec<u64>']);
  });

  it('keeps nested vector tuples together', (): void => {
    expect(
      typeSplit('Text, (u32, u128), Vec<(u64, u32)>')
    ).toEqual(['Text', '(u32, u128)', 'Vec<(u64, u32)>']);
  });

  it('allows for deep nesting', (): void => {
    expect(
      typeSplit('Text, (u32, (u128, u8)), Vec<(u64, (u32, u32))>')
    ).toEqual(['Text', '(u32, (u128, u8))', 'Vec<(u64, (u32, u32))>']);
  });

  it('checks for unclosed vec', (): void => {
    expect(
      (): string[] => typeSplit('Text, Vec<u64')
    ).toThrow(/Invalid defintion/);
  });

  it('checks for unclosed tuple', (): void => {
    expect(
      (): string[] => typeSplit('Text, (u64, u32')
    ).toThrow(/Invalid defintion/);
  });
});

describe('getTypeValue', (): void => {
  it('does not allow invalid tuples, end )', (): void => {
    expect(
      (): TypeDef => getTypeDef('(u64, u32')
    ).toThrow(/Expected '\(' closing with '\)'/);
  });

  it('does not allow invalid vectors, end >', (): void => {
    expect(
      (): TypeDef => getTypeDef('Vec<u64')
    ).toThrow(/Expected 'Vec<' closing with '>'/);
  });

  it('returns a type structure', (): void => {
    expect(
      getTypeDef('(u32, Compact<u32>, Vec<u64>, Option<u128>, DoubleMap<u128>, (Text, Vec<(Bool, u128)>))')
    ).toEqual({
      info: TypeDefInfo.Tuple,
      type: '(u32, Compact<u32>, Vec<u64>, Option<u128>, DoubleMap<u128>, (Text, Vec<(Bool, u128)>))',
      sub: [
        {
          info: TypeDefInfo.Plain,
          type: 'u32'
        },
        {
          info: TypeDefInfo.Compact,
          type: 'Compact<u32>',
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u32'
          }
        },
        {
          info: TypeDefInfo.Vec,
          type: 'Vec<u64>',
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u64'
          }
        },
        {
          info: TypeDefInfo.Option,
          type: 'Option<u128>',
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u128'
          }
        },
        {
          info: TypeDefInfo.DoubleMap,
          type: 'DoubleMap<u128>',
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u128'
          }
        },
        {
          info: TypeDefInfo.Tuple,
          type: '(Text, Vec<(Bool, u128)>)',
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'Text'
            },
            {
              info: TypeDefInfo.Vec,
              type: 'Vec<(Bool, u128)>',
              sub: {
                info: TypeDefInfo.Tuple,
                type: '(Bool, u128)',
                sub: [
                  {
                    info: TypeDefInfo.Plain,
                    type: 'Bool'
                  },
                  {
                    info: TypeDefInfo.Plain,
                    type: 'u128'
                  }
                ]
              }
            }
          ]
        }
      ]
    });
  });

  it('returns a type structure (actual)', (): void => {
    expect(
      getTypeDef('Vec<(PropIndex, Proposal, AccountId)>')
    ).toEqual({
      info: TypeDefInfo.Vec,
      type: 'Vec<(PropIndex, Proposal, AccountId)>',
      sub: {
        info: TypeDefInfo.Tuple,
        type: '(PropIndex, Proposal, AccountId)',
        sub: [
          {
            info: TypeDefInfo.Plain,
            type: 'PropIndex'
          },
          {
            info: TypeDefInfo.Plain,
            type: 'Proposal'
          },
          {
            info: TypeDefInfo.Plain,
            type: 'AccountId'
          }
        ]
      }
    });
  });

  it('returns an actual Struct', (): void => {
    expect(
      getTypeDef('{"balance":"Balance","account_id":"AccountId","log":"(u64, Signature)"}')
    ).toEqual({
      info: TypeDefInfo.Struct,
      type: '{"balance":"Balance","account_id":"AccountId","log":"(u64, Signature)"}',
      sub: [
        {
          info: TypeDefInfo.Plain,
          name: 'balance',
          type: 'Balance'
        },
        {
          info: TypeDefInfo.Plain,
          name: 'account_id',
          type: 'AccountId'
        },
        {
          info: TypeDefInfo.Tuple,
          name: 'log',
          type: '(u64, Signature)',
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'u64'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'Signature'
            }
          ]
        }
      ]
    });
  });
});

describe('getTypeClass', (): void => {
  it('does not allow invalid types', (): void => {
    expect(
      (): Constructor<Codec> => getTypeClass('SomethingInvalid' as any)
    ).toThrow(/determine type/);
  });
});

describe('createClass', (): void => {
  it('should memoize from strings', (): void => {
    const a = createClass('BabeWeight');
    const b = createClass('BabeWeight');

    expect(a).toBe(b);
  });

  it('should return equivalents for Bytes & Vec<u8>', (): void => {
    const A = createClass('Vec<u8>');
    const B = createClass('Bytes');

    expect(new A() instanceof B).toBe(true);
  });
});

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
    ).toEqual({ B: null });
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
