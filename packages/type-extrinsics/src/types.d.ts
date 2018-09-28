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
  consensus: Section<ExtrinsicsLegacy, any, any>,
  council: Section<ExtrinsicsLegacy, any, any>,
  councilVoting: Section<ExtrinsicsLegacy, any, any>,
  democracy: Section<ExtrinsicsLegacy, any, any>,
  session: Section<ExtrinsicsLegacy, any, any>,
  staking: Section<ExtrinsicsLegacy, any, any>,
  timestamp: Section<ExtrinsicsLegacy, any, any>,
  treasury: Section<ExtrinsicsLegacy, any, any>,
  // polkadot
  parachains: Section<ExtrinsicsLegacy, any, any>
};

export type ExtrinsicLegacy$Sections = keyof ExtrinsicsLegacy;
