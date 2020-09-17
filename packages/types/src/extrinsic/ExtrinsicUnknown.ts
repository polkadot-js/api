// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '../types';
import { ExtrinsicOptions } from './types';

import Struct from '../codec/Struct';
import { UNMASK_VERSION } from './constants';

/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
export default class ExtrinsicUnknown extends Struct {
  constructor (registry: Registry, value?: unknown, { isSigned = false, version = 0 }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & UNMASK_VERSION}`);
  }
}
