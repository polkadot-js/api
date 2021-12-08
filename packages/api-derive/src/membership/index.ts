// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */

// we need these type imports to be available
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Observable } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ApiInterfaceRx } from '@polkadot/api/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { u32 } from '@polkadot/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AccountId, Hash } from '@polkadot/types/interfaces';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { DeriveCollectiveProposal } from '../types';

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export const members = collectiveMembers('membership');

export const hasProposals = collectiveHasProposals('membership');
export const proposal = collectiveProposal('membership');
export const proposalCount = collectiveProposalCount('membership');
export const proposalHashes = collectiveProposalHashes('membership');
export const proposals = collectiveProposals('membership');

export const prime = collectivePrime('membership');
