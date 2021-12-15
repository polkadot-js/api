// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types';
import type { ExtrinsicPayloadOptions } from './types';

import { Struct } from '@polkadot/types-codec';

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export class GenericExtrinsicPayloadUnknown extends Struct {
  constructor (registry: CodecRegistry, value?: unknown, { version = 0 }: Partial<ExtrinsicPayloadOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
}
