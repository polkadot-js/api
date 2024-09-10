// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtrinsicSignatureV4 } from '../../interfaces/extrinsics/index.js';
import type { Call } from '../../interfaces/runtime/index.js';
import type { Registry } from '../../types/index.js';
import type { ExtrinsicOptions } from '../types.js';

import { GenericExtrinsicV4 } from '../v4/Extrinsic.js';

const EXTRINSIC_VERSION = 5;

export interface ExtrinsicValueV4 {
  method?: Call;
  signature?: ExtrinsicSignatureV4;
}

export class GenericExtrinsicV5 extends GenericExtrinsicV4 {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV4 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, value, { isSigned });
  }

  public override get version () {
    return EXTRINSIC_VERSION;
  }
}
