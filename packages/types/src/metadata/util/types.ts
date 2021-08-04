// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface Check {
  compare: Record<string, unknown>;
  data: string;
  fails?: string[];
  types?: Record<string, unknown>;
}
