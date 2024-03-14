// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from '@polkadot/types/types';

import * as accounts from './accounts/index.js';
import * as alliance from './alliance/index.js';
import * as bagsList from './bagsList/index.js';
import * as balances from './balances/index.js';
import * as bounties from './bounties/index.js';
import * as chain from './chain/index.js';
import * as contracts from './contracts/index.js';
import * as council from './council/index.js';
import * as crowdloan from './crowdloan/index.js';
import * as democracy from './democracy/index.js';
import * as elections from './elections/index.js';
import * as imOnline from './imOnline/index.js';
import * as membership from './membership/index.js';
import * as parachains from './parachains/index.js';
import * as session from './session/index.js';
import * as society from './society/index.js';
import * as staking from './staking/index.js';
import * as technicalCommittee from './technicalCommittee/index.js';
import * as treasury from './treasury/index.js';
import * as fellowshipTreasury from './fellowshipTreasury/index.js';
import * as tx from './tx/index.js';

export const derive = { accounts, alliance, bagsList, balances, bounties, chain, contracts, council, crowdloan, democracy, elections, imOnline, membership, parachains, session, society, staking, technicalCommittee, treasury, fellowshipTreasury, tx };

type DeriveSection<Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? ReturnType<Section[M]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};
type DeriveAllSections<AllSections> = {
  [S in keyof AllSections]: DeriveSection<AllSections[S]>
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExactDerive extends DeriveAllSections<typeof derive> {
  // keep empty, allows for augmentation
}
