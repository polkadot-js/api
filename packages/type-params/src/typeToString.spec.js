// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import typeToString from './typeToString';

describe('typeToString', () => {
  it('formats single types', () => {
    expect(
      typeToString('BlockNumber')
    ).toEqual('BlockNumber');
  });

  it('formats array types', () => {
    expect(
      typeToString(['BlockNumber'])
    ).toEqual('Array<BlockNumber>');
  });

  it('formats tuple types', () => {
    expect(
      typeToString(['AccountId', 'BlockNumber'])
    ).toEqual('(AccountId, BlockNumber)');
  });

  it('formats tuple arrays', () => {
    expect(
      typeToString([['AccountId', 'BlockNumber']])
    ).toEqual('Array<(AccountId, BlockNumber)>');
  });
});
