// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact } from '@polkadot/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { isCompact } from '@polkadot/util';

interface CompatHeader { number: Compact<BlockNumber> | BlockNumber }

export function unwrapBlockNumber (hdr: CompatHeader): BlockNumber {
  return isCompact<BlockNumber>(hdr.number)
    ? hdr.number.unwrap()
    : hdr.number;
}
