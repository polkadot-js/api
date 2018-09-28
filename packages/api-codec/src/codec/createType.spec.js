// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { typeSplit, getType, getTupleType, getVectorType } from './createType';

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

describe('getTupleType', () => {
  it('does not allow invalid tuples, end )', () => {
    expect(
      () => getTupleType('(u64, u32')
    ).toThrow(/tuple wrapped/);
  });

  it('does not allow invalid tuples, start (', () => {
    expect(
      () => getTupleType('u64, u32)')
    ).toThrow(/tuple wrapped/);
  });
});

describe('getVectorType', () => {
  it('does not allow invalid vectors, end >', () => {
    expect(
      () => getVectorType('Vec<u64')
    ).toThrow(/Vec wrapped/);
  });

  it('does not allow invalid vectors, start Vec<', () => {
    expect(
      () => getVectorType('u64>')
    ).toThrow(/Vec wrapped/);
  });
});

describe('getType', () => {
  it('does not allow invalid types', () => {
    expect(
      () => getType('SomethingInvalid')
    ).toThrow(/determine type/);
  });
});
