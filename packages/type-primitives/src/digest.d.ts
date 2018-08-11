// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Bytes } from './base';

export type Digest$Log = Bytes;

export type Digest = {
  logs: Array<Digest$Log>
};
