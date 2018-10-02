// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { TypeValueInfo, typeSplit, getType, getTypeValue, getTupleTypeValue, getVectorTypeValue } from './createType';

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
    ).toThrow(/Invalid Vector/);
  });

  it('checks for unclosed tuple', () => {
    expect(
      () => typeSplit('Text, (u64, u32')
    ).toThrow(/Invalid Tuple/);
  });
});

describe('getTupleTypeValue', () => {
  it('does not allow invalid tuples, end )', () => {
    expect(
      () => getTupleTypeValue('(u64, u32')
    ).toThrow(/tuple wrapped/);
  });

  it('does not allow invalid tuples, start (', () => {
    expect(
      () => getTupleTypeValue('u64, u32)')
    ).toThrow(/tuple wrapped/);
  });
});

describe('getVectorTypeValue', () => {
  it('does not allow invalid vectors, end >', () => {
    expect(
      () => getVectorTypeValue('Vec<u64')
    ).toThrow(/Vec wrapped/);
  });

  it('does not allow invalid vectors, start Vec<', () => {
    expect(
      () => getVectorTypeValue('u64>')
    ).toThrow(/Vec wrapped/);
  });
});

describe('getTypeValue', () => {
  it('returns a type structure', () => {
    expect(
      getTypeValue('(u32, Vec<u64>, (Text, Vec<Bool>))')
    ).toEqual({
      info: TypeValueInfo.Tuple,
      type: '(u32, Vec<u64>, (Text, Vec<Bool>))',
      sub: [
        {
          info: TypeValueInfo.Plain,
          type: 'u32'
        },
        {
          info: TypeValueInfo.Vector,
          type: 'Vec<u64>',
          sub: {
            info: TypeValueInfo.Plain,
            type: 'u64'
          }
        },
        {
          info: TypeValueInfo.Tuple,
          type: '(Text, Vec<Bool>)',
          sub: [
            {
              info: TypeValueInfo.Plain,
              type: 'Text'
            },
            {
              info: TypeValueInfo.Vector,
              type: 'Vec<Bool>',
              sub: {
                info: TypeValueInfo.Plain,
                type: 'Bool'
              }
            }
          ]
        }
      ]
    });
  });
});

describe('getType', () => {
  it('does not allow invalid types', () => {
    expect(
      () => getType('SomethingInvalid')
    ).toThrow(/determine type/);
  });
});
