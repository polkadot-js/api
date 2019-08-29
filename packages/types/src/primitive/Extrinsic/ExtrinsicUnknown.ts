// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicOptions } from './types';

import Struct from '../../codec/Struct';
import { UNMASK_VERSION } from './constants';

/**
 * @name ExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
export default class ExtrinsicUnknown extends Struct {
  public constructor (value?: any, { isSigned = false, version = 0 }: Partial<ExtrinsicOptions> = {}) {
    super({});

    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & UNMASK_VERSION}`);
  }
}
