// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataV14, PortableRegistry, SiVariant } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, IsEvent, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { variantToMeta } from '../errors';

export function filterEventsSome ({ events }: PalletMetadataV14): boolean {
  return events.isSome;
}

function createIsEvent (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number): IsEvent<AnyTuple> {
  return {
    is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
      eventRecord.index[0] === sectionIndex &&
      variant.index.eq(eventRecord.index[1]),
    meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
  };
}

function createLazyMethod (registry: Registry, lookup: PortableRegistry, result: ModuleEvents, variant: SiVariant, sectionIndex: number): void {
  let cached: IsEvent<AnyTuple> | null = null;

  function get (): IsEvent<AnyTuple> {
    if (!cached) {
      cached = createIsEvent(registry, lookup, variant, sectionIndex);
    }

    return cached;
  }

  Object.defineProperty(result, variant.name.toString(), { enumerable: true, get });
}

function createLazySection (registry: Registry, lookup: PortableRegistry, result: Events, { events, name }: PalletMetadataV14, sectionIndex: number): void {
  let cached: ModuleEvents | null = null;

  function get (): ModuleEvents {
    if (!cached) {
      cached = {};

      const { variants } = lookup.getSiType(events.unwrap().type).def.asVariant;

      for (let v = 0; v < variants.length; v++) {
        createLazyMethod(registry, lookup, cached, variants[v], sectionIndex);
      }
    }

    return cached;
  }

  Object.defineProperty(result, stringCamelCase(name), { enumerable: true, get });
}

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Events {
  const filtered = pallets.filter(filterEventsSome);
  const result: Events = {};

  for (let p = 0; p < filtered.length; p++) {
    const sectionIndex = metaVersion >= 12
      ? filtered[p].index.toNumber()
      : p;

    createLazySection(registry, lookup, result, filtered[p], sectionIndex);
  }

  return result;
}
