// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, Section } from '@polkadot/params/types';
import { Extrinsics, ExtrinsicLegacy$Sections } from '../types';

import createSection from '@polkadot/params/section';

export default (name: ExtrinsicLegacy$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Timestamp'
  }));
