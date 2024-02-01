// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type ExtraTypes = Record<string, Record<string, {
  runtime?: Record<string, any>;
  types: Record<string, any>;
}>>;
