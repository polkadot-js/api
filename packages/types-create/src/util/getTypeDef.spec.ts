// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';
import { stringify } from '@polkadot/util';

describe('getTypeDef', (): void => {
  it('maps empty tuples to empty tuple', (): void => {
    expect(
      getTypeDef('()')
    ).toEqual({
      displayName: undefined,
      info: TypeDefInfo.Tuple,
      name: undefined,
      sub: [],
      type: '()'
    });
  });

  it('properly decodes a BTreeMap<u32, Text>', (): void => {
    expect(
      getTypeDef('BTreeMap<u32, Text>')
    ).toEqual({
      displayName: undefined,
      info: TypeDefInfo.BTreeMap,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
          type: 'u32'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.BTreeSet,
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.Plain,
        name: undefined,
        type: 'Text'
      },
      type: 'BTreeSet<Text>'
    });
  });

  it('properly decodes a Result<u32, Text>', (): void => {
    expect(
      getTypeDef('Result<u32, Text>')
    ).toEqual({
      displayName: undefined,
      info: TypeDefInfo.Result,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
          type: 'u32'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Result,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Result,
          name: undefined,
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'Null'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u32'
            }
          ],
          type: 'Result<Null,u32>'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Tuple,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
          type: 'u32'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Compact,
          name: undefined,
          sub: {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'u32'
          },
          type: 'Compact<u32>'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Vec,
          name: undefined,
          sub: {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'u64'
          },
          type: 'Vec<u64>'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Option,
          name: undefined,
          sub: {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'u128'
          },
          type: 'Option<u128>'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Tuple,
          name: undefined,
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'Text'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Vec,
              name: undefined,
              sub: {
                displayName: undefined,
                info: TypeDefInfo.Tuple,
                name: undefined,
                sub: [
                  {
                    displayName: undefined,
                    info: TypeDefInfo.Plain,
                    name: undefined,
                    type: 'Bool'
                  },
                  {
                    displayName: undefined,
                    info: TypeDefInfo.Plain,
                    name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Vec,
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.Tuple,
        name: undefined,
        sub: [
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'PropIndex'
          },
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'Proposal'
          },
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Vec,
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.Tuple,
        name: undefined,
        sub: [
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'PropIndex'
          },
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
            type: 'Proposal'
          },
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
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
      alias: undefined,
      displayName: undefined,
      fallbackType: undefined,
      info: TypeDefInfo.Struct,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: 'balance',
          type: 'Balance'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: 'account_id',
          type: 'AccountId'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Tuple,
          name: 'log',
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u64'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.VecFixed,
      length: 9,
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.VecFixed,
        length: 6,
        name: undefined,
        sub: {
          displayName: undefined,
          info: TypeDefInfo.VecFixed,
          length: 3,
          name: undefined,
          sub: {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: undefined,
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
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.VecFixed,
        length: 6,
        name: undefined,
        sub: {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Tuple,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Tuple,
          name: undefined,
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u32'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u64'
            }
          ],
          type: '(u32,u64)'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
          type: 'u128'
        }
      ],
      type: '((u32,u64),u128)'
    });
  });

  it('creates a nested enum with tuple/struct', (): void => {
    expect(
      getTypeDef(stringify({
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
      displayName: undefined,
      fallbackType: undefined,
      info: TypeDefInfo.Enum,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          index: 0,
          info: TypeDefInfo.Plain,
          name: 'A',
          type: 'u32'
        },
        {
          displayName: undefined,
          index: 1,
          info: TypeDefInfo.Tuple,
          name: 'B',
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u32'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          alias: undefined,
          displayName: undefined,
          fallbackType: undefined,
          index: 2,
          info: TypeDefInfo.Struct,
          name: 'C',
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: 'd',
              type: 'AccountId'
            },
            {
              displayName: undefined,
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
      getTypeDef(stringify({
        a: 'u32',
        b: '(u32, bool)',
        c: {
          d: 'AccountId',
          e: 'Balance'
        }
      }))
    ).toEqual({
      alias: undefined,
      displayName: undefined,
      fallbackType: undefined,
      info: TypeDefInfo.Struct,
      name: undefined,
      sub: [
        {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: 'a',
          type: 'u32'
        },
        {
          displayName: undefined,
          info: TypeDefInfo.Tuple,
          name: 'b',
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'u32'
            },
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
              type: 'bool'
            }
          ],
          type: '(u32,bool)'
        },
        {
          alias: undefined,
          displayName: undefined,
          fallbackType: undefined,
          info: TypeDefInfo.Struct,
          name: 'c',
          sub: [
            {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: 'd',
              type: 'AccountId'
            },
            {
              displayName: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Vec,
      name: undefined,
      sub: {
        displayName: undefined,
        info: TypeDefInfo.VecFixed,
        length: 9,
        name: undefined,
        sub: {
          displayName: undefined,
          info: TypeDefInfo.VecFixed,
          length: 6,
          name: undefined,
          sub: {
            displayName: undefined,
            info: TypeDefInfo.VecFixed,
            length: 3,
            name: undefined,
            sub: {
              displayName: undefined,
              info: TypeDefInfo.Plain,
              name: undefined,
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
      displayName: undefined,
      info: TypeDefInfo.Vec,
      name: undefined,
      sub: {
        alias: undefined,
        displayName: undefined,
        fallbackType: undefined,
        info: TypeDefInfo.Struct,
        name: undefined,
        sub: [
          {
            displayName: undefined,
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            displayName: undefined,
            info: TypeDefInfo.Tuple,
            name: 'b',
            sub: [
              {
                displayName: undefined,
                info: TypeDefInfo.Plain,
                name: undefined,
                type: 'u32'
              },
              {
                displayName: undefined,
                info: TypeDefInfo.Plain,
                name: undefined,
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
      alias: undefined,
      displayName: undefined,
      fallbackType: undefined,
      info: TypeDefInfo.Struct,
      name: undefined,
      sub: [{
        displayName: undefined,
        info: TypeDefInfo.Vec,
        name: 'data',
        sub: {
          displayName: undefined,
          info: TypeDefInfo.Plain,
          name: undefined,
          type: 'Recursive'
        },
        type: 'Vec<Recursive>'
      }],
      type: '{"data":"Vec<Recursive>"}'
    });
  });
});
