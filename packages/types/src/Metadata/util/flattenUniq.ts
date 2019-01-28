// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Quick and dirty flatten (.flat() not available)
export default function flattenUniq (list: Array<any>): Array<any> {
  const flat = list.reduce((result, entry) => {
    return result.concat(
      Array.isArray(entry)
        ? flattenUniq(entry)
        : entry
    );
  }, []);

  return [...new Set(flat)]
    .filter((value: any) => value)
    .sort();
}
