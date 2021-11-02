// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, PortableRegistry, SiVariant } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, IsEvent } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyMethods } from '../../../create/lazy';
import { variantToMeta } from '../errors';
import { objectNameToString } from '../util';

export function filterEventsSome ({ events }: PalletMetadataLatest): boolean {
  return events.isSome;
}

function createIsEvent (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number): IsEvent<AnyTuple> {
  return {
    is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
      sectionIndex === eventRecord.index[0] &&
      variant.index.eq(eventRecord.index[1]),
    meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
  };
}

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Events {
  const result: Events = {};

  const lazySection = ({ events, name }: PalletMetadataLatest, sectionIndex: number): void => {
    lazyMethod(
      result,
      lookup.getSiType(events.unwrap().type).def.asVariant.variants,
      (variants: SiVariant[]) =>
        lazyMethods(
          variants,
          (variant: SiVariant) =>
            createIsEvent(registry, lookup, variant, sectionIndex),
          objectNameToString
        ),
      () => stringCamelCase(name)
    );
  };

  const filtered = pallets.filter(filterEventsSome);

  for (let p = 0; p < filtered.length; p++) {
    const pallet = filtered[p];

    lazySection(pallet, version >= 12 ? pallet.index.toNumber() : p);
  }

  return result;
}
