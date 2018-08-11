// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import param from './param';
import signature from './signature';

describe('jsonrpcSignature', () => {
  it('formats the signature according to the specification', () => {
    expect(
      signature({
        name: 'test',
        description: 'test',
        params: [
          param('a', 'AccountId'),
          param('b', 'Bytes')
        ],
        type: 'Signature'
      })
    ).toEqual('test (a: AccountId, b: Bytes): Signature');
  });

  it('empty inputs format correctly', () => {
    expect(
      signature({
        name: 'test',
        description: 'test',
        params: [],
        type: 'AccountId'
      })
    ).toEqual('test (): AccountId');
  });
});
