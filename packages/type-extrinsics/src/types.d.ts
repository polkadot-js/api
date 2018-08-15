// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Section } from '@polkadot/params/types';

export type Extrinsics = {
  // substrate
  consensus: Section<Extrinsics, any, any>,
  council: Section<Extrinsics, any, any>,
  councilVoting: Section<Extrinsics, any, any>,
  democracy: Section<Extrinsics, any, any>,
  session: Section<Extrinsics, any, any>,
  staking: Section<Extrinsics, any, any>,
  timestamp: Section<Extrinsics, any, any>,
  treasury: Section<Extrinsics, any, any>,
  // polkadot
  parachains: Section<Extrinsics, any, any>
};

export type Extrinsic$Sections = keyof Extrinsics;
