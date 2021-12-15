// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletCallMetadataLatest } from '../../interfaces/metadata';
import type { AnyJson } from '../../types';

import { Option, Text } from '@polkadot/types-codec';

import { u8 } from '../../primitive';

interface ModuleMetadataTrimmed {
  calls: Option<PalletCallMetadataLatest>;
  index: u8;
  name: Text;
}

function trimDocs (docs: Text[]): string[] {
  const strings = docs.map((d) => d.toString().trim());
  const firstEmpty = strings.findIndex((d) => !d.length);

  return firstEmpty === -1
    ? strings
    : strings.slice(0, firstEmpty);
}

/** @internal */
export function toCallsOnly (registry: CodecRegistry, { extrinsic, lookup, pallets }: MetadataLatest): AnyJson {
  return registry.createType('MetadataLatest', {
    extrinsic,
    lookup: {
      types: lookup.types.map(({ id, type }) =>
        registry.createType('PortableType', {
          id,
          type: {
            ...type,
            docs: trimDocs(type.docs)
          }
        })
      )
    },
    pallets: pallets.map(({ calls, index, name }): ModuleMetadataTrimmed => ({
      calls: registry.createType('Option<PalletCallMetadataLatest>', calls.unwrapOr(null)),
      index,
      name
    }))
  }).toJSON();
}
