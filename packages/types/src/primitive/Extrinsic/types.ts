// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../types';

export interface ExtrinsicOptions {
  isSigned: boolean;
  version: number;
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
