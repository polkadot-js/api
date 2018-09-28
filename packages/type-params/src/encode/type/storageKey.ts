// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem } from '@polkadot/params/types';

import createStorageKey from '../../key';

export default function storageKey ([key, ...params]: [SectionItem<any>, any]): Uint8Array {
  return createStorageKey(key).apply(null, params);
}
