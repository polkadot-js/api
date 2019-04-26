// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { getTypeDef, typeSplit } from './createType';
import { TypeDefInfo } from './TypeRegistry';

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

  it('returns a type structure', () => {
    expect(
      getTypeDef('(u32, Compact<u32>, Vec<u64>, Option<u128>, (Text, Vec<(Bool, u128)>))')
    ).toEqual({
      type: '(u32, Compact<u32>, Vec<u64>, Option<u128>, (Text, Vec<(Bool, u128)>))',
      meta: {
        info: TypeDefInfo.Tuple
      },
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
  });

  it('returns a type structure (actual)', () => {
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

  it('returns an actual Struct', () => {
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
