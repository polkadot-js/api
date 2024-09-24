// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber } from '@polkadot/types-codec/types';
import type { Preamble } from '../interfaces/types.js';

export interface ExtrinsicOptions {
  isSigned: boolean;
  version: number;
  preambleKind: PreambleKind;
}

export interface ExtrinsicPayloadOptions {
  version: number;
}

export interface ExtrinsicSignatureOptions {
  isSigned?: boolean;
}

export interface ExtrinsicExtraValue {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}

export type PreambleKind = 'bare' | 'general' | 'signed';
