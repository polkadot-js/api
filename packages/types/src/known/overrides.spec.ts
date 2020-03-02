// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create/registry';
import { getModuleTypes } from './';

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
      Judgement: 'IdentityJudgement',
      Id: 'IdentityId'
    });
  });
});
