// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

type Types = string | Types[];

/** @internal */
export default function flattenUniq (list: Types[]): string[] {
  const flat = list.reduce((result: string[], entry): string[] => {
    return result.concat(
      Array.isArray(entry)
        ? flattenUniq(entry)
        : entry
    );
  }, []);

  return [...new Set(flat)]
    .filter((value: string) => value)
    .sort();
}
