// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
