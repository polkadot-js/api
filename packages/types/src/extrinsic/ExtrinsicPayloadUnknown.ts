// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';
import { ExtrinsicPayloadOptions } from './types';

import Struct from '../codec/Struct';

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export default class ExtrinsicPayloadUnknown extends Struct {
  constructor (registry: Registry, value?: unknown, { version = 0 }: Partial<ExtrinsicPayloadOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
}
