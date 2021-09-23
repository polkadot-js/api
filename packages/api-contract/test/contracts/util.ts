// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function createVersionedExport (version: string, orig: Record<string, unknown>, exp: Record<string, unknown>): Record<string, unknown> {
  Object.entries(orig).forEach(([name, json]): void => {
    exp[`${version}_${name}`] = json;
  });

  return exp;
}
