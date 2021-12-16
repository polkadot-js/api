// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types/create/registry';

import { getModuleTypes } from '.';

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

  it('merges pre-defined and user-defined for identity', (): void => {
    expect(getModuleTypes(registry, 'identity')).toEqual({
      Id: 'IdentityId',
      Judgement: 'IdentityJudgement'
    });
  });
});
