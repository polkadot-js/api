// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Section } from '@polkadot/params/types';

export type Storage$Key$Value = number | BN | Uint8Array | string;

export type Storages = {
  consensus: Section<Storages>,
  // contract: Section<Storages>,
  council: Section<Storages>,
  councilVoting: Section<Storages>,
  democracy: Section<Storages>,
  parachains: Section<Storages>,
  session: Section<Storages>,
  staking: Section<Storages>,
  system: Section<Storages>,
  timestamp: Section<Storages>
};

export type Storage$Sections = keyof Storages;
