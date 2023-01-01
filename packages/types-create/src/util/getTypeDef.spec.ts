// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';

describe('getTypeDef', (): void => {
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

  it('creates a nested fixed vec', (): void => {
    expect(
      getTypeDef('[[[bool; 3]; 6]; 9]')
    ).toEqual({
      info: TypeDefInfo.VecFixed,
      length: 9,
      sub: {
        info: TypeDefInfo.VecFixed,
        length: 6,
        sub: {
          info: TypeDefInfo.VecFixed,
          length: 3,
          sub: {
            info: TypeDefInfo.Plain,
            type: 'bool'
          },
          type: '[bool;3]'
        },
        type: '[[bool;3];6]'
      },
      type: '[[[bool;3];6];9]'
    });
  });

  it('creates a nested fixed vec (named)', (): void => {
    expect(
      getTypeDef('[[bool; 6]; 3; MyType]')
    ).toEqual({
      displayName: 'MyType',
      info: TypeDefInfo.VecFixed,
      length: 3,
      sub: {
        info: TypeDefInfo.VecFixed,
        length: 6,
        sub: {
          info: TypeDefInfo.Plain,
          type: 'bool'
        },
        type: '[bool;6]'
      },
      type: '[[bool;6];3;MyType]'
    });
  });

  it('creates a nested tuple', (): void => {
    expect(
      getTypeDef('((u32, u64), u128)')
    ).toEqual({
      info: TypeDefInfo.Tuple,
      sub: [
        {
          info: TypeDefInfo.Tuple,
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'u32'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'u64'
            }
          ],
          type: '(u32,u64)'
        },
        {
          info: TypeDefInfo.Plain,
          type: 'u128'
        }
      ],
      type: '((u32,u64),u128)'
    });
  });

  it('creates a nested enum with tuple/struct', (): void => {
    expect(
      getTypeDef(JSON.stringify({
        _enum: {
          A: 'u32',
          B: '(u32, bool)',
          C: {
            d: 'AccountId',
            e: 'Balance'
          }
        }
      }))
    ).toEqual({
      info: TypeDefInfo.Enum,
      sub: [
        {
          index: 0,
          info: TypeDefInfo.Plain,
          name: 'A',
          type: 'u32'
        },
        {
          index: 1,
          info: TypeDefInfo.Tuple,
          name: 'B',
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'u32'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          index: 2,
          info: TypeDefInfo.Struct,
          name: 'C',
          sub: [
            {
              info: TypeDefInfo.Plain,
              name: 'd',
              type: 'AccountId'
            },
            {
              info: TypeDefInfo.Plain,
              name: 'e',
              type: 'Balance'
            }
          ],
          type: '{"d":"AccountId","e":"Balance"}'
        }
      ],
      type: '{"_enum":{"A":"u32","B":"(u32,bool)","C":{"d":"AccountId","e":"Balance"}}}'
    });
  });

  it('creates a nested struct with struct/tuple', (): void => {
    expect(
      getTypeDef(JSON.stringify({
        a: 'u32',
        b: '(u32, bool)',
        c: {
          d: 'AccountId',
          e: 'Balance'
        }
      }))
    ).toEqual({
      info: TypeDefInfo.Struct,
      sub: [
        {
          info: TypeDefInfo.Plain,
          name: 'a',
          type: 'u32'
        },
        {
          info: TypeDefInfo.Tuple,
          name: 'b',
          sub: [
            {
              info: TypeDefInfo.Plain,
              type: 'u32'
            },
            {
              info: TypeDefInfo.Plain,
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          info: TypeDefInfo.Struct,
          name: 'c',
          sub: [
            {
              info: TypeDefInfo.Plain,
              name: 'd',
              type: 'AccountId'
            },
            {
              info: TypeDefInfo.Plain,
              name: 'e',
              type: 'Balance'
            }
          ],
          type: '{"d":"AccountId","e":"Balance"}'
        }
      ],
      type: '{"a":"u32","b":"(u32,bool)","c":{"d":"AccountId","e":"Balance"}}'
    });
  });

  it('creates a Vec with nested fixed', (): void => {
    expect(
      getTypeDef('Vec<[[[bool; 3]; 6]; 9]>')
    ).toEqual({
      info: TypeDefInfo.Vec,
      sub: {
        info: TypeDefInfo.VecFixed,
        length: 9,
        sub: {
          info: TypeDefInfo.VecFixed,
          length: 6,
          sub: {
            info: TypeDefInfo.VecFixed,
            length: 3,
            sub: {
              info: TypeDefInfo.Plain,
              type: 'bool'
            },
            type: '[bool;3]'
          },
          type: '[[bool;3];6]'
        },
        type: '[[[bool;3];6];9]'
      },
      type: 'Vec<[[[bool;3];6];9]>'
    });
  });

  it('creates a Vec with nested struct', (): void => {
    expect(
      getTypeDef('Vec<{ "a": "u32", "b": "(u32, bool)" }>')
    ).toEqual({
      info: TypeDefInfo.Vec,
      sub: {
        info: TypeDefInfo.Struct,
        sub: [
          {
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            info: TypeDefInfo.Tuple,
            name: 'b',
            sub: [
              {
                info: TypeDefInfo.Plain,
                type: 'u32'
              },
              {
                info: TypeDefInfo.Plain,
                type: 'bool'
              }
            ],
            type: '(u32,bool)'
          }
        ],
        type: '{"a":"u32","b":"(u32,bool)"}'
      },
      type: 'Vec<{"a":"u32","b":"(u32,bool)"}>'
    });
  });

  it('creates recursive structures', (): void => {
    const registry = new TypeRegistry();

    registry.register({
      Recursive: {
        data: 'Vec<Recursive>'
      }
    });

    const raw = registry.createType('Recursive').toRawType();

    expect(
      getTypeDef(raw)
    ).toEqual({
      info: TypeDefInfo.Struct,
      sub: [{
        info: TypeDefInfo.Vec,
        name: 'data',
        sub: {
          info: TypeDefInfo.Plain,
          type: 'Recursive'
        },
        type: 'Vec<Recursive>'
      }],
      type: '{"data":"Vec<Recursive>"}'
    });
  });
});
