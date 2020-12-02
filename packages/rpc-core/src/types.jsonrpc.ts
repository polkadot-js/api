// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME, this whole file needs to move to API

import type { AnyFunction } from '@polkadot/types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RpcInterface {}

export type AugmentedRpc<F extends AnyFunction> = F;
