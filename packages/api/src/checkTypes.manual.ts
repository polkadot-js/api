// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Simple non-runnable checks to test type definitions in the editor itself

import '@polkadot/api-augment';

import type { HeaderExtended } from '@polkadot/api-derive/types';
import type { StorageKey } from '@polkadot/types';
import type { AccountId, Balance, DispatchErrorModule, Event, Header, Index } from '@polkadot/types/interfaces';
import type { FrameSystemAccountInfo } from '@polkadot/types/lookup';
import type { AnyTuple, IExtrinsic, IMethod } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { createTestPairs, TestKeyringMap } from '@polkadot/keyring/testingPairs';
import { createTypeUnsafe, TypeRegistry } from '@polkadot/types/create';

import { SubmittableResult } from './';

const registry = new TypeRegistry();

async function calls (api: ApiPromise): Promise<void> {
  // it allows defaults
  const testSetId = await api.call.grandpaApi.currentSetId();

  // it allows type overrides (generally shouldn't be used, but available)
  const testSetIdO = await api.call.grandpaApi.currentSetId<AccountId>();

  // it allows actual params
  const nonce = await api.call.accountNonceApi.accountNonce('5Test');

  console.log(testSetId.toNumber(), testSetIdO.isAscii, nonce.toNumber());
}

function consts (api: ApiPromise): void {
  // constants has actual value & metadata
  console.log(
    api.consts.foo.bar,
    api.consts.balances.existentialDeposit.toNumber(),
    api.consts.balances.existentialDeposit.meta.docs.map((s) => s.toString()).join(''),
    api.consts.system.blockWeights.maxBlock.divn(123).toNumber()
  );
}

async function derive (api: ApiPromise): Promise<void> {
  await api.derive.chain.subscribeNewHeads((header: HeaderExtended): void => {
    console.log('current author:', header.author);
  });

  const info = await api.derive.balances.account('0x1234');

  console.log('info', info);
}

function errors (api: ApiPromise): void {
  const someError = {} as DispatchErrorModule;

  // existing
  console.log(api.errors.vesting.AmountLow.is(someError));

  // non-existing error, existing module
  console.log(api.errors.vesting.Something.is(someError));

  // something random
  console.log(api.errors.something.Random.is(someError));
}

function events (api: ApiPromise): void {
  const event = {} as Event;

  // existing
  if (api.events.balances.Transfer.is(event)) {
    // the types are correctly expanded
    const [afrom, ato, aamount] = event.data;

    console.log(
      afrom.toHuman(),
      ato.toHuman(),
      aamount.toBn()
    );

    // the types have getters
    const { amount, from, to } = event.data;

    console.log(
      from.toHuman(),
      to.toHuman(),
      amount.toBn()
    );
  }

  // something with only tuple data
  if (api.events.staking.Bonded.is(event)) {
    const [account, amount] = event.data;

    console.log(account.toHuman(), amount.toBn());
  }

  // something random, just codec[]
  if (api.events.something.Random.is(event)) {
    const [a, b] = event.data;

    console.log(a.toHuman(), b.toHuman());
  }
}

async function query (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  const intentions = await api.query.staking.bonded();

  console.log('intentions:', intentions);

  // api.query.*.* is well-typed
  const bar = await api.query.foo.bar(); // bar is Codec (unknown module)
  const bal = await api.query.balances.totalIssuance(); // bal is Balance
  const bal2 = await api.query.balances.totalIssuance('WRONG_ARG'); // bal2 is Codec (wrong args)
  const override = await api.query.balances.totalIssuance<Header>(); // override is still available
  const oldBal = await api.query.balances.totalIssuance.at('abcd');
  // For older queries we can cast with `<Balance>` (newer chain have multi typed)
  const multia = await api.query.balances.freeBalance.multi<Balance>([pairs.alice.address, pairs.bob.address]);
  const multib = await api.query.system.account.multi([pairs.alice.address, pairs.bob.address]);

  await api.query.system.account(pairs.alice.address);
  await api.query.system.account<FrameSystemAccountInfo>(pairs.alice.address);

  console.log('query types:', bar, bal, bal2, override, oldBal, multia, multib);
}

async function queryExtra (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  // events destructing
  await api.query.system.events((records): void => {
    records.forEach(({ event, phase }): void => {
      if (phase.isApplyExtrinsic) {
        // Dunno... this should work
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [accountId, value]: [AccountId, Balance] = event.data;

        console.log(`${accountId.toString()} has ${value.toHuman()}`);
      }
    });
  });

  // at queries
  const events = await api.query.system.events.at('0x12345');

  console.log(`Received ${events.length} events:`);

  // check entries()
  await api.query.system.account.entries(); // should not take a param
  await api.query.staking.nominatorSlashInEra.entries(123); // should take a param

  // nmap with keys
  await api.query.assets.approvals.keys(123, 'blah');
  await api.query.assets.account.keys(123);
  await api.query.assets.account.entries(123);
  await api.query.assets.blah.keys();

  // check range
  await api.query.balances.freeBalance.range<Balance>(['0x1234'], pairs.bob.address);

  // check range types
  const entries = await api.query.system.events.range(['0x12345', '0x7890']);

  console.log(`Received ${entries.length} entries, ${entries.map(([hash, events]) => `${hash.toHex()}: ${events.length} events`).join(', ')}`);

  // is
  const key = {} as StorageKey;

  if (api.query.balances.account.is(key)) {
    const [accountId] = key.args;

    // should be AccountId type
    console.log(accountId.toHuman());
  }
}

