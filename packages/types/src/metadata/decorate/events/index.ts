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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateEvents (_: Registry, { lookup, pallets }: MetadataLatest, _metaVersion: number): Events {
  return pallets
    .filter(({ events }) => events.isSome)
    .reduce((result: Events, { events, index, name }): Events => {
      result[stringCamelCase(name)] = lookup.getSiType(events.unwrap().type).def.asVariant.variants.reduce((newModule: ModuleEvents, meta): ModuleEvents => {
        // we don't camelCase the event name
        newModule[meta.name.toString()] = {
          is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
            isEvent(eventRecord, index.toNumber(), meta.index.toNumber()),
          meta
        };

        return newModule;
      }, {} as ModuleEvents);

      return result;
    }, {} as Events);
}
