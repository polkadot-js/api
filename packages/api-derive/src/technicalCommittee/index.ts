// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */

// we need these type imports to be available
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ApiInterfaceRx } from '@polkadot/api/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AccountId } from '@polkadot/types/interfaces';

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export const members = collectiveMembers('technicalCommittee');

export const hasProposals = collectiveHasProposals('technicalCommittee');
export const proposal = collectiveProposal('technicalCommittee');
export const proposalCount = collectiveProposalCount('technicalCommittee');
export const proposalHashes = collectiveProposalHashes('technicalCommittee');
export const proposals = collectiveProposals('technicalCommittee');

export const prime = collectivePrime('technicalCommittee');
