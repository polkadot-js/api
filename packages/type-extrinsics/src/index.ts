// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsics, ExtrinsicsLegacy } from './types';

import consensus from './legacy/consensus';
import council from './legacy/council';
import councilVoting from './legacy/councilVoting';
import democracy from './legacy/democracy';
import session from './legacy/session';
import parachains from './legacy/parachains';
import staking from './legacy/staking';
import timestamp from './legacy/timestamp';
import treasury from './legacy/treasury';

export const extrinsicsLegacy: ExtrinsicsLegacy = {
  consensus: consensus('consensus', 0),
  session: session('session', 1),
  staking: staking('staking', 2),
  timestamp: timestamp('timestamp', 3),
  treasury: treasury('treasury', 4),
  democracy: democracy('democracy', 5),
  council: council('council', 6),
  councilVoting: councilVoting('councilVoting', 7),
  parachains: parachains('parachains', 8)
};

const extrinsics: Extrinsics = {};

export default extrinsics;
