// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Section } from '@polkadot/params/types';

export type Storage$Key$Value = number | BN | Uint8Array | string;

export type Storages = {
  consensus: Section<Storages, any, any>,
  // contract: Section<Storages, any, any>,
  council: Section<Storages, any, any>,
  councilVoting: Section<Storages, any, any>,
  democracy: Section<Storages, any, any>,
  parachains: Section<Storages, any, any>,
  session: Section<Storages, any, any>,
  staking: Section<Storages, any, any>,
  system: Section<Storages, any, any>,
  timestamp: Section<Storages, any, any>
};

export type Storage$Sections = keyof Storages;
