// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createType, { TypeDefInfo, getTypeClass, getTypeDef, typeSplit } from './createType';

describe('typeSplit', () => {
  it('splits simple types into an array', () => {
    expect(
      typeSplit('Text, u32, u64')
    ).toEqual(['Text', 'u32', 'u64']);
  });

  it('splits nested combinations', () => {
    expect(
      typeSplit('Text, (u32), Vec<u64>')
    ).toEqual(['Text', '(u32)', 'Vec<u64>']);
  });

  it('keeps nested tuples together', () => {
    expect(
      typeSplit('Text, (u32, u128), Vec<u64>')
    ).toEqual(['Text', '(u32, u128)', 'Vec<u64>']);
  });

  it('keeps nested vector tuples together', () => {
    expect(
      typeSplit('Text, (u32, u128), Vec<(u64, u32)>')
    ).toEqual(['Text', '(u32, u128)', 'Vec<(u64, u32)>']);
  });

  it('allows for deep nesting', () => {
    expect(
      typeSplit('Text, (u32, (u128, u8)), Vec<(u64, (u32, u32))>')
    ).toEqual(['Text', '(u32, (u128, u8))', 'Vec<(u64, (u32, u32))>']);
  });

  it('checks for unclosed vec', () => {
    expect(
      () => typeSplit('Text, Vec<u64')
    ).toThrow(/Invalid defintion/);
  });

  it('checks for unclosed tuple', () => {
    expect(
      () => typeSplit('Text, (u64, u32')
    ).toThrow(/Invalid defintion/);
  });
});

describe('getTypeValue', () => {
  it('does not allow invalid tuples, end )', () => {
    expect(
      () => getTypeDef('(u64, u32')
    ).toThrow(/Expected '\(' closing with '\)'/);
  });

  it('does not allow invalid vectors, end >', () => {
    expect(
      () => getTypeDef('Vec<u64')
    ).toThrow(/Expected 'Vec<' closing with '>'/);
  });

  it('can return a type structure including only display type', () => {
    const type = getTypeDef('(u32, Compact<u32>, Vec<u64>, Option<u128>, (Text, Vec<(Bool, u128)>))');
    expect(
      type.displayType
    ).toEqual({
      info: TypeDefInfo.Tuple,
      type: '(u32, Compact<u32>, Vec<u64>, Option<u128>, (Text, Vec<(Bool, u128)>))',
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
    expect(type.implType).toEqual(undefined);
  });

  it('can return a type structure including only display type (actual)', () => {
    const type = getTypeDef('Vec<(PropIndex, Proposal, AccountId)>');
    expect(
      type.displayType
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
    expect(type.implType).toEqual(undefined);
  });

  it('returns an actual Struct', () => {
    const type = getTypeDef('{"balance":"Balance","account_id":"AccountId","log":"(u64, Signature)"}');
    expect(
      type.displayType
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
    expect(type.implType).toEqual(undefined);
  });

  it('can return a type structure including both display type and implement type', () => {
    const type = getTypeDef('Vec<(PropIndex,Proposal,AccountId)>|Vec<(u32,node_runtime#Call,sr_primitives#AccountId)>');
    expect(
      type.displayType
    ).toEqual({
      info: TypeDefInfo.Vector,
      type: 'Vec<(PropIndex,Proposal,AccountId)>',
      sub: {
        info: TypeDefInfo.Tuple,
        type: '(PropIndex,Proposal,AccountId)',
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

    expect(
      type.implType
    ).toEqual({
      info: TypeDefInfo.Vector,
      type: 'Vec<(u32,node_runtime#Call,sr_primitives#AccountId)>',
      sub: {
        info: TypeDefInfo.Tuple,
        type: '(u32,node_runtime#Call,sr_primitives#AccountId)',
        sub: [
          {
            info: TypeDefInfo.Plain,
            type: 'u32'
          },
          {
            info: TypeDefInfo.Plain,
            type: 'node_runtime#Call'
          },
          {
            info: TypeDefInfo.Plain,
            type: 'sr_primitives#AccountId'
          }
        ]
      }
    });
  });
});

describe('getTypeClass', () => {
  it('does not allow invalid types', () => {
    expect(
      () => getTypeClass(getTypeDef('SomethingInvalid'))
    ).toThrow(/determine type/);
  });
});

describe('createType', () => {
  it('allows creation of a Struct', () => {
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

  it('allows creation of a Enum (simple)', () => {
    expect(
      createType('{"_enum": ["A", "B", "C"]}', 1).toJSON()
    ).toEqual({ B: null });
  });

  it('allows creation of a Enum (parametrised)', () => {
    expect(
      createType('{"_enum": {"A": null, "B": "u32", "C": null} }', 1).toJSON()
    ).toEqual({ B: 0 });
  });
});
