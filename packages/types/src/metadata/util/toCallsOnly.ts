// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletCallMetadataLatest } from '../../interfaces/metadata';
import type { AnyJson, Registry } from '../../types';

import { Option } from '../../codec';
import { Text, u8 } from '../../primitive';

interface ModuleMetadataTrimmed {
  calls: Option<PalletCallMetadataLatest>;
  index: u8;
  name: Text;
}

// function trimDocs (docs: Vec<Text>): string[] {
//   const strings = docs.map((d) => d.toString().trim());
//   const firstEmpty = strings.findIndex((d) => !d.length);

//   return firstEmpty === -1
//     ? strings
//     : strings.slice(0, firstEmpty);
// }

function mapCalls (registry: Registry, _calls: Option<PalletCallMetadataLatest>): Option<PalletCallMetadataLatest> {
  const calls = _calls.unwrapOr(null);

  return registry.createType(
    'Option<PalletCallMetadataLatest>' as any,
    // TODO Trim docs
    calls
  ) as Option<PalletCallMetadataLatest>;
}

/** @internal */
export function toCallsOnly (registry: Registry, { extrinsic, lookup, pallets }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    extrinsic,
    lookup,
    pallets: pallets.map(({ calls, index, name }): ModuleMetadataTrimmed => ({
      calls: mapCalls(registry, calls),
      index,
      name
    }))
  }).toJSON();
}
