// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Section, CreateSection, CreateSectionOptions } from './types';

import bnToU8a from '@polkadot/util/bn/toU8a';

import createMethod from './method';

export default function createSection <T> (name: keyof T, _index: number = 0): CreateSection<T> {
  const index = bnToU8a(_index, 8, true);
  const creator = (optOrFn: CreateSectionOptions<T>): Section<T> => {
    if (typeof optOrFn === 'function') {
      return creator(
        optOrFn(
          createMethod(name, index)
        )
      );
    }

    const { description, isDeprecated = false, isHidden = false } = optOrFn;

    return {
      description,
      isDeprecated,
      isHidden,
      index,
      name,
      private: optOrFn.private || {},
      public: optOrFn.public || {}
    };
  };

  return creator;
}
