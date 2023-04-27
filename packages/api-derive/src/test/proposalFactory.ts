// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { SubmittableExtrinsic } from '@polkadot/api-base/types';
import type { Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';

export class ProposalFactory {
  private readonly __$$_api: ApiPromise;
  private readonly __$$_registry: Registry;

  constructor (api: ApiPromise) {
    this.__$$_api = api;
    this.__$$_registry = this.__$$_api.registry;
  }

  public createProposal = (method: SubmittableExtrinsic<'promise'>): Proposal => {
    return this.__$$_registry.createType('Proposal', method);
  };

  public proposalIndex = (index: number): ProposalIndex => {
    return this.__$$_registry.createType('ProposalIndex', index);
  };
}
