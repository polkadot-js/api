// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

type Types = string | Types[];

/** @internal */
export function flattenUniq (list: Types[], start: string[] = []): string[] {
  return [...new Set(
    list.reduce((result: string[], entry): string[] => {
      if (Array.isArray(entry)) {
        return flattenUniq(entry, result);
      }

      result.push(entry);

      return result;
    }, start)
  )];
}
