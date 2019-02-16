// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Simple non-runnable checks to test type definitions in the editor itself

import { ApiPromise } from '@polkadot/api/index';
import testKeyring from '@polkadot/keyring/testingPairs';
import { Header, HeaderExtended } from '@polkadot/types/index';

export default async function test () {
  const api = await ApiPromise.create();
  const keyring = testKeyring();

  const intentions = await api.query.staking.intentions();
  console.log('intentions:', intentions);

  api.query.staking.intentions((intentions) => {
    console.log('intentions:', intentions);
  });

  api.rpc.chain.subscribeNewHead((header: Header) => {
    console.log('current blockNumber:', header.blockNumber);
  });

  api.derive.chain.subscribeNewHead((header: HeaderExtended) => {
    console.log('current author:', header.author);
  });

  const hash = await api.tx.balances
    .transfer(keyring.bob.address(), 12345)
    .signAndSend(keyring.alice);
  console.log('hash:', hash.toHex());

  const unsub = await api.tx.balances
    .transfer(keyring.bob.address(), 12345)
    .signAndSend(keyring.alice, ({ type }) => {
      console.log('transfer status:', type);

      unsub();
    });
}
