// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

export type ChainUpgradesRaw = [blockNumber: number, specVersion: number][];

export type ChainUpgradesExpanded = [blockNumber: number, specVersion: number, runtimeApis: [apiHash: HexString, apiVersion: number][]][];
