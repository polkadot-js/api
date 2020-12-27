// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest } from '@polkadot/types/interfaces';
import type { AnyTuple, IEventRecord, Registry } from '@polkadot/types/types';
import type { Events, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isEvent <T extends AnyTuple> (eventRecord: IEventRecord<AnyTuple>, sectionIndex: number, eventIndex: number): eventRecord is IEventRecord<T> {
  return eventRecord.event.index[0] === sectionIndex && eventRecord.event.index[0] === eventIndex;
}

/** @internal */
export function decorateEvents (_: Registry, { modules }: MetadataLatest, metaVersion: number): Events {
  return modules.reduce((result: Events, { events, index, name }, _sectionIndex): Events => {
    if (!events.isSome) {
      return result;
    }

    const sectionIndex = metaVersion === 12 ? index.toNumber() : _sectionIndex;

    result[stringCamelCase(name)] = events.unwrap().reduce((newModule: ModuleEvents, meta, eventIndex): ModuleEvents => {
      // we don't camelCase the event name
      newModule[meta.name.toString()] = {
        is: <T extends AnyTuple> (eventRecord: IEventRecord<AnyTuple>): eventRecord is IEventRecord<T> =>
          isEvent(eventRecord, sectionIndex, eventIndex),
        meta
      };

      return newModule;
    }, {} as ModuleEvents);

    return result;
  }, {} as Events);
}
