// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MembersFn } from './types.js';

import { callMethod } from './helpers.js';

export const members: MembersFn = /*#__PURE__*/ callMethod('members', []);
