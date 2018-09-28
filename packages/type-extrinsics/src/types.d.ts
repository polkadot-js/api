// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

export interface ExtrinsicFunction {
  (...args: any[]): void
}

export interface ModuleExtrinsics {
  [key: string]: ExtrinsicFunction;
}

export interface Extrinsics {
  [key: string]: ModuleExtrinsics; // Will hold modules returned by state_getMetadata
}
