// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { TypeRegistry } from '../create/registry.js';
import { getAliasTypes } from './alias.js';

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
    expect(getAliasTypes(registry, 'contracts')).toEqual({
      StorageKey: 'ContractStorageKey'
    });
  });

  it('collects the user-defined types for testModule', (): void => {
    expect(getAliasTypes(registry, 'testModule')).toEqual({
      Proposal: 'TestProposal'
    });
  });

  it('overrides pre-defined with user-defined for treasury', (): void => {
    expect(getAliasTypes(registry, 'treasury')).toEqual({
      Proposal: 'TreasuryProposals2'
    });
  });

  it('merges pre-defined and user-defined for identity', (): void => {
    expect(getAliasTypes(registry, 'identity')).toEqual({
      Id: 'IdentityId',
      Judgement: 'IdentityJudgement'
    });
  });
});
