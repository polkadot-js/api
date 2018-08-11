// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsics } from '@polkadot/extrinsics/types';

import consensus from './consensus';
import council from './council';
import councilVoting from './councilVoting';
import democracy from './democracy';
import session from './session';
import parachains from './parachains';
import staking from './staking';
import timestamp from './timestamp';
import treasury from './treasury';

const extrinsics: Extrinsics = {
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

export default extrinsics;
