// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { getTypeDef, TypeRegistry } from '.';

describe('getTypeDef', (): void => {
  it('maps empty tuples to empty tuple', (): void => {
    expect(
      getTypeDef('()')
    ).toEqual({
      info: 'Tuple',
      sub: [],
      type: '()'
    });
  });

  it('properly decodes a BTreeMap<u32, Text>', (): void => {
    expect(
      getTypeDef('BTreeMap<u32, Text>')
    ).toEqual({
      info: 'BTreeMap',
      sub: [
        {
          info: 'Plain',
          type: 'u32'
        },
        {
          info: 'Plain',
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
      info: 'BTreeSet',
      sub: {
        info: 'Plain',
        type: 'Text'
      },
      type: 'BTreeSet<Text>'
    });
  });

  it('properly decodes a Result<u32, Text>', (): void => {
    expect(
      getTypeDef('Result<u32, Text>')
    ).toEqual({
      info: 'Result',
      sub: [
        {
          info: 'Plain',
          type: 'u32'
        },
        {
          info: 'Plain',
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
      info: 'Result',
      sub: [
        {
          info: 'Result',
          sub: [
            {
              info: 'Plain',
              type: 'Null'
            },
            {
              info: 'Plain',
              type: 'u32'
            }
          ],
          type: 'Result<Null,u32>'
        },
        {
          info: 'Plain',
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
      info: 'Tuple',
      sub: [
        {
          info: 'Plain',
          type: 'u32'
        },
        {
          info: 'Result',
          sub: {
            info: 'Plain',
            type: 'u32'
          },
          type: 'Compact<u32>'
        },
        {
          info: 'Vec',
          sub: {
            info: 'Plain',
            type: 'u64'
          },
          type: 'Vec<u64>'
        },
        {
          info: 'Option',
          sub: {
            info: 'Plain',
            type: 'u128'
          },
          type: 'Option<u128>'
        },
        {
          info: 'Tuple',
          sub: [
            {
              info: 'Plain',
              type: 'Text'
            },
            {
              info: 'Vec',
              sub: {
                info: 'Tuple',
                sub: [
                  {
                    info: 'Plain',
                    type: 'Bool'
                  },
                  {
                    info: 'Plain',
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
      info: 'Vec',
      sub: {
        info: 'Tuple',
        sub: [
          {
            info: 'Plain',
            type: 'PropIndex'
          },
          {
            info: 'Plain',
            type: 'Proposal'
          },
          {
            info: 'Plain',
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
      info: 'Vec',
      sub: {
        info: 'Tuple',
        sub: [
          {
            info: 'Plain',
            type: 'PropIndex'
          },
          {
            info: 'Plain',
            type: 'Proposal'
          },
          {
            info: 'Plain',
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
      info: 'Struct',
      sub: [
        {
          info: 'Plain',
          name: 'balance',
          type: 'Balance'
        },
        {
          info: 'Plain',
          name: 'account_id',
          type: 'AccountId'
        },
        {
          info: 'Tuple',
          name: 'log',
          sub: [
            {
              info: 'Plain',
              type: 'u64'
            },
            {
              info: 'Plain',
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
      info: 'VecFixed',
      length: 9,
      sub: {
        info: 'VecFixed',
        length: 6,
        sub: {
          info: 'VecFixed',
          length: 3,
          sub: {
            info: 'Plain',
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
      info: 'VecFixed',
      length: 3,
      sub: {
        info: 'VecFixed',
        length: 6,
        sub: {
          info: 'Plain',
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
      info: 'Tuple',
      sub: [
        {
          info: 'Tuple',
          sub: [
            {
              info: 'Plain',
              type: 'u32'
            },
            {
              info: 'Plain',
              type: 'u64'
            }
          ],
          type: '(u32,u64)'
        },
        {
          info: 'Plain',
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
      info: 'Enum',
      sub: [
        {
          index: 0,
          info: 'Plain',
          name: 'A',
          type: 'u32'
        },
        {
          index: 1,
          info: 'Tuple',
          name: 'B',
          sub: [
            {
              info: 'Plain',
              type: 'u32'
            },
            {
              info: 'Plain',
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          index: 2,
          info: 'Struct',
          name: 'C',
          sub: [
            {
              info: 'Plain',
              name: 'd',
              type: 'AccountId'
            },
            {
              info: 'Plain',
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
      info: 'Struct',
      sub: [
        {
          info: 'Plain',
          name: 'a',
          type: 'u32'
        },
        {
          info: 'Tuple',
          name: 'b',
          sub: [
            {
              info: 'Plain',
              type: 'u32'
            },
            {
              info: 'Plain',
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          info: 'Struct',
          name: 'c',
          sub: [
            {
              info: 'Plain',
              name: 'd',
              type: 'AccountId'
            },
            {
              info: 'Plain',
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
      info: 'Vec',
      sub: {
        info: 'VecFixed',
        length: 9,
        sub: {
          info: 'VecFixed',
          length: 6,
          sub: {
            info: 'VecFixed',
            length: 3,
            sub: {
              info: 'Plain',
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
      info: 'Vec',
      sub: {
        info: 'Struct',
        sub: [
          {
            info: 'Plain',
            name: 'a',
            type: 'u32'
          },
          {
            info: 'Tuple',
            name: 'b',
            sub: [
              {
                info: 'Plain',
                type: 'u32'
              },
              {
                info: 'Plain',
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
      info: 'Struct',
      sub: [{
        info: 'Vec',
        name: 'data',
        sub: {
          info: 'Plain',
          type: 'Recursive'
        },
        type: 'Vec<Recursive>'
      }],
      type: '{"data":"Vec<Recursive>"}'
    });
  });
});
