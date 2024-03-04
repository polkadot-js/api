// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';

import abis from '../test/contracts/index.js';
import { v0ToLatestCompatible, v1ToLatestCompatible, v2ToLatestCompatible, v3ToLatestCompatible, v4ToLatestCompatible, v5ToLatestCompatible } from './toLatestCompatible.js';

describe('v0ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V0: abis['ink_v0_erc20'] });
  const latest = v0ToLatestCompatible(registry, contract.asV0);

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

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('4');
  });
});

describe('v1ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V1: abis['ink_v1_flipper']['V1'] });
  const latest = v1ToLatestCompatible(registry, contract.asV1);

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
    const contract = registry.createType('ContractMetadata', { V1: abis['ink_v1_psp22']['V1'] });
    const latest = v1ToLatestCompatible(registry, contract.asV1);

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

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('4');
  });
});

describe('v2ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V2: abis['ink_v2_flipper']['V2'] });
  const latest = v2ToLatestCompatible(registry, contract.asV2);

  it('has the correct constructor flag', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(true);
  });

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('4');
  });
});

describe('v3ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V3: abis['ink_v3_flipper']['V3'] });
  const latest = v3ToLatestCompatible(registry, contract.asV3);

  it('has the correct constructor flags', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(false);
    expect(
      latest.spec.constructors[1].payable.isTrue
    ).toEqual(true);
  });

  it('has the correct messages', (): void => {
    const contract = registry.createType('ContractMetadata', { V3: abis['ink_v3_traitErc20']['V3'] });
    const latest = v3ToLatestCompatible(registry, contract.asV3);

    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual([
      'BaseErc20::total_supply', 'BaseErc20::balance_of', 'BaseErc20::allowance', 'BaseErc20::transfer', 'BaseErc20::approve', 'BaseErc20::transfer_from'
    ]);
  });

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('4');
  });
});

describe('v4ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V4: abis['ink_v4_flipperContract'] });
  const latest = v4ToLatestCompatible(registry, contract.asV4);

  it('has the correct constructor flags', (): void => {
    expect(
      latest.spec.constructors[0].payable.isTrue
    ).toEqual(false);
    expect(
      latest.spec.constructors[1].payable.isTrue
    ).toEqual(false);
  });

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('4');
  });
});

describe('v5ToLatestCompatible', (): void => {
  const registry = new TypeRegistry();
  const contract = registry.createType('ContractMetadata', { V5: abis['ink_v5_erc20Metadata'] });
  const latest = v5ToLatestCompatible(registry, contract.asV5);

  it('has the correct messages', (): void => {
    expect(
      latest.spec.messages.map(({ label }) => label.toString())
    ).toEqual(['total_supply', 'balance_of', 'allowance', 'transfer', 'approve', 'transfer_from']);
  });

  it('has new event fields', (): void => {
    expect(
      latest.spec.events.length
    ).toEqual(2);

    expect(
      latest.spec.events.every((e) => e.has('module_path'))
    ).toEqual(true);

    expect(latest.spec.events[0].module_path.toString()).toEqual('erc20::erc20');

    expect(
      latest.spec.events.every((e) => e.has('signature_topic'))
    ).toEqual(true);

    expect(latest.spec.events[0].signature_topic.toHex()).toEqual('0xb5b61a3e6a21a16be4f044b517c28ac692492f73c5bfd3f60178ad98c767f4cb');
  });

  it('has the latest compatible version number', (): void => {
    expect(latest.version.toString()).toEqual('5');
  });
});
