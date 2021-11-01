// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletEventMetadataV14, PalletMetadataV14, PortableRegistry, SiVariant } from '../../../interfaces';
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

function lazyMethod (registry: Registry, lookup: PortableRegistry, result: ModuleEvents, variant: SiVariant, sectionIndex: number): void {
  let cached: IsEvent<AnyTuple> | null = null;

  Object.defineProperty(result, variant.name.toString(), {
    enumerable:
    true,
    get: (): IsEvent<AnyTuple> => {
      if (!cached) {
        cached = createIsEvent(registry, lookup, variant, sectionIndex);
      }

      return cached;
    }
  });
}

function lazyMethods (registry: Registry, lookup: PortableRegistry, events: PalletEventMetadataV14, sectionIndex: number): ModuleEvents {
  const result: ModuleEvents = {};
  const { variants } = lookup.getSiType(events.type).def.asVariant;

  for (let v = 0; v < variants.length; v++) {
    lazyMethod(registry, lookup, result, variants[v], sectionIndex);
  }

  return result;
}

function lazySection (registry: Registry, lookup: PortableRegistry, result: Events, { events, name }: PalletMetadataV14, sectionIndex: number): void {
  let cached: ModuleEvents | null = null;

  Object.defineProperty(result, stringCamelCase(name), {
    enumerable: true,
    get: (): ModuleEvents => {
      if (!cached) {
        cached = lazyMethods(registry, lookup, events.unwrap(), sectionIndex);
      }

      return cached;
    }
  });
}

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Events {
  const filtered = pallets.filter(filterEventsSome);
  const result: Events = {};

  for (let p = 0; p < filtered.length; p++) {
    const sectionIndex = metaVersion >= 12
      ? filtered[p].index.toNumber()
      : p;

    lazySection(registry, lookup, result, filtered[p], sectionIndex);
  }

  return result;
}
