// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import AccountIndex from './AccountIndex';

describe('AccountIndex', () => {
  it('creates a BN representation', () => {
    expect(
      new AccountIndex([0xfd, 17, 18, 19, 20]).toBn().toString()
    ).toEqual('336794129');
  });

  it('constructs 2-byte from number', () => {
    expect(
      new AccountIndex(256 * 1).toString()
    ).toEqual('25GUyk');
  });

  it('constructs from number', () => {
    expect(
      new AccountIndex(new BN(336794129)).toString()
    ).toEqual('3N5RJXxJhgRhxu');
  });
});