async function queryMulti (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  // check multi for unsub
  const multiUnsub = await api.queryMulti([
    [api.query.staking.validators],
    [api.query.system.events]
  ], (values): void => {
    console.log('values', values);

    multiUnsub();
  });

  // check multi , Promise result
  const multiRes = await api.queryMulti([
    [api.query.system.account, pairs.eve.address],
    // older chains only
    [api.query.system.accountNonce, pairs.eve.address]
  ]);

  console.log(multiRes);

  // check multi, via at
  const apiAt = await api.at('0x12345678');
  const multiResAt = await apiAt.queryMulti([
    api.query.timestamp.now,
    [apiAt.query.staking.validators],
    [apiAt.query.system.account, pairs.eve.address]
  ]);

  console.log(multiResAt);
}

async function rpc (api: ApiPromise): Promise<void> {
  // defaults
  await api.rpc.chain.subscribeNewHeads((header): void => {
    console.log('current header #', header.number.toNumber());
  });

  // with generic params
  await api.rpc.state.subscribeStorage<[Balance]>(['my_balance_key'], ([balance]): void => {
    console.log('current balance:', balance.toString());
  });

  // using json & raw
  await api.rpc.chain.getBlock.raw('0x123456');

  // using raw subs
  await api.rpc.chain.subscribeNewHeads.raw((result: Uint8Array): void => {
    console.log(result);
  });
}

function types (api: ApiPromise): void {
  // check correct types with `createType`
  const balance = registry.createType('Balance', 2);
  const gas = registry.createType('Gas', 2);
  const compact = registry.createType('Compact<u32>', 2);
  const f32 = registry.createType('f32');
  const u32 = registry.createType('u32');
  const raw = registry.createType('Raw');
  // const random = registry.createType('RandomType', 2); // This one should deliberately show a TS error

  const gasUnsafe = createTypeUnsafe(registry, 'Gas', [2]);
  const overriddenUnsafe = createTypeUnsafe<Header>(registry, 'Gas', [2]);

  console.log(balance, gas, compact, gasUnsafe, overriddenUnsafe, u32.toNumber(), f32.toNumber(), api.createType('AccountData'), raw.subarray(0, 10));
}

async function tx (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  // transfer, also allows for bigint inputs here
  const transfer = api.tx.balances.transfer(pairs.bob.address, BigInt(123456789));

  console.log('transfer casted', transfer as IMethod<AnyTuple>, transfer as IExtrinsic<AnyTuple>);

  // simple "return the hash" variant
  console.log('hash:', (await transfer.signAndSend(pairs.alice)).toHex());

  // passing options, but waiting for hash
  const nonce = await api.query.system.accountNonce<Index>(pairs.alice.address);

  (await api.tx.balances
    .transfer(pairs.bob.address, 12345)
    .signAndSend(pairs.alice, { nonce })
  ).toHex();

  // just with the callback
  await api.tx.balances
    .transfer(pairs.bob.address, 12345)
    .signAndSend(pairs.alice, ({ status }: SubmittableResult) => console.log(status.type));

  // with options and the callback
  const nonce2 = await api.query.system.accountNonce(pairs.alice.address);
  const unsub2 = await api.tx.balances
    .transfer(pairs.bob.address, 12345)
    .signAndSend(pairs.alice, { nonce: nonce2 }, ({ status }: SubmittableResult): void => {
      console.log('transfer status:', status.type);

      unsub2();
    });

  // it allows for query & then using the submittable
  const second = api.tx.democracy.second(123, 5);

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  await second.signAndSend('123', (result) => console.log(result));

  // it handles enum inputs correctly
  await api.tx.democracy.proxyVote(123, { Split: { nay: 456, yay: 123 } }).signAndSend(pairs.alice);

  // is
  if (api.tx.balances.transfer.is(second)) {
    const [recipientId, balance] = second.args;

    // should be LookupSource & Balance types
    console.log(recipientId.toHuman(), balance.toNumber());
  }
}

async function at (api: ApiPromise): Promise<void> {
  const apiAt = await api.at('0x1234');

  // get old balances
  console.log(await apiAt.query.balances.freeBalance('0x1234'));

  // get some constants
  console.log(apiAt.consts.balances.existentialDeposit);
}

async function main (): Promise<void> {
  const api = await ApiPromise.create();
  const pairs = createTestPairs();

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Promise.all([
    calls(api),
    consts(api),
    derive(api),
    errors(api),
    events(api),
    query(api, pairs),
    queryExtra(api, pairs),
    queryMulti(api, pairs),
    rpc(api),
    types(api),
    tx(api, pairs),
    at(api)
  ]);
}

// eslint-disable-next-line @typescript-eslint/unbound-method
main().catch(console.error);
