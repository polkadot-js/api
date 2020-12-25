// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord, MetadataLatest } from '@polkadot/types/interfaces';
import type { AnyTuple, Registry } from '@polkadot/types/types';
import type { Events, IsEvent, ModuleEvents } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isEvent (eventRecord: EventRecord, sectionIndex: number, eventIndex: number): boolean {
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
      const isA = ((eventRecord: EventRecord) => isEvent(eventRecord, sectionIndex, eventIndex)) as unknown as IsEvent<AnyTuple>;

      isA.meta = meta;
      newModule[stringCamelCase(`is_${meta.name.toString()}`)] = isA;

      return newModule;
    }, {} as ModuleEvents);

    return result;
  }, {} as Events);
}
