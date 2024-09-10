// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../../types/index.js';
import type { ExtrinsicSignatureOptions } from '../types.js';

import { GenericExtrinsicSignatureV4 } from '../v4/ExtrinsicSignature.js';

export class GenericExtrinsicSignatureV5 extends GenericExtrinsicSignatureV4 {
  constructor (registry: Registry, value?: GenericExtrinsicSignatureV4 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super(registry, value, { isSigned });
  }
}
