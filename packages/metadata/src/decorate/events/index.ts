// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '@polkadot/types/interfaces';
import type { AnyTuple, IEvent, Registry } from '@polkadot/types/types';
import type { Events, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isEvent <T extends AnyTuple> (event: IEvent<AnyTuple>, sectionIndex: number, eventIndex: number): event is IEvent<T> {
  return event.index[0] === sectionIndex && event.index[1] === eventIndex;
}

/** @internal */
export function decorateEvents (_: Registry, { modules }: MetadataLatest, metaVersion: number): Events {
  return modules
    .filter(({ events }) => events.isSome)
    .reduce((result: Events, { events, index, name }, _sectionIndex): Events => {
      const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;

      result[stringCamelCase(name)] = events.unwrap().reduce((newModule: ModuleEvents, meta, eventIndex): ModuleEvents => {
        // we don't camelCase the event name
        newModule[meta.name.toString()] = {
          is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
            isEvent(eventRecord, sectionIndex, eventIndex),
          meta
        };

        return newModule;
      }, {} as ModuleEvents);

      return result;
    }, {} as Events);
}
