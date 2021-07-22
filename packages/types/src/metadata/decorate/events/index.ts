// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isEvent <T extends AnyTuple> (event: IEvent<AnyTuple>, sectionIndex: number, eventIndex: number): event is IEvent<T> {
  return event.index[0] === sectionIndex && event.index[1] === eventIndex;
}

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
            isEvent(eventRecord, sectionIndex, variant.index.toNumber()),
          meta: registry.createType('EventMetadataLatest', {
            ...variant,
            args: variant.fields.map(({ type }) =>
              lookup.getTypeDef(type).type
            )
          })
        };

        return newModule;
      }, {} as ModuleEvents);

      return result;
    }, {} as Events);
}
