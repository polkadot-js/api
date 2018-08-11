// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Section } from '@polkadot/params/types';

export type Extrinsics = {
  // substrate
  consensus: Section<Extrinsics>,
  council: Section<Extrinsics>,
  councilVoting: Section<Extrinsics>,
  democracy: Section<Extrinsics>,
  session: Section<Extrinsics>,
  staking: Section<Extrinsics>,
  timestamp: Section<Extrinsics>,
  treasury: Section<Extrinsics>,
  // polkadot
  parachains: Section<Extrinsics>
};

export type Extrinsic$Sections = keyof Extrinsics;
