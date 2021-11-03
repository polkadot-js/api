// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, PortableRegistry, SiVariant } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, IsEvent } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyVariant } from '../../../create/lazy';
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
  const filtered = pallets.filter(filterEventsSome);

  for (let i = 0; i < filtered.length; i++) {
    const { events, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, stringCamelCase(name), () =>
      lazyVariant(lookup, events, objectNameToString, (variant: SiVariant) =>
        createIsEvent(registry, lookup, variant, sectionIndex)
      )
    );
  }

  return result;
}
