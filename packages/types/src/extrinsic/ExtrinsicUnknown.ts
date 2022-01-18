// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { ExtrinsicOptions } from './types';

import { Struct } from '@polkadot/types-codec';

import { UNMASK_VERSION } from './constants';

/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
export class GenericExtrinsicUnknown extends Struct {
  constructor (registry: Registry, value?: unknown, { isSigned = false, version = 0 }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & UNMASK_VERSION}`);
  }
}
