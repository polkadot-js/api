// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types.js';

import { emptyCheck } from './emptyCheck.js';

export const shell: ExtDef = {
  DisallowSigned: emptyCheck
};
