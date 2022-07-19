// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

export interface Check {
  compare: Record<string, unknown>;
  data: HexString;
  fails?: string[];
  types?: unknown[];
}
