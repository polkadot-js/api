// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Simple non-runnable checks to test type definitions in the editor itself

import { ConstantCodec } from '@polkadot/api-metadata/consts/types';
import { Balance, Header, Index } from '@polkadot/types/interfaces';
import { IExtrinsic, IMethod } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { HeaderExtended } from '@polkadot/api-derive';
import testKeyring, { TestKeyringMap } from '@polkadot/keyring/testingPairs';
import { createType, createTypeUnsafe } from '@polkadot/types/codec';

import { SubmittableResult } from './';

function consts (api: ApiPromise): void {
  // constants has actual value & metadata
  console.log(
    api.consts.balances.creationFee.toHex(),
    (api.consts.balances.creationFee as ConstantCodec).meta.documentation.map((s): string => s.toString()).join('')
  );
}

async function derive (api: ApiPromise): Promise<void> {
  await api.derive.chain.subscribeNewHeads((header: HeaderExtended): void => {
    console.log('current author:', header.author);
  });

  await api.query.staking.validatorCount((count): void => {
    console.log('count:', count);
  });
}

async function query (api: ApiPromise, keyring: TestKeyringMap): Promise<void> {
  const count = await api.query.staking.validatorCount();
  console.log('count:', count);

  // check multi for unsub
  const multiUnsub = await api.queryMulti([
    [api.query.system.accountNonce, keyring.eve.address],
    [api.query.system.accountNonce, keyring.bob.address]
  ], (balances): void => {
    console.log('balances', balances);

    multiUnsub();
  });
}

async function rpc (api: ApiPromise): Promise<void> {
  await api.rpc.chain.subscribeNewHeads((header: Header): void => {
    console.log('current header:', header);
  });

  await api.rpc.state.subscribeStorage<[Balance]>(['my_balance_key'], ([balance]): void => {
    console.log('current balance:', balance.toString());
  });
}

function types (): void {
  // check correct types with `createType`
  const balance = createType('Balance', 2);
  const gas = createType('Gas', 2);
  const compact = createType('Compact<u32>', 2);
  // const random = createType('RandomType', 2); // This one should deliberately show a TS error

  const gasUnsafe = createTypeUnsafe('Gas', [2]);
  const overriddenUnsafe = createTypeUnsafe<Header>('Gas', [2]);

  console.log(balance, gas, compact, gasUnsafe, overriddenUnsafe);
}

async function tx (api: ApiPromise, keyring: TestKeyringMap): Promise<void> {
  const transfer = api.tx.balances.transfer(keyring.bob.address, 12345);

  console.log('transfer as Call', transfer as IMethod);
  console.log('transfer as Extrinsic', transfer as IExtrinsic);

  // simple "return the hash" variant
  console.log('hash:', (await transfer.signAndSend(keyring.alice)).toHex());

  // passing options, but waiting for hash
  const nonce = await api.query.system.accountNonce<Index>(keyring.alice.address);

  (await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, { nonce })
  ).toHex();

  // just with the callback
  await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, ({ status }: SubmittableResult): void => {
      console.log('transfer status:', status.type);
    });

  // with options and the callback
  const nonce2 = await api.query.system.accountNonce<Index>(keyring.alice.address);
  const unsub2 = await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, { nonce: nonce2 }, ({ status }: SubmittableResult): void => {
      console.log('transfer status:', status.type);

      unsub2();
    });

  // api.query.*.* is well-typed
  const bar = await api.query.foo.bar(); // bar should be codec
  const bal = await api.query.balances.freeBalance(keyring.alice.address); // bal should be u128
  console.log(bar, bal);
}

async function main (): Promise<void> {
  const api = await ApiPromise.create();
  const keyring = testKeyring();

  consts(api);
  derive(api);
  query(api, keyring);
  rpc(api);
  types();
  tx(api, keyring);
}

// eslint-disable-next-line @typescript-eslint/unbound-method
main().catch(console.error);
