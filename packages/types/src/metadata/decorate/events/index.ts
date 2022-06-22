// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletMetadataLatest, SiVariant } from '../../../interfaces';
import type { IEvent, IEventLike } from '../../../types';
import type { Events, IsEvent } from '../types';

import { isCodec, isU8a, lazyMethod, stringCamelCase } from '@polkadot/util';

import { lazyVariants } from '../../../create/lazy';
import { variantToMeta } from '../errors';
import { objectNameToString } from '../util';

export function filterEventsSome ({ events }: PalletMetadataLatest): boolean {
  return events.isSome;
}

/** @internal */
export function decorateEvents (registry: Registry, { lookup, pallets }: MetadataLatest, version: number): Events {
  const result: Events = {};
  const filtered = pallets.filter(filterEventsSome);

  for (let i = 0; i < filtered.length; i++) {
    const { events, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, stringCamelCase(name), () =>
      lazyVariants(lookup, events.unwrap(), objectNameToString, (variant: SiVariant): IsEvent<AnyTuple> => ({
        // We sprinkle in isCodec & isU8a to ensure we are dealing with the correct objects
        is: <T extends AnyTuple> (eventRecord: IEventLike): eventRecord is IEvent<T> =>
          isCodec(eventRecord) &&
          isU8a(eventRecord.index) &&
          sectionIndex === eventRecord.index[0] &&
          variant.index.eq(eventRecord.index[1]),
        meta: registry.createTypeUnsafe('EventMetadataLatest', [variantToMeta(lookup, variant)])
      }))
    );
  }

  return result;
}
