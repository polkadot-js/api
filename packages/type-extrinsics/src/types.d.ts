// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import UncheckedMortalExtrinsic from './UncheckedMortalExtrinsic'

export interface ExtrinsicFunction {
  (...args: any[]): UncheckedMortalExtrinsic
}

export interface ModuleExtrinsics {
  [key: string]: ExtrinsicFunction;
}

export interface Extrinsics {
  [key: string]: ModuleExtrinsics; // Will hold modules returned by state_getMetadata
}
