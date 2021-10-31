// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataV14 } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { variantToMeta } from '../errors';

export function filterEventsSome ({ events }: PalletMetadataV14): boolean {
  return events.isSome;
}

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Events {
  const filtered = pallets.filter(filterEventsSome);
  const result: Events = {};

  for (let p = 0; p < filtered.length; p++) {
    const { events, index, name } = filtered[p];
    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : p;
    const newModule: ModuleEvents = {};
    const { variants } = lookup.getSiType(events.unwrap().type).def.asVariant;

    for (let v = 0; v < variants.length; v++) {
      const variant = variants[v];

      // we don't camelCase the event name
      newModule[variant.name.toString()] = {
        is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
          eventRecord.index[0] === sectionIndex &&
          variant.index.eq(eventRecord.index[1]),
        meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
      };
    }

    result[stringCamelCase(name)] = newModule;
  }

  return result;
}
