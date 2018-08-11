// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Storages } from './types';

import consensus from './consensus';
// import contract from './contract';
import council from './council';
import councilVoting from './councilVoting';
import democracy from './democracy';
import parachains from './parachains';
import session from './session';
import staking from './staking';
import system from './system';
import timestamp from './timestamp';

const storages: Storages = {
  consensus: consensus('consensus'),
  // contract: contract('contract'),
  council: council('council'),
  councilVoting: councilVoting('councilVoting'),
  democracy: democracy('democracy'),
  parachains: parachains('parachains'),
  session: session('session'),
  staking: staking('staking'),
  system: system('system'),
  timestamp: timestamp('timestamp')
};

export default storages;
