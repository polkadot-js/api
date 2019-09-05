// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicPayloadOptions } from './types';

import Struct from '../../codec/Struct';

/**
 * @name ExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export default class ExtrinsicPayloadUnknown extends Struct {
  public constructor (value?: any, { version = 0 }: Partial<ExtrinsicPayloadOptions> = {}) {
    super({});

    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
}
