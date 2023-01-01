// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isFunction } from '@polkadot/util';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  return isFunction((o as { eq: unknown }).eq);
}
