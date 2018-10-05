// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsic } from '@polkadot/types/index';
import { FunctionMetadata } from '@polkadot/types/Metadata';

export interface ExtrinsicFunction {
  (...args: any[]): Extrinsic,
  callIndex: Uint8Array,
  meta: FunctionMetadata,
  method: string;
  section: string;
  toJSON: () => any;
}

export interface ModuleExtrinsics {
  [key: string]: ExtrinsicFunction;
}

export interface Extrinsics {
  [key: string]: ModuleExtrinsics; // Will hold modules returned by state_getMetadata
}
