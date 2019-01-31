// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/promise';

const keyring = testingPairs();

describe.skip('e2e transactions', () => {
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();
    }

    jest.setTimeout(30000);
    done();
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer (sign, then send)', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());

    return api.tx.balances
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

  it('makes a transfer (signAndSend)', async (done) => {
    return api.tx.balances
      .transfer('12ghjsRJpeJpUQaCQeHcBv9pRQA3tdcMxeL8cVk9JHWJGHjd', 12345)
      .signAndSend(keyring.dave, ({ events, status, type }) => {
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

  it('makes a transfer (no callback)', async () => {
    const hash = await api.tx.balances
      .transfer('12ghjsRJpeJpUQaCQeHcBv9pRQA3tdcMxeL8cVk9JHWJGHjd', 12345)
      .signAndSend(keyring.dave);

    expect(hash.toHex()).toHaveLength(66);
  });

  it('makes a proposal', async () => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address());

    // don't wait for status, just get hash
    const hash = await api.tx.democracy
      .propose(api.tx.consensus.setCode('0xdeadbeef'), 10000)
      .sign(keyring.alice, nonce)
      .send();

    expect(hash.toHex()).toHaveLength(66);
  });
});
