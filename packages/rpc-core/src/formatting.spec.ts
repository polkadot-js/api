// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import storage from '@polkadot/storage/static';

import Api from '.';

const ADDR_ONE = '5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo';
const ADDR_TWO = '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF';

const ENC_ONE = '0x4af2c53fce3ec33c6ccccf22e926f1a7';
const ENC_TWO = '0x3e62f7ed6e788e1337bce2a97b68a12a';

describe('formatting', () => {
  let api: Api;
  let provider: any;

  beforeEach(() => {
    provider = {
      send: jest.fn((method, params) =>
        Promise.resolve('0x0102')
      ),
      subscribe: jest.fn((type, method, params, subscription) =>
        subscription(null, {
          block: '0x1234',
          changes: [
            [ENC_ONE, '0x0102'],
            [ENC_TWO, '0x0201']
          ]
        })
      )
    };
    api = new Api(provider);
  });

  it('encodes key (with params), decoding response', () => {
    return api.state
      .getStorage(
        [storage.balances.freeBalance, ADDR_ONE]
      )
      .then((value) => {
        expect(
          provider.send
        ).toHaveBeenCalledWith(
          'state_getStorage',
          [ENC_ONE]
        );
        expect(value.toNumber()).toEqual(513);
      });
  });

  it('encodes multiple keys, decoding multiple results', (done) => {
    return api.state.subscribeStorage(
      [
        [storage.balances.freeBalance, ADDR_ONE],
        [storage.balances.freeBalance, ADDR_TWO]
      ],
      (value: any) => {
        console.error(value);

        expect(
          provider.subscribe
        ).toHaveBeenCalledWith(
          'state_storage',
          'state_subscribeStorage',
          [[ENC_ONE, ENC_TWO]],
          expect.anything()
        );
        expect(
          value.map((balance: BN) =>
            balance.toNumber()
          )
        ).toEqual([513, 258]);

        done();
      });
  });
});
