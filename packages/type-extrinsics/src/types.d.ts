// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Section } from '@polkadot/params/types';

export interface ExtrinsicFunction {
  (...args: any[]): void
}

export interface ModuleExtrinsics {
  [key: string]: ExtrinsicFunction;
}

export interface Extrinsics {
  [key: string]: ModuleExtrinsics; // Will hold modules returned by state_getMetadata
}

// Legacy types
export type ExtrinsicsLegacy = {
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

export type ExtrinsicLegacy$Sections = keyof Extrinsics;
