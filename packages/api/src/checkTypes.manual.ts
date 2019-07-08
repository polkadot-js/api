// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Simple non-runnable checks to test type definitions in the editor itself

import { ApiPromise } from '@polkadot/api';
import { HeaderExtended } from '@polkadot/api-derive';
import testKeyring from '@polkadot/keyring/testingPairs';
import { IExtrinsic, IMethod } from '@polkadot/types/types';
import { Header, Nonce } from '@polkadot/types';

import { SubmittableResult } from './';

export default async function test () {
  const api = await ApiPromise.create();
  const keyring = testKeyring();

  const intentions = await api.query.staking.intentions();
  console.log('intentions:', intentions);

  await api.query.staking.intentions((intentions) => {
    console.log('intentions:', intentions);
  });

  await api.rpc.chain.subscribeNewHead<Header>((header) => {
    console.log('current blockNumber:', header.blockNumber);
  });

  await api.rpc.chain.subscribeNewHead((header: Header) => {
    console.log('current blockNumber:', header.blockNumber);
  });

  await api.derive.chain.subscribeNewHead((header: HeaderExtended) => {
    console.log('current author:', header.author);
  });

  await api.derive.chain.subscribeNewHead((header: HeaderExtended) => {
    console.log('current author:', header.author);
  });

  const transfer = api.tx.balances.transfer(keyring.bob.address, 12345);

  console.log('transfer as Method', transfer as IMethod);
  console.log('transfer as Extrinsic', transfer as IExtrinsic);

  // simple "return the hash" variant
  console.log('hash:', (await transfer.signAndSend(keyring.alice)).toHex());

  // passing options, but waiting for hash
  const nonce = await api.query.system.accountNonce<Nonce>(keyring.alice.address);

  (await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, { nonce })
  ).toHex();

  // just with the callback
  const unsub = await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, ({ status }: SubmittableResult) => {
      console.log('transfer status:', status.type);

      unsub();
    });

  // with options and the callback
  const nonce2 = await api.query.system.accountNonce<Nonce>(keyring.alice.address);
  const unsub2 = await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, { nonce: nonce2 }, ({ status }: SubmittableResult) => {
      console.log('transfer status:', status.type);

      unsub2();
    });
}
