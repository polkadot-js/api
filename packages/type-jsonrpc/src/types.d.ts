// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Section } from '@polkadot/params/types';

export type Interfaces = {
  author: Section<Interfaces>,
  chain: Section<Interfaces>,
  state: Section<Interfaces>,
  system:Section<Interfaces>
}

export type Interface$Sections = keyof Interfaces;
