// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringToU8a, u8aConcat } from '@polkadot/util';

import { TypeRegistry } from '../codec';
import Text from './Text';
import Type from './Type';

describe('Type', (): void => {
  const registry = new TypeRegistry();

  it('fails to cleanup invalid boxes', (): void => {
    expect(
      (): Type => new Type(registry, 'Box<Proposal')
    ).toThrow(/find closing matching/);
  });

  it('cleans up tuples with a single value', (): void => {
    expect(
      new Type(registry, '(AccountId)').toString()
    ).toEqual('AccountId');
  });

  it('does not touch tuples with multiple values', (): void => {
    expect(
      new Type(registry, '(AccountId, Balance)').toString()
    ).toEqual('(AccountId,Balance)');
  });

  it('handles nested types', (): void => {
    expect(
      new Type(registry, 'Box<Vec<AccountId>>').toString()
    ).toEqual('Vec<AccountId>');
  });

  it('handles nested types (embedded)', (): void => {
    expect(
      new Type(registry, '(u32, Box<Vec<AccountId>>)').toString()
    ).toEqual('(u32,Vec<AccountId>)');
  });

  it('handles aliasses, multiples per line', (): void => {
    expect(
      new Type(registry, '(Vec<u8>, AccountId, Vec<u8>)').toString()
    ).toEqual('(Bytes,AccountId,Bytes)');
  });

  it('removes whitespaces', (): void => {
    expect(
      new Type(registry, 'T :: AccountId').toString()
    ).toEqual('AccountId');
  });

  it('changes PairOf<T> -> (T, T)', (): void => {
    expect(
      new Type(registry, 'PairOf<T::Balance>').toString()
    ).toEqual('(Balance,Balance)');
  });

  it('changes PairOf<T> (embedded) -> (T, T)', (): void => {
    expect(
      new Type(registry, '(Vec<u8>, PairOf<T::Balance>, Vec<AccountId>)').toString()
    ).toEqual('(Bytes,(Balance,Balance),Vec<AccountId>)');
  });

  it('changes () -> Null', (): void => {
    expect(
      new Type(registry, '()').toString()
    ).toEqual('Null');
  });

  it('has a length for the type', (): void => {
    expect(
      new Type(
        registry,
        new Text(registry, ' Box<Proposal> ')
      ).toString()
    ).toEqual('Proposal'); // eslint-disable-line
  });

  it('unwraps compact', (): void => {
    expect(
      new Type(registry, '<T::Balance as HasCompact>::Type').toString()
    ).toEqual('Compact<Balance>');
  });

  it('handles InherentOfflineReport', (): void => {
    expect(
      new Type(registry, '<T::InherentOfflineReport as InherentOfflineReport>::Inherent').toString()
    ).toEqual('InherentOfflineReport');
  });

  it('encodes correctly via toU8a()', (): void => {
    const type = 'Compact<Balance>';

    expect(new Text(registry, type).toU8a()).toEqual(
      u8aConcat(
        new Uint8Array([type.length << 2]),
        stringToU8a(type)
      )
    );
  });
});
