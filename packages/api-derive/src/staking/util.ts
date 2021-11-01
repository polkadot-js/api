// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EraIndex } from '@polkadot/types/interfaces';

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((era) => !list.some((entry) => era.eq(entry.era)));
}
