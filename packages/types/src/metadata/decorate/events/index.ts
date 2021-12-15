// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletMetadataLatest, SiVariant } from '../../../interfaces';
import type { AnyTuple, IEvent, Registry } from '../../../types';
import type { Events, IsEvent } from '../types';

import { lazyMethod, stringCamelCase } from '@polkadot/util';

import { lazyVariants } from '../../../create/lazy';
import { variantToMeta } from '../errors';
import { objectNameToString } from '../util';

export function filterEventsSome ({ events }: PalletMetadataLatest): boolean {
  return events.isSome;
}

/** @internal */
export function decorateEvents (registry: CodecRegistry, { lookup, pallets }: MetadataLatest, version: number): Events {
  const result: Events = {};
  const filtered = pallets.filter(filterEventsSome);

  for (let i = 0; i < filtered.length; i++) {
    const { events, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;

    lazyMethod(result, stringCamelCase(name), () =>
      lazyVariants(lookup, events.unwrap(), objectNameToString, (variant: SiVariant): IsEvent<AnyTuple> => ({
        is: <T extends AnyTuple> (eventRecord: IEvent<AnyTuple>): eventRecord is IEvent<T> =>
          sectionIndex === eventRecord.index[0] &&
          variant.index.eq(eventRecord.index[1]),
        meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
      }))
    );
  }

  return result;
}
