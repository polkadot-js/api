// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from './header';
import { UncheckedRaw } from './extrinsic';

export type Block = {
  header: Header,
  extrinsics: Array<UncheckedRaw>
};
