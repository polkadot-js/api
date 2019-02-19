// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Text from './Text';
import Type from './Type';

describe('Type', () => {
  it('fails to cleanup invalid boxes', () => {
    expect(
      () => new Type('Box<Proposal')
    ).toThrow(/find closing matching/);
  });

  it('cleans up tuples with a single value', () => {
    expect(
      new Type('(AccountId)').toString()
    ).toEqual('AccountId');
  });

  it('does not touch tuples with multiple values', () => {
    expect(
      new Type('(AccountId, Balance)').toString()
    ).toEqual('(AccountId,Balance)');
  });

  it('handles nested types', () => {
    expect(
      new Type('Box<Vec<AccountId>>').toString()
    ).toEqual('Vec<AccountId>');
  });

  it('handles nested types (embedded)', () => {
    expect(
      new Type('(u32, Box<Vec<AccountId>>)').toString()
    ).toEqual('(u32,Vec<AccountId>)');
  });

  it('handles aliasses, multiples per line', () => {
    expect(
      new Type('(Vec<u8>, AccountId, Vec<u8>)').toString()
    ).toEqual('(Bytes,AccountId,Bytes)');
  });

  it('removes whitespaces', () => {
    expect(
      new Type('T :: AccountId').toString()
    ).toEqual('AccountId');
  });

  it('changes PairOf<T> -> (T, T)', () => {
    expect(
      new Type('PairOf<T::Balance>').toString()
    ).toEqual('(Balance,Balance)');
  });

  it('changes PairOf<T> (embedded) -> (T, T)', () => {
    expect(
      new Type('(Vec<u8>, PairOf<T::Balance>, Vec<AccountId>)').toString()
    ).toEqual('(Bytes,(Balance,Balance),Vec<AccountId>)');
  });

  it('changes () -> Null', () => {
    expect(
      new Type('()').toString()
    ).toEqual('Null');
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

  it('unwraps compact', () => {
    expect(
      new Type('<T::Balance as HasCompact>::Type').toString()
    ).toEqual('Compact<Balance>');
  });

  it('handles InherentOfflineReport', () => {
    expect(
      new Type('<T::InherentOfflineReport as InherentOfflineReport>::Inherent').toString()
    ).toEqual('InherentOfflineReport');
  });
});
