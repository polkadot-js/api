// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Simple non-runnable checks to test type definitions in the editor itself

import { Balance, Header, Index } from '@polkadot/types/interfaces';
import { IExtrinsic, IMethod } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { HeaderExtended } from '@polkadot/api-derive';
import testKeyring, { TestKeyringMap } from '@polkadot/keyring/testingPairs';
import { createType, createTypeUnsafe, TypeRegistry } from '@polkadot/types/codec';

import { SubmittableResult } from './';

const registry = new TypeRegistry();

function consts (api: ApiPromise): void {
  // constants has actual value & metadata
  console.log(
    api.consts.foo.bar,
    api.consts.balances.creationFee.toNumber(),
    api.consts.balances.creationFee.meta.documentation.map((s): string => s.toString()).join('')
  );
}

async function derive (api: ApiPromise): Promise<void> {
  await api.derive.chain.subscribeNewHeads((header: HeaderExtended): void => {
    console.log('current author:', header.author);
  });

  const fees = await api.derive.balances.fees();
  console.log('fees', fees);
}

async function query (api: ApiPromise, keyring: TestKeyringMap): Promise<void> {
  const intentions = await api.query.staking.intentions();
  console.log('intentions:', intentions);

  // api.query.*.* is well-typed
  const bar = await api.query.foo.bar(); // bar is Codec (unknown module)
  const bal = await api.query.balances.freeBalance(keyring.alice.address); // bal is Balance
  const bal2 = await api.query.balances.freeBalance(keyring.alice.address, 'WRONG_ARG'); // bal2 is Codec (wrong args)
  const override = await api.query.balances.freeBalance<Header>(keyring.alice.address); // override is still available
  const oldBal = await api.query.balances.freeBalance.at('abcd', keyring.alice.address);
  // It's hard to correctly type .multi. Expected: `Balance[]`, actual: Codec[].
  // In the meantime, we can case with `<Balance>`
  const multi = await api.query.balances.freeBalance.multi<Balance>([keyring.alice.address, keyring.bob.address]);
  console.log('query types:', bar, bal, bal2, override, oldBal, multi);

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
  const balance = createType(registry, 'Balance', 2);
  const gas = createType(registry, 'Gas', 2);
  const compact = createType(registry, 'Compact<u32>', 2);
  // const random = createType(registry, 'RandomType', 2); // This one should deliberately show a TS error

  const gasUnsafe = createTypeUnsafe(registry, 'Gas', [2]);
  const overriddenUnsafe = createTypeUnsafe<Header>(registry, 'Gas', [2]);

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
  const nonce2 = await api.query.system.accountNonce(keyring.alice.address);
  const unsub2 = await api.tx.balances
    .transfer(keyring.bob.address, 12345)
    .signAndSend(keyring.alice, { nonce: nonce2 }, ({ status }: SubmittableResult): void => {
      console.log('transfer status:', status.type);

      unsub2();
    });
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
