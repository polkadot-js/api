// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assert, u8aEq } from '@polkadot/util';

import all from '.';

describe('upgrades', (): void => {
  it('is valid', (): void => {
    expect(all).toBeDefined();
  });

  it('has a valid entries for Kusama', (): void => {
    const kusama = all.find(({ network }) => network === 'kusama');

    assert(kusama, 'Unable to find the entry for Kusama');

    const version = kusama.versions[17];

    expect(u8aEq(kusama.genesisHash, '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe')).toBe(true);
    expect(version.blockNumber.eqn(901442)).toBe(true);
    expect(version.specVersion.eqn(1045)).toBe(true);
  });

  it('has a valid entries for Polkadot', (): void => {
    const polkadot = all.find(({ network }) => network === 'polkadot');

    assert(polkadot, 'Unable to find the entry for Polkadot');

    const version = polkadot.versions[19];

    expect(u8aEq(polkadot.genesisHash, '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3')).toBe(true);
    expect(version.blockNumber.eqn(2436698)).toBe(true);
    expect(version.specVersion.eqn(26)).toBe(true);
  });

  it('has a valid entries for Westend', (): void => {
    const westend = all.find(({ network }) => network === 'westend');

    assert(westend, 'Unable to find the entry for Polkadot');

    const version = westend.versions[23];

    expect(u8aEq(westend.genesisHash, '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e')).toBe(true);
    expect(version.blockNumber.eqn(4207800)).toBe(true);
    expect(version.specVersion.eqn(48)).toBe(true);
  });
});
