// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function createVersionedExport (versioned: Record<string, Record<string, unknown>>): Record<string, Record<string, unknown>> {
  const result: Record<string, Record<string, unknown>> = {};

  Object.entries(versioned).forEach(([version, contracts]) =>
    Object.entries(contracts).forEach(([name, contract]): void => {
      result[`${version}_${name}`] = contract as Record<string, unknown>;
    })
  );

  return result;
}
