// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Text from './Text';
import Type from './Type';

describe('Type', () => {
  it('fails to cleanup invalid boxes', () => {
    expect(
      () => new Type('Box<Proposal')
    ).toThrow(/find closing matching/);
  });

  it('handles nested types', () => {
    expect(
      new Type('Box<Vec<AccountId>>').toString()
    ).toEqual('Vec<AccountId>');
  });

  it('handles aliasses, multiples per line', () => {
    expect(
      new Type('(Vec<u8>, AccountId, Vec<u8>)').toString()
    ).toEqual('(Bytes, AccountId, Bytes)');
  });

  it('does not allow toU8a', () => {
    expect(
      () => new Type().toU8a()
    ).toThrow(/unimplemented/);
  });

  it('has a length for the type', () => {
    expect(
      new Type(
        new Text(' Box<Proposal> ')
      ).toString()
    ).toEqual('Proposal'); // eslint-disable-line
  });
});
