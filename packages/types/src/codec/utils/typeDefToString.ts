// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef } from '../types';

import { isString } from '@polkadot/util';

export function typeDefToString ({ params = [], type, displayName = type }: TypeDef): string {
  const paramsText = params.map(param => typeDefToString(param)).join(', ');
  if (['Option', 'Result', 'Vec'].includes(displayName)) {
    return `${displayName}<${paramsText}>`;
  } else if (isString(displayName)) {
    return displayName;
  }

  throw new Error(`Unknown type specified ${JSON.stringify(type)}`);
}
