// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem } from '@polkadot/params/types';
import { Storages } from '@polkadot/storage/types';

import createStorageKey from '@polkadot/storage/key';

export default function storageKey ([key, ...params]: [SectionItem<Storages>, any]): Uint8Array {
  return createStorageKey(key).apply(null, params);
}
