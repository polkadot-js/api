// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem, CreateItem, CreateItems, CreateItemOptions } from './types';

import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import isUndefined from '@polkadot/util/is/undefined';

export default function createMethod<T> (section: keyof T, sectionIndex: Uint8Array): CreateItems<T> {
  return (name: string, index: number = 0): CreateItem<T> =>
    ({ description, key = '', params, type, isDeprecated = false, isHidden = false, isSigned = false, isUnhashed = false, subscribe }: CreateItemOptions): SectionItem<T> => ({
      description,
      index: u8aConcat(sectionIndex, bnToU8a(index, 8, true)),
      isDeprecated,
      isHidden,
      isSigned,
      isSubscription: !isUndefined(subscribe),
      isUnhashed,
      key,
      name,
      params,
      section,
      subscribe: subscribe || ['', ''],
      type
    });
}
