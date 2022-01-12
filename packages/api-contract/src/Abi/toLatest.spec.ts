// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { v0ToLatest, v1ToLatest, v2ToLatest } from '@polkadot/api-contract/Abi/toLatest';
import { TypeRegistry } from '@polkadot/types';

import abis from '../test/contracts';

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
