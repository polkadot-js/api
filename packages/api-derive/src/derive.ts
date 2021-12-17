// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AnyFunction } from '@polkadot/types/types';

import * as accounts from './accounts';
import * as balances from './balances';
import * as bounties from './bounties';
import * as chain from './chain';
import * as contracts from './contracts';
import * as council from './council';
import * as crowdloan from './crowdloan';
import * as democracy from './democracy';
import * as elections from './elections';
import * as imOnline from './imOnline';
import * as membership from './membership';
import * as parachains from './parachains';
import * as session from './session';
import * as society from './society';
import * as staking from './staking';
import * as technicalCommittee from './technicalCommittee';
import * as treasury from './treasury';
import * as tx from './tx';

export const derive = { accounts, balances, bounties, chain, contracts, council, crowdloan, democracy, elections, imOnline, membership, parachains, session, society, staking, technicalCommittee, treasury, tx };

type DeriveSection<Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? ReturnType<Section[M]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};
type DeriveAllSections<AllSections> = {
  [S in keyof AllSections]: DeriveSection<AllSections[S]>
};

type DeriveCreator = (instanceId: string, api: ApiInterfaceRx) => (...args: unknown[]) => Observable<any>;

export type DeriveCustom = Record<string, Record<string, DeriveCreator>>;

export type ExactDerive = DeriveAllSections<typeof derive>;
