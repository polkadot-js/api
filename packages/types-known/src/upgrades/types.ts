// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

export type ChainUpgradesRaw = [number, number][];

export type ChainUpgradesGenerated = [number, number, [HexString, number][]][];

export type ChainUpgradesManual = [number, number][];
