// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Simple non-runnable checks to test type definitions in the editor itself

import { ApiPromise } from '@polkadot/api';
import { createTestPairs, TestKeyringMap } from '@polkadot/keyring/testingPairs';

import abiIncrementer from '../test/contracts/ink/incrementer.json';
import { BlueprintPromise, ContractPromise } from '.';

async function checkBlueprint (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  const blueprint = new BlueprintPromise(api, abiIncrementer, '0x1234');

  // new style
  await blueprint.tx.new({ gasLimit: 456, salt: '0x1234', value: 123 }, 42).signAndSend(pairs.bob);
  await blueprint.tx.new({ gasLimit: 456, value: 123 }, 42).signAndSend(pairs.bob);

  // old style
  await blueprint.tx.new(123, 456, 42).signAndSend(pairs.bob);
}

async function checkContract (api: ApiPromise, pairs: TestKeyringMap): Promise<void> {
  const contract = new ContractPromise(api, abiIncrementer, '0x1234');

  // queries
  await contract.query.get(pairs.alice.address, {});
  await contract.query.get(pairs.alice.address, 0, 0);

  // execute
  await contract.tx.inc({ gasLimit: 1234 }, 123).signAndSend(pairs.eve);
  await contract.tx.inc(123, 456, 69).signAndSend(pairs.eve);

  // deprecated
  await contract.read('get', {}).send(pairs.eve.address);
  await contract.exec('inc', {}, 123).signAndSend(pairs.dave);
}

async function main (): Promise<void> {
  const api = await ApiPromise.create({
    hasher: (data: Uint8Array): Uint8Array => data
  });
  const pairs = createTestPairs();

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Promise.all([
    checkBlueprint(api, pairs),
    checkContract(api, pairs)
  ]);
}

// eslint-disable-next-line @typescript-eslint/unbound-method
main().catch(console.error);
