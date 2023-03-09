// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';

import abis from '../test/contracts/index.js';
import { v0ToLatest, v1ToLatest, v2ToLatest, v3ToLatest, v4ToLatest } from './toLatest.js';

describe('v0ToLatest', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V0: abis.ink_v0_erc20 });
  const latest = v0ToLatest(registry, contract.asV0);

  it('has the correct constructors', (): void => {
    expect(
      latest.spec.constructors.map(({ label }) => label.toString())
    ).toEqual(['new']);
  });

  it('has the correct messages', (): void => {
    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual(['total_supply', 'balance_of', 'allowance', 'transfer', 'approve', 'transfer_from']);
  });

  it('has the correct events', (): void => {
    expect(
      latest.spec.events.map(({ label }) => label.toString())
    ).toEqual(['Transfer', 'Approval']);
  });

  it('has the correct constructor arguments', (): void => {
    expect(
      latest.spec.constructors[0].args.map(({ label }) => label.toString())
    ).toEqual(['initial_supply']);
  });

  it('has the correct message arguments', (): void => {
    expect(
      latest.spec.messages[1].args.map(({ label }) => label.toString())
    ).toEqual(['owner']);
  });

  it('has the correct event arguments', (): void => {
    expect(
      latest.spec.events[0].args.map(({ label }) => label.toString())
    ).toEqual(['from', 'to', 'value']);
  });
});

describe('v1ToLatest', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V1: abis.ink_v1_flipper.V1 });
  const latest = v1ToLatest(registry, contract.asV1);

  it('has the correct constructors', (): void => {
    expect(
      latest.spec.constructors.map(({ label }) => label.toString())
    ).toEqual(['new', 'default']);
  });

  it('has the correct messages', (): void => {
    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual(['flip', 'get']);
  });

  it('has the correct messages with namespaced method name', (): void => {
    const contract = registry.createType('ContractMetadata', { V1: abis.ink_v1_psp22.V1 });
    const latest = v1ToLatest(registry, contract.asV1);

    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual([
      'PSP22Metadata::token_name', 'PSP22Metadata::token_symbol', 'PSP22Metadata::token_decimals', 'PSP22Mintable::mint', 'PSP22::decrease_allowance', 'PSP22::transfer', 'PSP22::approve', 'PSP22::allowance', 'PSP22::transfer_from', 'PSP22::balance_of', 'PSP22::increase_allowance', 'PSP22::total_supply', 'pause', 'unpause'
    ]);
  });

  it('has the correct constructor arguments', (): void => {
    expect(
      latest.spec.constructors[0].args.map(({ label }) => label.toString())
    ).toEqual(['init_value']);
  });
});

describe('v2ToLatest', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V2: abis.ink_v2_flipper.V2 });
  const latest = v2ToLatest(registry, contract.asV2);

  it('has the correct constructor flag', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(true);
  });
});

describe('v3ToLatest', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V3: abis.ink_v3_flipper.V3 });
  const latest = v3ToLatest(registry, contract.asV3);

  it('has the correct constructor flags', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(false);
    expect(
      latest.spec.constructors[1].payable.isTrue
    ).toEqual(true);
  });

  it('has the correct messages', (): void => {
    const contract = registry.createType('ContractMetadata', { V3: abis.ink_v3_traitErc20.V3 });
    const latest = v3ToLatest(registry, contract.asV3);

    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual([
      'BaseErc20::total_supply', 'BaseErc20::balance_of', 'BaseErc20::allowance', 'BaseErc20::transfer', 'BaseErc20::approve', 'BaseErc20::transfer_from'
    ]);
  });
});

describe('v4ToLatest', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V4: abis.ink_v4_flipperContract });
  const latest = v4ToLatest(registry, contract.asV4);

  it('has the correct constructor flags', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(false);
    expect(
      latest.spec.constructors[1].payable.isTrue
    ).toEqual(false);
  });
});
