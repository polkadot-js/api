// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Type from './Type';

describe('Type', () => {
  it('fails to cleanup invalid boxes', () => {
    expect(
      () => new Type().fromJSON('Box<Proposal')
    ).toThrow(/find closing matching/);
  });

  it('handles nested types', () => {
    expect(
      new Type().fromJSON('Box<Vec<AccountId>>').toString()
    ).toEqual('Vec<AccountId>');
  });

  it('handles aliasses, multiples per line', () => {
    expect(
      new Type().fromJSON('(PropIndex, AccountId, PropIndex)').toString()
    ).toEqual('(ProposalIndex, AccountId, ProposalIndex)');
  });

  it('does not allow toU8a', () => {
    expect(
      () => new Type().toU8a()
    ).toThrow(/unimplemented/);
  });
});
