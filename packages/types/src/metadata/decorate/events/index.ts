// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { variantToMeta } from '../errors';

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Events {
  return pallets
    .filter(({ events }) => events.isSome)
    .reduce((result: Events, { events, index, name }, _sectionIndex): Events => {
      const sectionIndex = metaVersion >= 12
        ? index.toNumber()
        : _sectionIndex;

      result[stringCamelCase(name)] = lookup.getSiType(events.unwrap().type).def.asVariant.variants.reduce((newModule: ModuleEvents, variant): ModuleEvents => {
        // we don't camelCase the event name
        newModule[variant.name.toString()] = {
          is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
            eventRecord.index[0] === sectionIndex &&
            variant.index.eq(eventRecord.index[1]),
          meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
        };

        return newModule;
      }, {} as ModuleEvents);

      return result;
    }, {} as Events);
}
