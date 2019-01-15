// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/promise';

const keyring = testingPairs();

describe('e2e transactions', () => {
  let api;

  beforeEach(async (done) => {
    api = await Api.create();
    jest.setTimeout(30000);
    done();
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());

    api.tx.balances
      .transfer('12ghjsRJpeJpUQaCQeHcBv9pRQA3tdcMxeL8cVk9JHWJGHjd', 12345)
      .sign(keyring.dave, nonce)
      .send(({ events, status, type }) => {
        console.log('Transaction status:', type);

        if (type === 'Finalised') {
          console.log('Completed at block hash', status.value.toHex());
          console.log('Events:');

          events.forEach(({ phase, event: { data, method, section } }) => {
            console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
          });

          if (events.length) {
            done();
          }
        }
      });
  });

  it('makes a proposal', async () => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address());

    // don't wait for status, just get hash
    const hash = await api.tx.democracy
      .propose(api.tx.consensus.setCode('0xdeadbeef'), 10000)
      .sign(keyring.alice, nonce)
      .send();

    expect(
      hash.toString()
    ).not.toEqual('0x');
  });
});
