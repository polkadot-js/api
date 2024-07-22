// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Use these to generate all the Meta* types below via template keys
// NOTE: Keep from latest -> earliest, see the LATEST_VERSION 0 index
export const KNOWN_VERSIONS = [15, 14, 13, 12, 11, 10, 9] as const;
export const LATEST_VERSION = KNOWN_VERSIONS[0];

// This is part of migration. The toCallsOnly would be usede for esxtensions,
// i.e. they need to be updated. To ensure that they are passed a known version
// we actually set this to a known-working version
//
// NOTE: This would only work on compatible types, i.e. v14 & v15 comply
export const TO_CALLS_VERSION = 14; // LATEST_VERSION;

export type MetaVersionAll = typeof KNOWN_VERSIONS[number];
export type MetaVersionAsX = `asV${MetaVersionAll}`;
