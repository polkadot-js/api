// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '@polkadot/types/interfaces';

import { callMethod } from './helpers';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { AccountId } from '@polkadot/types/interfaces';

export const members = callMethod<AccountId[]>('members', []);
