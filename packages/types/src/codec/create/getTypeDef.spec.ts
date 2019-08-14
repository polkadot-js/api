// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import { TypeDef, TypeDefInfo } from '../types';

import { getTypeDef } from '.';

describe('getTypeDef', (): void => {
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
