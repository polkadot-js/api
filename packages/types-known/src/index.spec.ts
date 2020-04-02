// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import kusamaVersionedTypes from '@polkadot/types-known/spec/kusama';
import { TypeRegistry } from '@polkadot/types/create/registry';
import { getModuleTypes, getSpecTypes } from './';

const registry = new TypeRegistry();

registry.setKnownTypes({
  typesAlias: {
    identity: {
      Id: 'IdentityId'
    },
    testModule: {
      Proposal: 'TestProposal'
    },
    treasury: {
      Proposal: 'TreasuryProposals2'
    }
  }
});

describe('getModuleTypes', (): void => {
  it('collects the pre-defined types for contracts', (): void => {
    expect(getModuleTypes(registry, 'contracts')).toEqual({
      StorageKey: 'ContractStorageKey'
    });
  });

  it('collects the user-defined types for testModule', (): void => {
    expect(getModuleTypes(registry, 'testModule')).toEqual({
      Proposal: 'TestProposal'
    });
  });

  it('overrides pre-defined with user-defined for treasury', (): void => {
    expect(getModuleTypes(registry, 'treasury')).toEqual({
      Proposal: 'TreasuryProposals2'
    });
  });
});

describe('getSpecTypes', (): void => {
  it('get the specs types for certain network', (): void => {
    expect(getSpecTypes(registry, '', 'kusama', 1047)).toEqual({
      // Indices optional, not in transaction
      Address: 'AccountId',
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId',
      ReferendumInfo: 'ReferendumInfoTo239'
    });
  });

  it('get the latest specs types for a network', (): void => {
    const latestKusamaSpecs = kusamaVersionedTypes[kusamaVersionedTypes.length - 1].types;

    expect(getSpecTypes(registry, '', 'kusama')).toEqual(latestKusamaSpecs);
  });
});
