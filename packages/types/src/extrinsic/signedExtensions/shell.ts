// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types';

import { emptyCheck } from './emptyCheck';

export const shell: ExtDef = {
  DisallowSigned: emptyCheck
};
