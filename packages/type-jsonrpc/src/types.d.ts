// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Section } from '@polkadot/params/types';
import { PrivateMethods as AuthorPrivate, PublicMethods as AuthorPublic}  from './author';
import { PrivateMethods as ChainPrivate, PublicMethods as ChainPublic}  from './chain';
import { PrivateMethods as StatePrivate, PublicMethods as StatePublic}  from './state';
import { PrivateMethods as SystemPrivate, PublicMethods as SystemPublic}  from './system';

export type Interfaces = {
  author: Section<Interfaces, AuthorPrivate, AuthorPrivate>,
  chain: Section<Interfaces, ChainPrivate, ChainPublic>,
  state: Section<Interfaces, StatePrivate, StatePublic>,
  system: Section<Interfaces, SystemPrivate, SystemPublic>
}

export type Interface$Sections = keyof Interfaces;
