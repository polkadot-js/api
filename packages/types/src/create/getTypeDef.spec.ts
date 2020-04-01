// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from './types';

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
    ).toThrow(/Unable to find closing matching/);
  });

  it('maps empty tuples to empty tuple', (): void => {
    expect(
      getTypeDef('()')
    ).toEqual({
      info: TypeDefInfo.Tuple,
      sub: [],
      type: '()'
    });
  });

  it('properly decodes a BTreeMap<u32, Text>', (): void => {
    expect(
      getTypeDef('BTreeMap<u32, Text>')
    ).toEqual({
      info: TypeDefInfo.BTreeMap,
      sub: [
        {
          info: TypeDefInfo.Plain,
          type: 'u32'
        },
        {
          info: TypeDefInfo.Plain,
          type: 'Text'
        }
      ],
      type: 'BTreeMap<u32,Text>'
    });
  });

  it('properly decodes a BTreeSet<Text>', (): void => {
    expect(
      getTypeDef('BTreeSet<Text>')
    ).toEqual({
      info: TypeDefInfo.BTreeSet,
      sub: {
        info: TypeDefInfo.Plain,
        type: 'Text'
      },
      type: 'BTreeSet<Text>'
    });
  });

  it('properly decodes a Result<u32, Text>', (): void => {
    expect(
      getTypeDef('Result<u32, Text>')
    ).toEqual({
      info: TypeDefInfo.Result,
      sub: [
        {
          info: TypeDefInfo.Plain,
          type: 'u32'
        },
        {
          info: TypeDefInfo.Plain,
          type: 'Text'
        }
      ],
      type: 'Result<u32,Text>'
    });
  });

  it('properly decodes a Result<Result<(), u32>, Text>', (): void => {
    expect(
      getTypeDef('Result<Result<Null,u32>,Text>')
    ).toEqual({
      info: TypeDefInfo.Result,
      sub: [
        {
          info: TypeDefInfo.Result,
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'Null'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'u32'
            }
          ],
          type: 'Result<Null,u32>'
        },
        {
          info: TypeDefInfo.Plain,
          type: 'Text'
        }
      ],
      type: 'Result<Result<Null,u32>,Text>'
    });
  });

  it('returns a type structure', (): void => {
    expect(
      getTypeDef('(u32, Compact<u32>, Vec<u64>, Option<u128>, (Text,Vec<(Bool,u128)>))')
    ).toEqual({
      info: TypeDefInfo.Tuple,
      sub: [
        {
          info: TypeDefInfo.Plain,
          type: 'u32'
        },
        {
          info: TypeDefInfo.Compact,
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u32'
          },
          type: 'Compact<u32>'
        },
        {
          info: TypeDefInfo.Vec,
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u64'
          },
          type: 'Vec<u64>'
        },
        {
          info: TypeDefInfo.Option,
          sub: {
            info: TypeDefInfo.Plain,
            type: 'u128'
          },
          type: 'Option<u128>'
        },
        {
          info: TypeDefInfo.Tuple,
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'Text'
            },
            {
              info: TypeDefInfo.Vec,
              sub: {
                info: TypeDefInfo.Tuple,
                sub: [
                  {
                    info: TypeDefInfo.Plain,
                    type: 'Bool'
                  },
                  {
                    info: TypeDefInfo.Plain,
                    type: 'u128'
                  }
                ],
                type: '(Bool,u128)'
              },
              type: 'Vec<(Bool,u128)>'
            }
          ],
          type: '(Text,Vec<(Bool,u128)>)'
        }
      ],
      type: '(u32,Compact<u32>,Vec<u64>,Option<u128>,(Text,Vec<(Bool,u128)>))'
    });
  });

  it('returns a type structure (sanitized)', (): void => {
    expect(
      getTypeDef('Vec<(Box<PropIndex>, Proposal,Lookup::Target)>')
    ).toEqual({
      info: TypeDefInfo.Vec,
      sub: {
        info: TypeDefInfo.Tuple,
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
            type: 'LookupTarget'
          }
        ],
        type: '(PropIndex,Proposal,LookupTarget)'
      },
      type: 'Vec<(PropIndex,Proposal,LookupTarget)>'
    });
  });

  it('returns a type structure (actual)', (): void => {
    expect(
      getTypeDef('Vec<(PropIndex, Proposal, AccountId)>')
    ).toEqual({
      info: TypeDefInfo.Vec,
      sub: {
        info: TypeDefInfo.Tuple,
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
        ],
        type: '(PropIndex,Proposal,AccountId)'
      },
      type: 'Vec<(PropIndex,Proposal,AccountId)>'
    });
  });

  it('returns an actual Struct', (): void => {
    expect(
      getTypeDef('{"balance":"Balance","account_id":"AccountId","log":"(u64, Signature)"}')
    ).toEqual({
      info: TypeDefInfo.Struct,
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
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'u64'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'Signature'
            }
          ],
          type: '(u64,Signature)'
        }
      ],
      type: '{"balance":"Balance","account_id":"AccountId","log":"(u64,Signature)"}'
    });
  });

  // FIXME - not handled atm
  it.skip('creates a nested fixed vec', (): void => {
    expect(
      getTypeDef('[[u8;32];3]')
    ).toEqual({
      ext: {
        length: 3,
        type: '[u8;32]'
      },
      info: TypeDefInfo.VecFixed,
      sub: {
        ext: {
          length: 32
        },
        info: TypeDefInfo.VecFixed,
        sub: {
          info: TypeDefInfo.Plain,
          type: 'u8'
        },
        type: '[u8;32]'
      },
      type: '[[u8;32];3]'
    });
  });
});
