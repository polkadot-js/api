// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../types';

import createType, { TypeDef, TypeDefInfo, createClass, getTypeClass, getTypeDef, typeSplit, ClassOf } from './createType';
import Balance from '../primitive/Balance';
import Text from '../primitive/Text';
import { injectDefinitions } from '../srml';

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
          info: TypeDefInfo.Vector,
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
              info: TypeDefInfo.Vector,
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
      info: TypeDefInfo.Vector,
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
  beforeAll((): void => {
    injectDefinitions();
  });

  it('should memoize from strings', (): void => {
    const a = createClass('BabeWeight');
    const b = createClass('BabeWeight');

    expect(a).toBe(b);
  });

  it('should memoize from Text', (): void => {
    const a = createClass(new Text('TrieId'));
    const b = createClass(new Text('TrieId'));

    expect(a).toBe(b);
  });

  it('should memoize from string/Text combo', (): void => {
    const a = createClass(new Text('AuthorityWeight'));
    const b = createClass('AuthorityWeight');

    expect(a).toBe(b);
  });
});

describe('createType', (): void => {
  it('allows creation of a Struct', (): void => {
    expect(
      createType('{"balance":"Balance","index":"u32"}', {
        balance: 1234,
        index: '0x10'
      }).toJSON()
    ).toEqual({
      balance: 1234,
      index: 16
    });
  });

  it('allows creation of a Enum (simple)', (): void => {
    expect(
      createType('{"_enum": ["A", "B", "C"]}', 1).toJSON()
    ).toEqual({ B: null });
  });

  it('allows creation of a Enum (parametrised)', (): void => {
    expect(
      createType('{"_enum": {"A": null, "B": "u32", "C": null} }', 1).toJSON()
    ).toEqual({ B: 0 });
  });

  it('allows creation of a [u8; 8]', (): void => {
    expect(
      createType('[u8; 8]', [0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67, 0x00]).toHex()
    ).toEqual('0x1200230045006700');
  });

  it('allows creation of a [u16; 4]', (): void => {
    expect(
      createType('[u16; 4]', [0x1200, 0x2300, 0x4500, 0x6700]).toU8a()
    ).toEqual(new Uint8Array([0x00, 0x12, 0x00, 0x23, 0x00, 0x45, 0x00, 0x67]));
  });

  it('throw error when create base is a StorageData with null value and isPedantic is true', (): void => {
    const base = createType('StorageData', null);

    expect(
      (): Codec => createType('DoubleMap<Vec<(BlockNumber,EventIndex)>>', base, true)
    ).toThrow(/ Input doesn't match output, received 0x, created 0x00/);
  });

  it('throw error when create base is a StorageData with null value and isPedantic is true', (): void => {
    const base = createType('StorageData', null);

    expect(
      (): Codec => createType('Vec<(BlockNumber,EventIndex)>', base, true)
    ).toThrow(/Input doesn't match output, received 0x, created 0x00/);
  });

  describe('instanceof', (): void => {
    beforeAll((): void => {
      injectDefinitions();
    });

    it('instanceof should work (primitive type)', (): void => {
      const value = createType('Balance', 1234);

      expect(value instanceof Balance).toBe(true);
    });

    it('instanceof should work (srml type)', (): void => {
      const value = createType('Gas', 1234);
      const Gas = ClassOf('Gas');

      expect(value instanceof Gas).toBe(true);
    });

    it('instanceof should work (complex type)', (): void => {
      const complexType = '{"balance":"Balance","account_id":"AccountId","log":"(u64, u32)","fromSrml":"Gas"}';

      const value = createType(complexType, {
        balance: 123,
        accountId: '',
        log: [456, 789],
        fromSrml: 0
      });
      const ComplexType = createClass(complexType);

      expect(value instanceof ComplexType).toBe(true);
    });
  });
});
