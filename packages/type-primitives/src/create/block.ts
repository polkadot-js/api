// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Block } from '../block';
import { BlockIncomplete } from './types';

import headerBuilder from './header';

export default function block ({ header = {}, extrinsics = [] }: BlockIncomplete): Block {
  return {
    header: headerBuilder(header, extrinsics),
    extrinsics
  };
}
