// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact } from '@polkadot/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { isCompact } from '@polkadot/util';

type CompatHeader = { number: Compact<BlockNumber> | BlockNumber };

export function unwrapBlockNumber (hdr: CompatHeader): BlockNumber {
  return isCompact<BlockNumber>(hdr.number)
    ? hdr.number.unwrap()
    : hdr.number;
}
