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

  for (let i = 0; i < filtered.length; i++) {
    const { events, index, name } = filtered[i];
    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : i;
    const newModule: ModuleEvents = {};

    for (const v of lookup.getSiType(events.unwrap().type).def.asVariant.variants) {
      // we don't camelCase the event name
      newModule[v.name.toString()] = {
        is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
          eventRecord.index[0] === sectionIndex &&
          v.index.eq(eventRecord.index[1]),
        meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, v))
      };
    }

    result[stringCamelCase(name)] = newModule;
  }

  return result;
}
